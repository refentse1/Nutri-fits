import { IonContent, IonPage } from "@ionic/react";
import Toolbar from "../components/Toolbar";

function Gyms() {
    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>
                <h2>Gyms</h2>
            </IonContent>
        </IonPage>
     );
}

export default Gyms;