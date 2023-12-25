// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7NN3G_XK24yRl8re3nstgy0alMt3sWiw",
  authDomain: "netflixgpt-e4a38.firebaseapp.com",
  projectId: "netflixgpt-e4a38",
  storageBucket: "netflixgpt-e4a38.appspot.com",
  messagingSenderId: "476944617344",
  appId: "1:476944617344:web:53b2514cba97d052973b65",
  measurementId: "G-FYBCTNZ63Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();