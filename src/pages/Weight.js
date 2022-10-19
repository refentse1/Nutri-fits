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

const Weight = () => {
    const {loggedInUser, weightInput, setWeightInput, addCurrentWeight} = useContext(AuthContext)
    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent class="ion-padding">
            {console.log(loggedInUser.registerEmail)}
                <IonText className='profile'>My Profile</IonText>
                <IonText>
                    <p className='motivate'>"slowly is the fastest way to<br/> get where you want to be"</p>
                </IonText>
                <IonText className='ion-weight'>
                    What is <br/> your<br/> <IonText className='weight'>Weight ?</IonText>
                </IonText>

                <IonItem className='ion-item--weight'>
                    <IonLabel position="floating">Weight:</IonLabel>
                    <IonInput
                        type="number"
                        placeholder='(kg)' 
                        value={weightInput} 
                        onIonChange={(e) => setWeightInput(e.target.value)}
                    />
                </IonItem>
                <p className='button'>
                    <IonButton routerLink="/height" shape='round' >
                        <IonText className='next-button' onClick= {addCurrentWeight}>Next</IonText>
                    </IonButton>
                </p> 
                
            </IonContent>
        </IonPage>
    );
}

export default Weight;