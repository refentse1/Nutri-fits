import {
  IonButton,
  IonCard,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import React, { useEffect } from "react";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";
import "./UpdateInfo.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { auth, db } from "../config/firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  getAuth,
  updateEmail,
  updatePassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useHistory } from "react-router-dom";

const UpdateInfo = () => {
  const auth = getAuth();

  const user = auth.currentUser;

  const details = localStorage.getItem("details");
  console.log(details);

  const {
    users,
    setUsers,
    weightInput,
    heightInput,
    targetWeightInput,
    registerEmail,
    registerPassword,
    registerName,
    registerSurname,
    setRegisterEmail,
    setRegisterPassword,
    setWeightInput,
    setHeightInput,
    setTargetWeightInput,
    setRegisterName,
    setRegisterSurname,
    addHeight,
    addCurrentWeight,
    addNickName,
    userDetails,
  } = useContext(AuthContext);

  const redirect = useHistory();

  console.log("Update", userDetails);

  //Updating goal weight
  const addGoal = async () => {
    if (targetWeightInput !== "") {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          const documentRef = doc(db, "userDetails", uid);
          await updateDoc(documentRef, { goalWeight: targetWeightInput });
        } else {
          // User is signed out
          console.log("failed");
        }
      });
    }
  };

  //Updating name input
  const nameInput = async () => {
    if (registerName !== "") {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          const documentRef = doc(db, "userDetails", uid);
          await updateDoc(documentRef, { name: registerName });
        } else {
          // User is signed out
          console.log("failed");
        }
      });
    }
  };

  //Updating lastname input
  const surnameInput = async () => {
    if (registerSurname !== "") {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          const documentRef = doc(db, "userDetails", uid);
          await updateDoc(documentRef, { surname: registerSurname });
        } else {
          // User is signed out
          console.log("failed");
        }
      });
    }
  };

  //Updating credentials, password and email
  const updateCredentials = () => {
    const emailUpdate = () => {
      if (registerEmail !== "") {
        updateEmail(user, registerEmail)
          .then(() => {
            // Email updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      }
    };

    const pwdUpdating = () => {
      if (registerPassword !== "") {
        updatePassword(user, registerPassword)
          .then(() => {
            // Update successful.
          })
          .catch((error) => {
            // An error ocurred
            // ...
          });
      }
    };

    emailUpdate();
    pwdUpdating();
  };
  //Gathering update functions
  const updateDetails = () => {
    addGoal();
    addHeight();
    addCurrentWeight();
    nameInput();
    surnameInput();

    console.log("Details updated");
    window.location.pathname = "/home";
  };

  return (
    <IonPage>
      <Toolbar />
      <IonContent key={doc.uid}>
        <IonCard className="updateCard">
           <h3 style={{textAlign:"center",marginTop:"30px", color:"#573926"}}>Update Personal Details</h3>
          <IonGrid>
            <IonRow>
              <IonItem>
                <IonLabel position="floating">Name</IonLabel>
                <IonInput
                  type="text"
                  value={registerName}
                  onIonChange={(e) => setRegisterName(e.target.value)}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Surname</IonLabel>
                <IonInput
                  type="text"
                  value={registerSurname}
                  onIonChange={(e) => setRegisterSurname(e.target.value)}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Weight</IonLabel>
                <IonInput
                  type="number"
                  value={weightInput}
                  onIonChange={(e) => setWeightInput(e.target.value)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Height</IonLabel>
                <IonInput
                  type="number"
                  value={heightInput}
                  onIonChange={(e) => setHeightInput(e.target.value)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Target Weight</IonLabel>
                <IonInput
                  type="number"
                  value={targetWeightInput}
                  onIonChange={(e) => setTargetWeightInput(e.target.value)}
                />
              </IonItem>
            </IonRow>
          </IonGrid>
          <p style={{ textAlign: "center" }}>
            <IonButton
              style={{ color: "#573926" }}
              shape="round"
              onClick={updateDetails}
            >
              Update
            </IonButton>
          </p>
        </IonCard>

        <IonCard className="updateCard">
          <p style={{ textAlign: "center" }}>
            <IonText>Update Credentails</IonText>
          </p>
          <IonGrid>
            <IonRow>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                  type="email"
                  onIonChange={(e) => setRegisterEmail(e.target.value)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  type="password"
                  onIonChange={(e) => setRegisterPassword(e.target.value)}
                />
              </IonItem>
            </IonRow>
          </IonGrid>
          <p style={{ textAlign: "center" }}>
            <IonButton
              style={{ color: "#573926" }}
              shape="round"
              onClick={updateCredentials}
            >
              Update
            </IonButton>
          </p>
        </IonCard>
      </IonContent>
      <TabBar />
    </IonPage>
  );
};

export default UpdateInfo;
