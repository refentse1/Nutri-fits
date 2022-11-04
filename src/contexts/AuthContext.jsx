import { createContext, useState, useEffect, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth, storageRef, workoutRef } from "../config/firebase-config";
import { db,mealRef } from "../config/firebase-config";
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
import { uploadBytes } from "firebase/storage";

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
  const [nickname,setNickName] = useState('');
  const [loggedInUser, setLoggedInUser] = useState("");
  const auth = getAuth();
  const [meals,setMeals] = useState([]);
  const [workouts,setWorkouts] = useState([]);
  const mealCollectionRef = collection(db, "meals");
  const workoutCollectionRef = collection(db, "workouts");
  const [meal,setMeal] = useState();
  const [workout,setWorkout] = useState();
  const [profile,setProfile] = useState();
  const [user,setUser] = useState();

  //Fetching user data from firestore
  useEffect(() => {
   const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // console.log(users);
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
      window.location.pathname = "/setupscreen";
      } else {
        // User is signed out
        console.log("failed");
      }
    });
  };

  // Update Current User's NickName and Profile Image
  const addNickName = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const documentRef = doc(db, "userDetails", uid);
      await updateDoc(documentRef, {nickname: nickname,profile: profile});
      // uploadBytes(storageRef,profile).then((snapshot)=>console.log('Uploaded file'));
      window.location.pathname = "/home";
      } else {
        // User is signed out
        console.log("failed");
      }
    });
  };

  // Get the current User
  const GetUser = ()=>{
      
    useEffect(() => {
    
      const getDetails = async (userId) => {
        
        const docRef = doc(db, "userDetails", userId);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          return setUserDetails(docSnap.data())   
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }
  
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setLoggedInUser(user.uid);
          const userId = user.uid
          console.log("logged in user", loggedInUser);
          getDetails(userId)
          // ...
    
        } else {
          // User is signed out
          window.location.pathname = "/login";
          // ...
        }
      });
  
    }, [])
  }

  // Get the meals on the db
  const GetMeals = () =>{
    useEffect(() => {
      const getMeals = async () => {
         const mealData = await getDocs(mealCollectionRef);
         setMeals(mealData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //  console.log(meals);
       };
       getMeals();
   
     }, []);
  }

  // Get Individual meal
  const GetMeal = (id) =>{
  
    const meals = [];

    useEffect(()=>{
        getDocs(mealRef)
        .then((snapshot)=>{
            snapshot.docs.forEach((doc)=>{
                meals.push({...doc.data(),id: doc.id});
            });
            // setMeal(meals);
            meals.forEach((meal)=>{
                if(meal.id == id){
                    setMeal(meal);
                }
            })
        }).catch((error)=>console.log(error))
    },[id])
  }

  // Get Workouts from DB
  const GetWorkouts = () =>{
    useEffect(() => {
      const getWorkout = async () => {
         const workoutData = await getDocs(workoutCollectionRef);
         setWorkouts(workoutData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
         console.log(workouts);
       };
       getWorkout();
     }, []);
  }

  // Get Individual Workout

  const GetWorkout = (id) =>{
  
    const workouts = [];

    useEffect(()=>{
        getDocs(workoutRef)
        .then((snapshot)=>{
            snapshot.docs.forEach((doc)=>{
              workouts.push({...doc.data(),id: doc.id});
            });
            // setMeal(meals);
            workouts.forEach((workout)=>{
                if(workout.id == id){
                    setWorkout(workout);
                }
            })
        }).catch((error)=>console.log(error))
    },[id])
  }


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
        userId,
        nickname,
        setNickName,
        addNickName,
        getAuth,
        loggedInUser,
        setLoggedInUser,
        userDetails,
        setUserDetails,
        GetUser,
        GetMeals,
        meals,
        setProfile,
        profile,
        GetMeal,
        meal,
        GetWorkouts,
        workouts,
        GetWorkouts,
        GetWorkout,
        workout,
        user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
