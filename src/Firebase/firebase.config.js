// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK5GpIF9rOMNPcWco9sYsv9Jm0g2PFEJE",
  authDomain: "event-management-assignm-3da7b.firebaseapp.com",
  projectId: "event-management-assignm-3da7b",
  storageBucket: "event-management-assignm-3da7b.appspot.com",
  messagingSenderId: "743252279827",
  appId: "1:743252279827:web:0a0958b9c6b837dbd935e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;