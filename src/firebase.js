import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBymfttKNMJ7TivoDivZDJJt5XJ7Xq48kE",
  authDomain: "whatsapp-web-clone-7cd54.firebaseapp.com",
  projectId: "whatsapp-web-clone-7cd54",
  storageBucket: "whatsapp-web-clone-7cd54.appspot.com",
  messagingSenderId: "991779573297",
  appId: "1:991779573297:web:c993000dce522943d28f10"
};
// Initialize Firebase
//this special line of code connects everything
const firebaseapp = firebase.initializeApp(firebaseConfig);

// this is for database connection
const db = firebaseapp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
