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
// import './style.css';

const Weight = () => {
    const [weight, setWeight] = useState('');
    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent class="ion-padding">
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
                        value={weight} 
                        onIonChange={(event) => setWeight(event.detail.value)}
                    />
                </IonItem>
                <p className='button'>
                    <IonButton routerLink="/height" shape='round' >
                        <IonText className='next-button'>Next</IonText>
                    </IonButton>
                </p> 
                
            </IonContent>
        </IonPage>
    );
}

export default Weight;