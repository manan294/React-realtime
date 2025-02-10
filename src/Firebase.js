import { initializeApp } from "firebase/app";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyEq27B4u4kKQLOzqh0NI4NZsK6_lh-dA",
  authDomain: "react-1ca72.firebaseapp.com",
  projectId: "react-1ca72",
  storageBucket: "react-1ca72.firebasestorage.app",
  messagingSenderId: "300985945917",
  appId: "1:300985945917:web:cb7369ea4d5b1611d4bf54",
  measurementId: "G-58VJL4LR0E",
  databaseURL: "https://react-1ca72-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
