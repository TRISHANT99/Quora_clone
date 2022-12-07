import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDONwObHVEx4u1KTZHLgzfgOrpmsL_Vo0Y",
  authDomain: "quora-clone-70f1c.firebaseapp.com",
  projectId: "quora-clone-70f1c",
  storageBucket: "quora-clone-70f1c.appspot.com",
  messagingSenderId: "1096054096065",
  appId: "1:1096054096065:web:58a1adf3e5752edd721440",
  measurementId: "G-6TBHH6D6HH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export { auth, provider };
export default db;
