import FirebaseService from './Firebase';

const fb = new FirebaseService()
const auth = fb.authService();

const login = async (email, password) => {
  const user = await auth.signInWithEmailAndPassword(email, password);

  return user;
}

const logout = async () => {
  await auth.signOut();
}

const getAuthStatus = () => {
  if(auth.currentUser && auth.currentUser.uid){
    return true;
  } else {
    return false;
  }
}

export {
  login,
  logout,
  getAuthStatus,
};
