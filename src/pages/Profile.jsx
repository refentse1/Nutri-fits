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
  logOutOutline
} from "ionicons/icons";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";
import "./Profile.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Profile(props) {

  const { logOut} = useContext(AuthContext);
  

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

        <IonItem lines="none" onClick={logOut}>
          <IonLabel>
            <p>
              <IonIcon icon={logOutOutline} />
              Logout
            </p>
          </IonLabel>
        </IonItem>

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
      <TabBar/>
    </IonPage>
  );
}

export default Profile;
