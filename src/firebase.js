// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-blog-88745.firebaseapp.com",
  projectId: "next-blog-88745",
  storageBucket: "next-blog-88745.firebasestorage.app",
  messagingSenderId: "83210088122",
  appId: "1:83210088122:web:6e31266c19de303b929c83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);