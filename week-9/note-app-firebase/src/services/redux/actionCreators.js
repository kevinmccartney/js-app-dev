import {
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
} from './constants';

const addNote = note => ({
  type: ADD_NOTE,
  title: note.title,
  body: note.body,
});

const deleteNote = id => ({
  type: DELETE_NOTE,
  id,
})

export {
  addNote,
  deleteNote,
};