
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBbZnqdGupdn0c2pE3XIVb1huWgGa00jEQ",
  authDomain: "mindease-ba825.firebaseapp.com",
  projectId: "mindease-ba825",
  storageBucket: "mindease-ba825.firebasestorage.app",
  messagingSenderId: "1024836780565",
  appId: "1:1024836780565:web:5e7b915a249571232a041c",
  measurementId: "G-2891G2ZXC2"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
