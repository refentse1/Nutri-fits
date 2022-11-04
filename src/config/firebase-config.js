// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"
import { collection } from "@firebase/firestore";
import {getStorage, ref} from 'firebase/storage'

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
export const storage = getStorage(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const nicknameRef= collection(db,"nickNames");
export const mealRef = collection(db,'meals');
export const workoutRef = collection(db,'workouts');
// export const storageRef = ref(storage,'profileImage');


