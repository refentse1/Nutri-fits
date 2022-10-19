import React, {useState} from 'react';
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
    IonToolbar
} from "@ionic/react";
import Logo from "../images/Logo.png"
import "../components/Toolbar.css"
import Toolbar from '../components/Toolbar';
import {useContext} from "react"
import {AuthContext} from "../contexts/AuthContext"
// import './style.css';

const TargetWeight = () => {
    const {targetWeightInput, setTargetWeightInput, addGoal} = useContext(AuthContext)
    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent class="ion-padding">
                <IonText className='profile' >My Profile</IonText>
                <IonText>
                    <p className='motivate'>"Go the extra mile, <br/>no one will save you"</p>
                </IonText>
                <IonText className='ion-weight'>
                    What is <br/> your goal<br/> 
                    <IonText className='weight'>Weight ?</IonText>
                </IonText>

                <IonItem className='ion-item--weight'>
                    <IonLabel position="floating">Goal Weight:</IonLabel>
                    <IonInput 
                        type="number" 
                        placeholder='(kg)' 
                        value={targetWeightInput} 
                        onIonChange={(e) => setTargetWeightInput(e.target.value)}
                    />
                </IonItem>
                <p className='button'>
                    <IonButton routerLink='/targetweight' shape='round' >
                        <IonText className='next-button' onClick= {addGoal}>Next</IonText>
                    </IonButton>
                </p>
            </IonContent>

        </IonPage>
    );
}

export default TargetWeight;