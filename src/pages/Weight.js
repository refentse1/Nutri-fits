import React from 'react';
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
import './style.css';
;
const Weight = (props) => {
    const onChangeWeight = (event) => {
        props.onAddWeight(event.target.value);
    }
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
                        // value={weight} 
                        onIonChange={onChangeWeight}
                    />
                </IonItem>

                <p className='next-button'>
                    <IonButton routerLink="/Height" shape='round'>
                        Next
                    </IonButton>
                </p>
            </IonContent>
        </IonPage>
    );
}

export default Weight;