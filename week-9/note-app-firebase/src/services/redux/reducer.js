import {
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  NOTES_RECEIVED,
} from './constants';

const initialState = {
  notes: [],
};

function reducer(stateObj = initialState, action) {
  switch(action.type) {
    case ADD_NOTE: {
      return {
        ...stateObj,
        notes: [
          ...stateObj.notes,
          {
            id: Date.now(),
            title: action.title,
            body: action.body,
          },
        ],
      }
    }
    case DELETE_NOTE: {
      const newNoteArr = stateObj.notes.filter(note => note.id !== parseFloat(action.id));

      return {
        ...stateObj,
        notes: newNoteArr
      };
    }
    case UPDATE_NOTE: {
      const notesWithoutObjToUpdate = stateObj.notes.filter(note => note.id !== parseFloat(action.id));

      return {
        ...stateObj,
        notes: [
          ...notesWithoutObjToUpdate,
          {
            id: parseFloat(action.id),
            body: action.body,
            title: action.title,
          }
        ]
      };
    }
    case NOTES_RECEIVED: {
      return {
        ...stateObj,
        notes: action.notes,
      }
    }
    default:
      return stateObj;
  }
}

export default reducer;
