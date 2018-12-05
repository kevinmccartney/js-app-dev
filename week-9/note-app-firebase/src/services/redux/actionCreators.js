import { map } from 'lodash';

import {
  ADD_NOTE,
  DELETE_NOTE,
  // UPDATE_NOTE,
  NOTES_RECEIVED,
} from './constants';

const addNote = note => ({
  type: ADD_NOTE,
  title: note.title,
  body: note.body,
});

const deleteNote = id => ({
  type: DELETE_NOTE,
  id,
});

const notesReceived = notes => {
  const transformedNotes = map(notes, (value, key) => ({
    id: key,
    ...value
  }));
  return {
    type: NOTES_RECEIVED,
    notes: transformedNotes,
  };
};

export {
  addNote,
  deleteNote,
  notesReceived,
};
