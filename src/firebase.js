// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const FIREBASE_API = process.env.REACT_APP_FIREBASE_API_KEY;
const FIREBASE_API_ID = process.env.REACT_APP_FIREBASE_API_ID;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${FIREBASE_API}`,
  authDomain: "hng-task-3.firebaseapp.com",
  projectId: "hng-task-3",
  storageBucket: "hng-task-3.appspot.com",
  messagingSenderId: "570116044728",
  appId: `${FIREBASE_API_ID}`,
  measurementId: "G-PK7LL5JLYY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, signInWithEmailAndPassword };
