import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Card from "../components/Card";
import Toolbar from "../components/Toolbar";
import "./Home.css";
import CardData from "../data/card.json";
import TabBar from "../components/TabBar";
import Workouts from "../images/Workouts.jpg";
import Meals from "../images/Meals.jpg";
import Gyms from "../images/Gyms.jpg";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { async } from "@firebase/util";

const Home = () => {
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
  }, [])

  return (
    <IonPage>
      <Toolbar />
      <IonContent className="background" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Hi! {userDetails.name}</h1>

        {CardData.map((data) => {
          return (
            <Card
              id={data.id}
              title={data.title}
              card={data.card}
              path={data.path}
            />
          );
        })}
        {console.log("Document data:", userDetails)}
      </IonContent>
      <TabBar />
    </IonPage>
  );
};

export default Home;
