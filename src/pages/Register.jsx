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
  import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
  } from "firebase/auth";
  import { auth } from "../config/firebase-config";
  import { db } from "../config/firebase-config";
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
  import Toolbar from "../components/Toolbar";
  import { AuthContext } from "../contexts/AuthContext";
  import { useContext } from "react";
  import RealLogo from "../images/RealLogo.png";
  // import "./Styles.css";
  import "./Register.css"
  
  function Register() {
    const {setRegisterEmail,setRegisterPassword,registerEmail,registerPassword,registerName,setRegisterName,registerSurname,setRegisterSurname, status, setStatus} = useContext(AuthContext);
    const navigate = useHistory()

    const register = async () => {
      
      try {
        setStatus({loading: true, error: false}); //Pule modification
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        setStatus({ loading: false, error: false}); //Pule modification
        console.log(user);
  
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const uid = user.uid;
            setDoc(doc(db, "userDetails", uid), {
                     name: registerName,
                     surname: registerSurname,
                     email: user.email
                  });
                  localStorage.setItem("localUser", uid)
                  navigate.push("./weight")
  
          } else {
            // User is signed out
            console.log("failed");
          }
        });
      } catch (error) {
        setStatus({loading: false, error: true}); //Pule modification
        console.log(error.message);
      }
    };
  
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
        <IonContent className="Pages">
          <IonGrid>
            <img style={{marginTop:'85px',marginBottom:'15px'}} src={RealLogo} className="Logoo"></img>
            <IonItem className="inputField">
              <IonLabel position="floating" color="primary">Name</IonLabel>
              <IonInput
                style={{color:"white"}}
                type="text"
                value={registerName}
                onIonInput={nameInput}
              ></IonInput>
            </IonItem>
            <IonItem className="inputField">
              <IonLabel color="primary" position="floating">Surname</IonLabel>
              <IonInput
                style={{color:"white"}}
                type="text"
                value={registerSurname}
                onIonInput={surnameInput}
              ></IonInput>
            </IonItem>
            <IonItem className="inputField">
              <IonLabel position="floating" color="primary">Email</IonLabel>
              <IonInput
                style={{color:"white"}}
                class="nameI"
                type="email"
                value={registerEmail}
                onIonChange={emailInput}
              ></IonInput>
            </IonItem>
            <IonItem className="inputField">
              <IonLabel position="floating"color="primary">Password</IonLabel>
              <IonInput
                style={{color:"white"}}
                class="nameI"
                type="password"
                value={registerPassword}
                onIonChange={passwordInput}
              ></IonInput>
            </IonItem>

            {/* Pule modification */}

            {status.error && 
              <p style={{marginLeft:"15px"}}>
                <IonText color="danger" >Invalid Credentials</IonText>
              </p>
            }

            {/* Pule modification */}

          </IonGrid>
          <p style={{ textAlign: "center" }}>
            <IonButton
              shape="round"
              // routerLink="/Login"
              class="btn"
              className="Rbtn"
              onClick={() => register()}
            >
              Register
            </IonButton>
          </p>
          <IonLoading isOpen={status.loading} />
        </IonContent>
      </IonPage>
    );
  }
  
  export default Register;
  
