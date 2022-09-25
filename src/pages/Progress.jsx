import { IonContent, IonPage, IonText } from "@ionic/react";
import Toolbar from "../components/Toolbar";

function Progress(props) {
    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>

            <div className= "container">
            <IonText>
                    <h2>Progress</h2>
                </IonText>

                <IonText>
                    <h3>You've wroked out for</h3>
                    <p>{props.workHours}</p>
                </IonText>

                <IonText>
                    <h3>Burned calories</h3>
                    <p>{props.burnedCalories}</p>
                </IonText>

                <IonText>
                    <h3>Weight</h3>
                    <p>{props.weight}</p>
                </IonText>

                <IonText>
                    <h3>BMI</h3>
                    <p>{props.bmi}</p>
                </IonText>
            </div>
            </IonContent>
        </IonPage>
     );
}

export default Progress;