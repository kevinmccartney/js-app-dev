const getNotes = async () => {
  const notesRef = await window.firebase.database().ref('/notes').once('value')
  
  return notesRef.val();
};

export {
  getNotes,
};
