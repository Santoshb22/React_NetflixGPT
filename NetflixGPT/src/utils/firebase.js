// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDRzMaZeZ48MjXbHtN1B-yFa3UxJMg85Y",
  authDomain: "netflixgpt-sb.firebaseapp.com",
  projectId: "netflixgpt-sb",
  storageBucket: "netflixgpt-sb.appspot.com",
  messagingSenderId: "740386749114",
  appId: "1:740386749114:web:6accf0f390c0106fffe083",
  measurementId: "G-1CQ6G50KSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);