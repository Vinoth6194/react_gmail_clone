import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhmb-VDv-TelcleUxXXmEED1nGb70vB_Y",
  authDomain: "react--clone-5e7f3.firebaseapp.com",
  projectId: "react--clone-5e7f3",
  storageBucket: "react--clone-5e7f3.appspot.com",
  messagingSenderId: "486793875137",
  appId: "1:486793875137:web:134ace4d73f49a805fce40",
  measurementId: "G-94HCMPFQNC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
