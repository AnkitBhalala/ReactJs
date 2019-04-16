import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://expensify-510.firebaseio.com", // process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// })

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 12000,
//   createdAt: 976123486
// });

// database.ref('expenses').push({
//   description: 'Phone bill',
//   note: '',
//   amount: 5600,
//   createdAt: 976123486
// });

// database.ref('expenses').push({
//   description: 'water bill',
//   note: '',
//   amount: 800.50,
//   createdAt: 976123486
// });

// database
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((event) => {
//     console.log('Error fetching data', error);
//   });

// database
//   .ref()
//   .set({
//     name: "Ankit Bhalala",
//     DOB: '05/12/1995',
//     age: 22,
//     location: {
//       city: "surat",
//       country: "india"
//     }
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch(error => {
//     console.log("Failed", error);
//   });

// database
//   .ref("age")
//   .remove()
//   .then(() => {
//     console.log("Data Removed");
//   })
//   .catch(error => {
//     console.log("Error:", error);
//   });
