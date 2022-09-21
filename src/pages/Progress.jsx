import { IonContent, IonPage, IonText } from "@ionic/react";
import Toolbar from "../components/Toolbar";

function Progress() {
    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>
                <IonText>
                    <h2>Progress</h2>
                </IonText>
            </IonContent>
        </IonPage>
     );
}

export default Progress;