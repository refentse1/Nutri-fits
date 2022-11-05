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
import "../components/Toolbar";
import Toolbar from "../components/Toolbar";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import './style.css';

const Height = (props) => {
  const { heightInput, setHeightInput, addHeight } = useContext(AuthContext);
  const onChangeHeight = (e) => {
    setHeightInput(e.target.value);
  };
  return (
    <IonPage>
      <Toolbar />
      <IonContent class="ion-padding">
        <IonText className="profile">My Profile</IonText>
        <IonText>
          <p className="motivate">
            "Baby steps always go the furthest!..."
          </p>
        </IonText>
        <IonText className="ion-weight">
          What is <br /> your
          <br /> <IonText className="weight">Height ?</IonText>
        </IonText>

        <IonItem className="ion-item--weight">
          <IonLabel position="floating">Height:</IonLabel>
          <IonInput
            type="number"
            placeholder="(cm)"
            value={heightInput}
            onIonChange={onChangeHeight}
          />
        </IonItem>
          <IonButton routerLink="/TargetWeight" shape="round" onClick={addHeight}  className="next-button">
            Next
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Height;
