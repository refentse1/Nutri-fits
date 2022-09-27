import {
  IonContent,
  IonPage,
  IonText,
  IonImg,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import {
  helpOutline,
  notificationsOutline,
  createOutline,
} from "ionicons/icons";
import Toolbar from "../components/Toolbar";
import "./Profile.css";

function Profile(props) {

  

  return (
    <IonPage>
      <Toolbar />
      <IonContent fullscreen className= "profile-page ion-padding">
        <IonText className="heading">
          <h2>Profile</h2>
        </IonText>

        <div className="img-container">
          <img src={props.img} />
        </div>

        <IonText className= "inapp-text">
          <p>{props.username}</p>
          <p>{props.email}</p>
        </IonText>

        <IonItem lines="none">
          <IonLabel>
            <p>
              <IonIcon icon={createOutline} />
              Edit
            </p>
          </IonLabel>
        </IonItem>

        <IonItem lines="none">
          <IonLabel>
            <p>
              <IonIcon icon={notificationsOutline} /> Notifications{" "}
            </p>
          </IonLabel>
        </IonItem>

        <IonItem lines="none">
          <IonLabel>
            <p>
              <IonIcon icon={helpOutline} />
              Help
            </p>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
}

export default Profile;
