import firebase, { auth, database }  from 'firebase';

import config from '../config/firebase';

class Firebase {
  constructor() {
    // check if there is already an app initialized
    if(!(firebase.apps.length > 0)) {
      firebase.initializeApp(config);
    }
  }

  authService() {
    return auth();
  }

  databaseService() {
    return database();
  }
}

export default Firebase;
