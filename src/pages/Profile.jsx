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
      <IonContent fullscreen>
        <IonText>
          <h2 className="app-heading">Profile</h2>
        </IonText>

        <div className="img-container">
          <img src={props.img} />
        </div>

        <IonText>
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
