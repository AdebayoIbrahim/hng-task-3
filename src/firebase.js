// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB86uUc2g_-45AMAK2MA64CMzysEnS3oro",
  authDomain: "hng-task-3.firebaseapp.com",
  projectId: "hng-task-3",
  storageBucket: "hng-task-3.appspot.com",
  messagingSenderId: "570116044728",
  appId: "1:570116044728:web:baec4457f3f515ca99014d",
  measurementId: "G-PK7LL5JLYY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
