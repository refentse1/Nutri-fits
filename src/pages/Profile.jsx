import { IonContent, IonPage, IonText } from "@ionic/react";
import Toolbar from "../components/Toolbar";

function Profile() {
    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>
                <IonText>
                    <h2>Profile</h2>
                </IonText>
            </IonContent>
        </IonPage>
     );
}

export default Profile;