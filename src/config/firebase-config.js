// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged } from "firebase/auth";
import {getFirestore, enableIndexedDbPersistence} from "@firebase/firestore"
import { collection } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU1XyfhptVS2n8OWHzDVjylRIU6NJKaA0",
  authDomain: "nutri-fit-b9ec7.firebaseapp.com",
  projectId: "nutri-fit-b9ec7",
  storageBucket: "nutri-fit-b9ec7.appspot.com",
  messagingSenderId: "649620832325",
  appId: "1:649620832325:web:2b0ff2168b38d468ac232c",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const nicknameRef= collection(db,"nickNames");

export const mealRef = collection(db,'meals');
export const workoutRef = collection(db,'workouts');

enableIndexedDbPersistence(db)
.catch((err) => {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
    }
});

