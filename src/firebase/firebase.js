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

// change for refresh
const database = firebase.database();

const onValueChange = snapshot => {
  console.log(snapshot.val());
};

database.ref().on('value', onValueChange);

setTimeout(() => {
  database.ref('age').set(28);
}, 3500);
setTimeout(() => {
  database.ref().off();
}, 7000);
setTimeout(() => {
  database.ref('age').set(23);
}, 10500);
// database
//   .ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Error fetching data', e);
//   });
// database
//   .ref()
//   .set({
//     name: 'John Wayne',
//     age: 22,
//     stressLevel: 3,
//     job: {
//       title: 'Stunt driver',
//       company: 'MGM',
//     },
//     location: {
//       city: 'LA',
//       country: 'United States',
//     },
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(e => {
//     console.log('This failed.', e);
//   });

// Change the stressLevel to a 9
// Change job.company to Amazon
// Change location.city to Seattle

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
// });
