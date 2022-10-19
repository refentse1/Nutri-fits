import React, { useState } from "react";
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
import "../components/Toolbar"
import Toolbar from "../components/Toolbar";
import './styling.css';
import {useContext} from "react"
import {AuthContext} from "../contexts/AuthContext"

const Height = () => {
    const {heightInput, setHeightInput, addHeight} = useContext(AuthContext)
    return (
        <IonPage>
            <Toolbar/>
            <IonContent class="ion-padding">
                <IonText className='profile' >My Profile</IonText>
                <IonText>
                    <p className='motivate'>"Baby steps always go<br/> the furthest!..."</p>
                </IonText>
                <IonText className='ion-weight'>
                    What is <br/> your<br/> <IonText className='weight'>Height ?</IonText>
                </IonText>
                
                <IonItem className='ion-item--weight'>
                    <IonLabel position="floating">Height:</IonLabel>
                    <IonInput
                        type="number" 
                        placeholder='(cm)' 
                        value={heightInput} 
                        onIonChange={(e) => setHeightInput(e.target.value)}
                    />
                </IonItem>
                <p className='button'>
                    <IonButton routerLink="/targetWeight" shape='round'>
                        <IonText className='next-button'onClick= {addHeight}>Next</IonText>
                    </IonButton>
                </p>
            </IonContent>

        </IonPage>
    );
}
 
export default Height;