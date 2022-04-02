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
  apiKey: "AIzaSyDmbqQHgAmO9Dhwsgdja-4QJswVaxZdmHk",
  authDomain: "blockchain-b8176.firebaseapp.com",
  databaseURL: "https://blockchain-b8176.firebaseio.com",
  projectId: "blockchain-b8176",
  storageBucket: "blockchain-b8176.appspot.com",
  messagingSenderId: "299953838131",
  appId: "1:299953838131:web:929745237fe56b5a55eb46",
  measurementId: "G-ZZSYZK9G28"
};



firebase.initializeApp(firebaseConfig);

export default firebase;
