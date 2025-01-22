// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7KnpH7X00mPhz-teNXssutLG8ole6q44",
  authDomain: "e-commerce-22va.firebaseapp.com",
  projectId: "e-commerce-22va",
  storageBucket: "e-commerce-22va.firebasestorage.app",
  messagingSenderId: "590415364210",
  appId: "1:590415364210:web:9a2c3fc9d32a72cfd842eb",
  measurementId: "G-LS2QRBRGJ4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);