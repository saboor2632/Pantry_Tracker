// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbiHCvRAFri97y56NKpSj0n65hXmdBRWM",
  authDomain: "hspantryapp-debbe.firebaseapp.com",
  projectId: "hspantryapp-debbe",
  storageBucket: "hspantryapp-debbe.appspot.com",
  messagingSenderId: "411682730186",
  appId: "1:411682730186:web:04c9c48058036805c98433",
  measurementId: "G-7JKSNK0PFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, auth, firestore };

