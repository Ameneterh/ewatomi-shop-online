// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ewatomi-shop.firebaseapp.com",
  projectId: "ewatomi-shop",
  storageBucket: "ewatomi-shop.appspot.com",
  messagingSenderId: "231702207993",
  appId: "1:231702207993:web:41160149b3bbf5ce6cf128",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
