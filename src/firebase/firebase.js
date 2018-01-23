import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDYG7aalHm2evdm0-bqfV_9QJNAmhwtuaI',
  authDomain: 'expensify-ca9db.firebaseapp.com',
  databaseURL: 'https://expensify-ca9db.firebaseio.com',
  projectId: 'expensify-ca9db',
  storageBucket: 'expensify-ca9db.appspot.com',
  messagingSenderId: '447434791238',
};

firebase.initializeApp(config);

firebase
  .database()
  .ref()
  .set({
    name: 'John Wayne',
  });
