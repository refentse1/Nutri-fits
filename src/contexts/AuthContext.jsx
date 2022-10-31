import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "../config/firebase-config";
import { db } from "../config/firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerSurname, setRegisterSurname] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [weightInput, setWeightInput] = useState(0);
  const [heightInput, setHeightInput] = useState(0);
  const [targetWeightInput, setTargetWeightInput] = useState(0);
  const [users, setUsers] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [userDetails, setUserDetails] = useState({})
  const userCollectionRef = collection(db, "userDetails");
  const navigate = useHistory();

  //Fetching user data from firestore
  useEffect(() => {
   const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(users);
    };

    getUsers();

  }, []);


  //Sign in user using email and password
  const login = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user.uid;

      setUserId(user)
      console.log(user)
      console.log("User ID", userId)
      // const found = users.find(item => item.id = userId)
      // console.log("User found", found)
      setIsLoggedIn(true)
      
      window.location.pathname = "/home"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const logOut = () => {
    auth.signOut()
    window.location.pathname = "/login"
  }

  const addCurrentWeight = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const documentRef = doc(db, "userDetails", uid);
      await updateDoc(documentRef, {weight: weightInput});
      } else {
        // User is signed out
        console.log("failed");
      }
    });
    
  };

  const addHeight = async () => {
    
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const documentRef = doc(db, "userDetails", uid);
    await updateDoc(documentRef, {height: heightInput});
      } else {
        // User is signed out
        console.log("failed");
      }
    });
  };

  const addGoal = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const documentRef = doc(db, "userDetails", uid);
    await updateDoc(documentRef, {goalWeight: targetWeightInput});
      } else {
        // User is signed out
        console.log("failed");
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        setRegisterEmail,
        setRegisterPassword,
        registerEmail,
        registerPassword,
        registerName,
        setRegisterName,
        registerSurname,
        setRegisterSurname,
        isLoggedIn,
        weightInput,
        setWeightInput,
        addCurrentWeight,
        heightInput,
        setHeightInput,
        addHeight,
        targetWeightInput,
        setTargetWeightInput,
        addGoal,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        login,
        logOut,
        userId
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
