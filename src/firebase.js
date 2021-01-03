import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFeG9zzFSgg6ZNrOrDtmQg6H_DpF5PMxk",
  authDomain: "linkedin-clone-9f35d.firebaseapp.com",
  projectId: "linkedin-clone-9f35d",
  storageBucket: "linkedin-clone-9f35d.appspot.com",
  messagingSenderId: "869007542888",
  appId: "1:869007542888:web:8dfb6a61557de0047889dd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
