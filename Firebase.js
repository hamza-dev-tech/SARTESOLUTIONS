// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWCthLeQRZ4hCazu1J7GzJrF6TfD-wpwo",
    authDomain: "sartesolutions.firebaseapp.com",
    projectId: "sartesolutions",
    storageBucket: "sartesolutions.appspot.com",
    messagingSenderId: "78991860666",
    appId: "1:78991860666:web:1167e0f050bf25ee657383"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
