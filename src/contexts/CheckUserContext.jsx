import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useContext, useEffect, useState, createContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { async } from "@firebase/util";


export const CheckUserContext = createContext()

const [loggedInUser, setLoggedInUser] = useState("");
const [userDetails, setUserDetails] = useState({})

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    setLoggedInUser(user.uid);
    console.log("logged in user", loggedInUser);
    // ...

  } else {
    // User is signed out
    window.location.pathname = "/login";
    // ...
  }
});

useEffect(() => {
  const getDetails = async () => {
    
    const docRef = doc(db, "userDetails", loggedInUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return setUserDetails(docSnap.data()) 
      

    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  getDetails()
}, loggedInUser)

const CheckUserContextProvider = (props) => {
  return (
    <CheckUserContext.Provider value= {userDetails}>
      {props.children}
    </CheckUserContext.Provider>
  )
}

export default CheckUserContextProvider



