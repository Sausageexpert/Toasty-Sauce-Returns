import firebase from 'firebase';
const firebaseConfig ={
    apiKey: "AIzaSyAMShcCBuajuF1KK8NNdM7Q3aWAr6kUldE",
    authDomain: "tales-of-sauciness.firebaseapp.com",
    projectId: "tales-of-sauciness",
    storageBucket: "tales-of-sauciness.appspot.com",
    messagingSenderId: "592427362219",
    appId: "1:592427362219:web:7f14e52bd797ee216014ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database() 