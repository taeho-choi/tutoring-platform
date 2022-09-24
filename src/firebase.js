// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALgAd1VQneYNwl7jDwM3eh5IobA5JOSfE",
  authDomain: "luacademy.firebaseapp.com",
  projectId: "luacademy",
  storageBucket: "luacademy.appspot.com",
  messagingSenderId: "845265827035",
  appId: "1:845265827035:web:3009c2465b912dd85808fe",
  measurementId: "G-P4BY8H1Z7B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
const analytics = getAnalytics(app);
