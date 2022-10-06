import { IonContent, IonPage } from "@ionic/react";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";

function Gyms() {
    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>
                <h2>Gyms</h2>
            </IonContent>
            <TabBar/>
        </IonPage>
     );
}

export default Gyms;