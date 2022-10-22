import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";
import Toolbar from "../components/Toolbar";
import "./Styles.css";
import LogoX from "../images/LogoX.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const { login, loginEmail, setLoginEmail, loginPassword, setLoginPassword } = useContext(AuthContext);
    

    const emailInput = (e) => {
        setLoginEmail(e.target.value)
    }

    const passwordInput = (e) => {
        setLoginPassword(e.target.value)
    }

  return (
    <IonPage>
      <IonContent class="mypages">
        <IonGrid>
          <img src={LogoX} class="LogoC"></img>
          <IonHeader>
            <IonTitle class="Title">Nutri-Fit</IonTitle>
          </IonHeader>
          <IonItem>
            <IonLabel>Email</IonLabel>
            <IonInput class="nameI"
              type="email"
              placeholder="Enter your registered email"
              value={loginEmail}
              onIonChange={emailInput}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <IonInput
              class="nameI"
              type="password"
              placeholder="Enter your password"
              value={loginPassword}
              onIonChange={passwordInput}
            ></IonInput>
          </IonItem>
        </IonGrid>
        <p style={{ textAlign: "center" }}>
          <IonButton shape="round" className="Lbtn" onClick={login}>
            Login
          </IonButton>
        </p>
      </IonContent>
    </IonPage>
  );
}

export default Login;
