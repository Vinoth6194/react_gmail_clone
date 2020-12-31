import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL4-pkODuIvdydjzD520o1--DDmKZ5UI4",
  authDomain: "react--clone-8aa8a.firebaseapp.com",
  projectId: "react--clone-8aa8a",
  storageBucket: "react--clone-8aa8a.appspot.com",
  messagingSenderId: "995736285710",
  appId: "1:995736285710:web:7675ab67e19f4be1c7025f",
  measurementId: "G-V6S3C3R2N4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
