// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuWlBuy9NdVviX0FYIlgR1VoEswnmD6Hk",
  authDomain: "computer-9d3cf.firebaseapp.com",
  projectId: "computer-9d3cf",
  storageBucket: "computer-9d3cf.firebasestorage.app",
  messagingSenderId: "1088584289044",
  appId: "1:1088584289044:web:da4c73c0a290f3bee89001",
  measurementId: "G-TNSD7QZG1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);