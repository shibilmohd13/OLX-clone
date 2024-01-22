// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "firebase/auth";
import "firebase/storage"
import { getStorage } from 'firebase/storage';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy_1P20TEnCjdaXX5QJIYfInf3NQbi9qs",
  authDomain: "olx-clone-7bcff.firebaseapp.com",
  projectId: "olx-clone-7bcff",
  storageBucket: "olx-clone-7bcff.appspot.com",
  messagingSenderId: "95851017299",
  appId: "1:95851017299:web:d8de495a6bf379f6d3c2a6",
  measurementId: "G-3C30PZNJD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app);


