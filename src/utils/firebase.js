import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfylz-Wn9kdlrptQFy_I_eqT9RViLDuyk",
  authDomain: "fir-95330.firebaseapp.com",
  projectId: "fir-95330",
  storageBucket: "fir-95330.appspot.com",
  messagingSenderId: "874477104459",
  appId: "1:874477104459:web:f2c25d873244fb5f5c8cce",
  measurementId: "G-JMR8FMHHTJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
