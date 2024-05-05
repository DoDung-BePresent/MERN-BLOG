// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-391e3.firebaseapp.com",
  projectId: "mern-blog-391e3",
  storageBucket: "mern-blog-391e3.appspot.com",
  messagingSenderId: "471705777069",
  appId: "1:471705777069:web:81b85c1b47ed861d5ce724",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
