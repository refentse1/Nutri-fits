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
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import './style.css';

const TargetWeight = (props) => {
    const { targetWeightInput, setTargetWeightInput, addGoal } = useContext(AuthContext);
    
  const onChangeTargetWeight = (e) => {
   setTargetWeightInput(e.target.value);
  };

  return (
    <IonPage>
      <Toolbar />
      <IonContent class="ion-padding">
        <IonText className="profile">My Profile</IonText>
        <IonText>
          <p className="motivate">
            "Go the extra mile, no one will save you"
          </p>
        </IonText>
        <IonText className="ion-weight">
          What is <br /> your goal
          <br />
          <IonText className="weight">Weight ?</IonText>
        </IonText>

        <IonItem className="ion-item--weight">
          <IonLabel position="floating">Goal Weight:</IonLabel>
          <IonInput
            type="number"
            placeholder="(kg)"
            value={targetWeightInput}
            onIonChange={onChangeTargetWeight}
          />
        </IonItem>
          <IonButton  shape="round" onClick={addGoal} className="next-button">
            Next
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default TargetWeight;
