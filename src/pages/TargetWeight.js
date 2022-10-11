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

const TargetWeight = () => {
    const [targetWeight, setTargetWeight] = useState('');
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
                        value={targetWeight} 
                        onIonChange={(event) => setTargetWeight(event.detail.value)}
                    />
                </IonItem>
                <p className='button'>
                    <IonButton shape='round' >
                        <IonText className='next-button'>Next</IonText>
                    </IonButton>
                </p>
            </IonContent>

        </IonPage>
    );
}

export default TargetWeight;