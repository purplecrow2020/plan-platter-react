import firebase from 'firebase';

// const firebaseConfig  = {
//     apiKey: "AIzaSyClWLgbsV8ojshhcexsZ1mgnQE9f0UM7UI",
//     authDomain: "biviolin-7959e.firebaseapp.com",
//     projectId: "biviolin-7959e",
//     storageBucket: "biviolin-7959e.appspot.com",
//     messagingSenderId: "793832895294",
//     appId: "1:793832895294:web:b7b680c0ef6a63084bb26f",
//     measurementId: "G-HZS9WZEES5"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyBxAlDLX8TzIYch_GR7Jsmjtd195d7z8Vw",
  authDomain: "plan-platter.firebaseapp.com",
  projectId: "plan-platter",
  storageBucket: "plan-platter.appspot.com",
  messagingSenderId: "44319218709",
  appId: "1:44319218709:web:eb84d82cc5d4d7d78c821c",
  measurementId: "G-V6DVHND11J"
};


firebase.initializeApp(firebaseConfig);

export default firebase;
