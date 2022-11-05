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
    IonText 
} from '@ionic/react';
import React, { useEffect } from 'react';
import TabBar from '../components/TabBar';
import Toolbar from "../components/Toolbar";
import './UpdateInfo.css';
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
    deleteDoc
} from "firebase/firestore";
import {getAuth, updateEmail, updatePassword } from 'firebase/auth';


const UpdateInfo = () => {

    const auth = getAuth();

    const user = auth.currentUser;

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
        setRegisterSurname
    } = useContext(AuthContext);

    // const updateCredentials = async ( registerEmail, registerPassword) => {
    //     await updateEmail(auth.users, registerEmail);
    //     await updatePassword(auth.users, registerPassword);
    //     console.log("updated: ", registerEmail, registerPassword );
    // };

    const updateCredentials = () => {
        updateEmail(user, registerEmail).then(() => {
            // Email updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    
          updatePassword(user, registerPassword).then(() => {
            // Update successful.
          }).catch((error) => {
            // An error ocurred
            // ...
          });    

    }
    // const userCollectionRef = collection(db, "userDetails");


    // const updateUser = async (uid, weightInput, heightInput, targetWeightInput) => {
    //     const documentRef = doc(db, "userDetails", uid);
    //     const newFields = {
    //         email: registerEmail,
    //         goalWeight: targetWeightInput,
    //         height: heightInput,
    //         name: registerName,
    //         surname: registerSurname,
    //         weight: weightInput
    //     };
    //     await updateDoc(documentRef, newFields);
    // };


    return (
        <IonPage>
            <Toolbar/>
                <IonContent key={doc.uid}>        
                    <IonCard className='updateCard'>
                        <p style={{textAlign:"center"}}>
                            <IonText>Update Personal Details</IonText>
                        </p>
                        <IonGrid>
                            <IonRow>
                                <IonItem>
                                    <IonLabel position="floating">Name</IonLabel>
                                    <IonInput
                                        type='text'
                                        
                                        onIonChange={(e) => setRegisterName(e.target.value)}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Surname</IonLabel>
                                    <IonInput
                                        type='text'
                                        
                                        onIonChange={(e) => setRegisterSurname(e.target.value)}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Weight</IonLabel>
                                    <IonInput
                                        type='number'
                                        
                                        onIonChange={(e) => setWeightInput(e.target.value)}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Height</IonLabel>
                                    <IonInput
                                        type='number'
                                        
                                        onIonChange={(e) => setHeightInput(e.target.value)}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Target Weight</IonLabel>
                                    <IonInput
                                        type='number'
                                        
                                        onIonChange={(e) => setTargetWeightInput(e.target.value)}
                                    />
                                </IonItem>
                            </IonRow>
                        </IonGrid>
                        <p style={{ textAlign: "center" }}>
                            <IonButton style={{color:"#573926"}} shape="round" >
                                Update 
                            </IonButton>
                        </p>
                    </IonCard>
                    
                    <IonCard className='updateCard'>
                        <p style={{textAlign:"center"}}>
                            <IonText>Update Credentails</IonText>
                        </p>
                        <IonGrid>
                            <IonRow>
                                <IonItem>
                                    <IonLabel position="floating">Email</IonLabel>
                                    <IonInput
                                        type='email'
                                        
                                        onIonChange={(e) => setRegisterEmail(e.target.value)}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput
                                        type='password'                                           
                                        onIonChange={(e) => setRegisterPassword(e.target.value)}
                                    />
                                </IonItem>
                            </IonRow>
                        </IonGrid>
                        <p style={{ textAlign: "center" }}>
                            <IonButton style={{color:"#573926"}} shape="round" onClick={updateCredentials}>
                                Update 
                            </IonButton>
                        </p>
                    </IonCard>
                    
                </IonContent>
            <TabBar/>
        </IonPage>
    );
};

export default UpdateInfo;