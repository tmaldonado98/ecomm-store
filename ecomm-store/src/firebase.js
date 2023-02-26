// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg98s9T7TSlWTywldvgiFqUGlMZlcwy-U",
  authDomain: "vea-collections.firebaseapp.com",
  projectId: "vea-collections",
  storageBucket: "vea-collections.appspot.com",
  messagingSenderId: "616842123391",
  appId: "1:616842123391:web:60cbf95825eb5554b6074a",
  measurementId: "G-S37FFT9HJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);