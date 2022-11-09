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
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
const {GetUser,userDetails} = useContext(AuthContext);

GetUser();
localStorage.setItem("details", JSON.stringify(userDetails)) 

  return (
    <IonPage>
      <Toolbar />
      <IonContent className="background" fullscreen>
        <IonHeader collapse="condense">
          {/* <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar> */}
        </IonHeader>
        <IonTitle  className="nick">Hi {userDetails.nickname}!</IonTitle>
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
