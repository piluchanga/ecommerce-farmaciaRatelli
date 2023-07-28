import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  //apiKey: "AIzaSyBPnuhmEUqO8WDKfLXrXOo8C8K6qY9-rug",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ecommerce-reactjs-20e39.firebaseapp.com",
  projectId: "ecommerce-reactjs-20e39",
  storageBucket: "ecommerce-reactjs-20e39.appspot.com",
  messagingSenderId: "398214385793",
  appId: "1:398214385793:web:817f87a8cea065750afd80"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);