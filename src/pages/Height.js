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

const Height = () => {
    const [height, setHeight] = useState('');
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
                        value={height} 
                        onIonChange={(event) => setHeight(event.detail.value)}
                    />
                </IonItem>
                <p className='button'>
                    <IonButton routerLink="/TargetWeight" shape='round'>
                        <IonText className='next-button'>Next</IonText>
                    </IonButton>
                </p>
            </IonContent>

        </IonPage>
    );
}
 
export default Height;