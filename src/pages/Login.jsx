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
  IonText,
  IonLoading
} from "@ionic/react";
import Toolbar from "../components/Toolbar";
import "./Styles.css";
import LogoX from "../images/LogoX.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const { login, loginEmail, setLoginEmail, loginPassword, setLoginPassword, status } = useContext(AuthContext);
    

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

                  {/* Pule modification */}

                  {status.error && 
            <p style={{marginLeft:"15px"}}>
              <IonText color="danger" >Invalid Email or Password</IonText>
            </p>
          }
          
          {/* Pule modification */}
          
        </IonGrid>
        <p style={{ textAlign: "center" }}>
          <IonButton shape="round" className="Lbtn" onClick={login}>
            Login
          </IonButton>
        </p>
        <IonLoading isOpen={status.loading} message="Signing In" />
      </IonContent>
    </IonPage>
  );
}

export default Login;
