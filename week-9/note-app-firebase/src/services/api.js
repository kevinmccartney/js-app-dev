import FirebaseService from './Firebase';

const fb = new FirebaseService()

const db = fb.databaseService();
const auth = fb.authService();

const getNotes = async () => {
  const notesRef = await db.ref('/notes').once('value')

  return notesRef.val();
};

// return the new value that was just created
const submitNote = async (note) => {
  const noteRef = db.ref('/notes').push();

  await noteRef.set({
    ...note,
    owner: 1,
  });

  const newValue = await noteRef.once('value');

  return newValue.val();
}

const updateNote = async (id, body) => {
  const noteRef = db.ref(`/notes/${id}`);

  await noteRef.update(body);

  const updatedNoteRef = await noteRef.once('value');

  return updatedNoteRef.val();
}

const deleteNote = async (id) => {
  const noteRef = db.ref(`/notes/${id}`);

  await noteRef.remove();
}

const login = async () => {
  const user = await auth.signInAnonymously();

  return user;
}

const logout = async () => {
  await auth.signOut();
}

const isAuthed = () => {
  if(auth.currentUser && auth.currentUser.uid){
    return true;
  } else {
    return false;
  }
}

export {
  deleteNote,
  getNotes,
  isAuthed,
  login,
  logout,
  updateNote,
  submitNote,
};
