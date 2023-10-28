// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWbz9KOXbG6ELR-B4Fpra8Nd-wxTupqps",
  authDomain: "netflixgpt-216a0.firebaseapp.com",
  projectId: "netflixgpt-216a0",
  storageBucket: "netflixgpt-216a0.appspot.com",
  messagingSenderId: "153849454776",
  appId: "1:153849454776:web:0200a05f86f3b88cb1944d",
  measurementId: "G-RPX3VYRBNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();