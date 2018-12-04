function reducer(initialState = { notes: []}, action) {
  switch(action.type) {
    case 'ADD_NOTE': {
      return {
        notes: [
          ...initialState.notes,
          {
            id: Date.now(),
            title: action.title,
            body: action.body,
          },
        ],
      }
    }
    case 'DELETE_NOTE': {
      const newNoteArr = initialState.notes.filter(note => note.id !== parseFloat(action.id));

      return {
        notes: newNoteArr
      };
    }
    case 'UPDATE_NOTE': {
      const notesWithoutObjToUpdate = initialState.notes.filter(note => note.id !== parseFloat(action.id));

      return {
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
    default:
      return initialState;
  }
}

export default reducer;
