// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyBSpcgmnPku4wAryrZ1axy6LJfvNVQyLIM",
    authDomain: "e-clone-db345.firebaseapp.com",
    projectId: "e-clone-db345",
    storageBucket: "e-clone-db345.appspot.com",
    messagingSenderId: "142812619570",
    appId: "1:142812619570:web:47625eafa92f28630b2d2b",
    measurementId: "G-EGEDVQ1X5F"
  });

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}