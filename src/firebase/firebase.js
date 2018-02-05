import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

// change for refresh
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
// child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//
//   console.log(expenses);
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//
//     console.log(expenses);
//   });
// database.ref('expenses').push({
//   description: 'skateboard',
//   note: 'yellow and two years old',
//   amount: '21.22',
//   createdAt: 12345,
// });

// database.ref('notes/-L4D5hSwnWgv7u6HpHxW').remove();
// database.ref('notes').push({
//   title: 'so cool!',
//   body: 'yes it is neat',
// });

// const firebaseNotes = {
//   notes: {
//     asfddsf: {
//       title: 'First note',
//       body: 'my note'
//     },
//     alldiek: {
//       title: 'One more note',
//       body: 'cool stuff here'
//     }
// }
// const notes = [
//   {
//     id: '12',
//     title: 'first note',
//     body: 'This is my note',
//   },
//   {
//     id: '3456',
//     title: 'another note',
//     body: 'this is my note',
//   },
// ];
//
// database.ref('notes').set(notes);
// database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });
// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log('Error with data fetching', e);
//   }
// );
//
// setTimeout(() => {
//   database.ref('age').set(28);
// }, 3500);
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
// setTimeout(() => {
//   database.ref('age').set(23);
// }, 10500);
// // database
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
