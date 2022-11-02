import {
  IonContent,
  IonPage,
  IonText,
  IonImg,
  IonIcon,
  IonItem,
  IonLabel,
  IonLoading
} from "@ionic/react";
import {
  helpOutline,
  notificationsOutline,
  createOutline,
  logOutOutline,
  trashOutline
} from "ionicons/icons";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";
import "./Profile.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Profile(props) {

  const { logOut, GetUser, userDetails, loading, setLoading, deleteUser} = useContext(AuthContext);

  // const imagePath = userDetails.profile.slice(0);

  // const image = imagePath.slice(0,5)

  
    console.log(userDetails.profile)

  return (
    <IonPage>
      <Toolbar />
      <IonContent fullscreen className= "profile-page ion-padding">
        <IonText className="heading">
          <h2>Profile</h2>
        </IonText>

        <div className="img-container">
          <img src={userDetails.profile} />
        </div>

        <IonText className= "inapp-text">
          <p>{userDetails.name} {userDetails.surname}</p>
          <p>{userDetails.email}</p>
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
         <IonItem lines="none" onClick={logOut}>
          <IonLabel>
            <p>
              <IonIcon icon={logOutOutline} />
              Logout
            </p>
          </IonLabel>
        </IonItem>

         <IonItem lines="none" onClick={deleteUser}>
          <IonLabel>
            <p>
              <IonIcon icon={trashOutline} />
              Delete Account
            </p>
          </IonLabel>
        </IonItem>

      </IonContent>
       {/* Pule modification */}
       <IonLoading isOpen={loading} onDidDismiss={() => setLoading(false)} message="Signing Out" duration={5000}/>
      <TabBar/>
    </IonPage>
  );
}

export default Profile;
