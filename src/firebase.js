// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsgj_iDkXgoipFY9AUbuYNKQ1O7BiLcho",
  authDomain: "react-push-test-58035.firebaseapp.com",
  projectId: "react-push-test-58035",
  storageBucket: "react-push-test-58035.appspot.com",
  messagingSenderId: "644484203614",
  appId: "1:644484203614:web:04b2927d12fdf1e592a0cf",
  measurementId: "G-KLHNKZPZ4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);