import FirebaseService from './Firebase';

const fb = new FirebaseService()

const db = fb.databaseService();

const getNotes = async () => {
  const notesRef = await db.ref('/notes').once('value')
  
  return notesRef.val();
};

export {
  getNotes,
};
