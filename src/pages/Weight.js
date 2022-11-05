import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Logo from "../images/Logo.png";
import "../components/Toolbar.css";
import Toolbar from "../components/Toolbar";
import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Weight = (props) => {
  //     const onChangeWeight = (event) => {
  //         props.onAddWeight(event.target.value);
  //     }

  const { weightInput, setWeightInput, addCurrentWeight } = useContext(AuthContext);

  const onChangeWeight = (e) => {
            setWeightInput(e.target.value);
    }

  return (
    <IonPage>
      <Toolbar />
      <IonContent class="ion-padding">
        <IonText className="profile">My Profile</IonText>
        <IonText>
          <p className="motivate">
            "slowly is the fastest way to get where you want to be"
          </p>
        </IonText>
        <IonText className="ion-weight">
          What is <br /> your
          <br /> <IonText className="weight">Weight ?</IonText>
        </IonText>

        <IonItem className="ion-item--weight">
          <IonLabel position="floating">Weight:</IonLabel>
          <IonInput
            type="number"
            placeholder="(kg)"
            value={weightInput}
            onIonChange={onChangeWeight}
          />
        </IonItem>
          <IonButton className="next-button"
            routerLink="/Height"
            shape="round"
            onClick={addCurrentWeight}
          >
            Next
          </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Weight;
