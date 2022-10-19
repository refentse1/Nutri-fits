import React from "react";
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
// import './style.css';

const Height = (props) => {
    const onChangeHeight = (event) => {
        props.onAddHeight(event.target.value);
    };
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
                        // value={height} 
                        onIonChange={onChangeHeight}
                    />
                </IonItem>
                <p className='next-button'>
                    <IonButton routerLink="/TargetWeight" shape='round' >
                        <IonText style={{color:"#573926"}}>Next</IonText>
                    </IonButton>
                </p>
            </IonContent>

        </IonPage>
    );
}
 
export default Height;