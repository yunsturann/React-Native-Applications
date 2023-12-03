// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebaseConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
const auth = firebase.auth();

export { auth };
