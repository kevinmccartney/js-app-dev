import FirebaseService from './Firebase';

const fb = new FirebaseService()

const db = fb.databaseService();

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

export {
  getNotes,
  submitNote,
};
