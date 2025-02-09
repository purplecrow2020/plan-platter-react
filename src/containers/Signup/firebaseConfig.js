import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD7Bwpki9wZSuky0hW5e3PmhLuWR1hT1LI",
  authDomain: "plan-n-platter.firebaseapp.com",
  projectId: "plan-n-platter",
  storageBucket: "plan-n-platter.firebasestorage.app",
  messagingSenderId: "807690369273",
  appId: "1:807690369273:web:6fbe4c8cd30e33392c0a28",
  measurementId: "G-LK5RE0LNF5"
};


firebase.initializeApp(firebaseConfig);

export default firebase;
