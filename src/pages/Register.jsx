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
  import { AuthContext } from "../contexts/AuthContext";
  import { useContext } from "react";
  
  import LogoX from "../images/LogoX.png";
  import "./Styles.css";
  
  function Register() {
    const {
      setRegisterEmail,
      setRegisterPassword,
      registerEmail,
      registerPassword,
      registerName,
      setRegisterName,
      registerSurname,
      setRegisterSurname,
      register,
    } = useContext(AuthContext);
  
    const nameInput = (e) => {
      setRegisterName(e.target.value);
    };
  
    const surnameInput = (e) => {
      setRegisterSurname(e.target.value);
    };
  
    const emailInput = (e) => {
      setRegisterEmail(e.target.value);
    };
  
    const passwordInput = (e) => {
      setRegisterPassword(e.target.value);
    };
  
    return (
      <IonPage>
        <IonContent class="mypages">
          <IonGrid>
            <img src={LogoX} class="LogoC"></img>
            <IonHeader>
              <IonTitle class="Title">Nutri-Fit</IonTitle>
            </IonHeader>
            <IonItem>
              <IonLabel>Name</IonLabel>
              <IonInput
                class="nameI"
                type="text"
                value={registerName}
                onIonInput={nameInput}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Surname</IonLabel>
              <IonInput
                class="nameI"
                type="text"
                value={registerSurname}
                onIonInput={surnameInput}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Email</IonLabel>
              <IonInput
                class="nameI"
                type="email"
                value={registerEmail}
                onIonChange={emailInput}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Password</IonLabel>
              <IonInput
                class="nameI"
                type="password"
                value={registerPassword}
                onIonChange={passwordInput}
              ></IonInput>
            </IonItem>
          </IonGrid>
          <p style={{ textAlign: "center" }}>
            <IonButton
              shape="round"
              routerLink="/Login"
              class="btn"
              className="Lbtn"
              onClick={() => register()}
            >
              Register
            </IonButton>
          </p>
        </IonContent>
      </IonPage>
    );
  }
  
  export default Register;
  