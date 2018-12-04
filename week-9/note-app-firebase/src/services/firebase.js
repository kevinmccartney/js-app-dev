import firebase, { auth, database }  from 'firebase';

import config from '../config/firebase';

class Firebase {
  constructor() {
    firebase.initializeApp(config);
  }

  authService() {
    return auth();
  }

  databaseService() {
    return database();
  }
}

export default Firebase;
