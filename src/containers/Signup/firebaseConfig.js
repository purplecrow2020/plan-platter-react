import firebase from 'firebase';

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
