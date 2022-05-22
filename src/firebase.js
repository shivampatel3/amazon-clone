// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClkCIcZrOqYC99n7EJvZ04q-bNTAY18QA",
  authDomain: "clone-62fe1.firebaseapp.com",
  projectId: "clone-62fe1",
  storageBucket: "clone-62fe1.appspot.com",
  messagingSenderId: "967612929215",
  appId: "1:967612929215:web:08e3b904c53bc48162a20a",
  measurementId: "G-1EBQKLCZFZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
