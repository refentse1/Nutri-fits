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
import "./Login.css";
import RealLogo from "../images/RealLogo.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const { login, loginEmail, setLoginEmail, loginPassword, setLoginPassword, status, pwdResetEmail } = useContext(AuthContext);
    

    const emailInput = (e) => {
        setLoginEmail(e.target.value)
    }

    const passwordInput = (e) => {
        setLoginPassword(e.target.value)
    }

  return (
    <IonPage>
      <IonContent class="mypages">
          <img style={{marginTop:'100px',marginBottom:'25px'}} src={RealLogo} className="Logoo"></img>
          <IonItem className="inputField">
            <IonLabel  position="floating" color="primary">Email</IonLabel>
            <IonInput 
              className="email"
              type="email"
              placeholder="Enter your email"
              value={loginEmail}
              onIonChange={emailInput}></IonInput>
          </IonItem>
          <IonItem className="inputField">
            <IonLabel  position="floating" color="primary">Password</IonLabel>
            <IonInput
              className="password"
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
