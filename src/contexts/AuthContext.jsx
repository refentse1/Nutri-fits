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
  const [loggedInUser, setLoggedInUser] = useState({});
  const [weightInput, setWeightInput] = useState(0);
  const [heightInput, setHeightInput] = useState(0);
  const [targetWeightInput, setTargetWeightInput] = useState(0);
  const [users, setUsers] = useState([]);
  const [currentId, setCurrentId] = useState("");
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

  //   const addDetails = async () => {
  //     await addDoc(userCollectionRef, {name: registerName, surname: registerSurname, id: })
  //   }

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);

      //Getting logged user ID
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setCurrentId(user.uid);
          setDoc(doc(db, "userDetails", uid), {
            name: registerName,
            surname: registerSurname,
            email: user.email,
          });
          //addDoc(userCollectionRef, {name: registerName, surname: registerSurname, id: uid, email: user.email})
          console.log(uid);
          console.log(user.email);
          window.location.pathname = "/weight";
        } else {
          // User is signed out
          console.log("failed");
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  //Sign in user using email and password
  const login = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const userId = userCredential.uid
      console.log(user)
      const found = users.find(item => item.id = userId)
      console.log("User found", found)
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

  const addCurrentWeight = async () => {
    const documentRef = doc(db, "userDetails", currentId);
    await updateDoc(documentRef, {
      weight: weightInput,
    });
  };

  const addHeight = async () => {
    const documentRef = doc(db, "userDetails", currentId);
    await updateDoc(documentRef, {
      height: heightInput,
    });
  };

  const addGoal = async () => {
    const documentRef = doc(db, "userDetails", currentId);
    await updateDoc(documentRef, {
      goalWeigh: targetWeightInput,
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
        loggedInUser,
        weightInput,
        setWeightInput,
        addCurrentWeight,
        heightInput,
        setHeightInput,
        addHeight,
        targetWeightInput,
        setTargetWeightInput,
        addGoal,
        register,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        login,
        logOut
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
