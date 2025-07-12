// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYiJw67SZS-OxvLz8SazmMqxqQwEtjalY",
  authDomain: "almacen-de-viveres-sii.firebaseapp.com",
  projectId: "almacen-de-viveres-sii",
  storageBucket: "almacen-de-viveres-sii.appspot.com",
  messagingSenderId: "131283692576",
  appId: "1:131283692576:web:143805235252c7151ae045",
  measurementId: "G-BXZYMT3NHH"
};

// Initialize Firebase
// We add a check to see if the app is already initialized to prevent errors during hot-reloads in Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
