import {
  IonContent,
  IonPage,
  IonText,
  IonImg,
  IonIcon,
  IonItem,
  IonLabel,
  useIonAlert,
  IonLoading,
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
import { useContext} from "react";
import {useHistory} from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";
import { getAuth, deleteUser, onAuthStateChanged } from "firebase/auth";
import { db, auth} from "../config/firebase-config";
import {doc, deleteDoc} from "firebase/firestore"


function Profile(props) {

  const { logOut, GetUser, userDetails, loading, setLoading} = useContext(AuthContext);
  const [presentAlert] = useIonAlert();

  const redirect = useHistory()


  //Deleting user Auth, email asnd password
  const deleteAuth = async () => {
    const auth = getAuth();
    const user1 = auth.currentUser;

    deleteUser(user1).then(() => {
      
      // User deleted.
    }).catch((error) => {
      // An error ocurred
      // ...
    });
  }


  //Deleting user details
  const deleteDetails = () => {
      onAuthStateChanged(auth, async (user) => {
      const uid = user.uid;

       if (user) {
         await deleteDoc(doc(db, "userDetails", uid));
       } else {
         // User is signed out
         console.log("failed");
      }
     })
  }
  

  //Combining the delete functions
  const deleteAccount = () => {
    deleteDetails()
    deleteAuth()

    redirect.push("/register")
  }


  return (
    <IonPage>
      <Toolbar />
      <IonContent fullscreen className= "profile-page ion-padding">
        <IonText >
          <h1 className="heading">Profile</h1>
        </IonText>

        <div className="img-container">
          <img src={userDetails.profile} />
          
        </div>

        <IonText className= "inapp-text">
          <p>{userDetails.name} {userDetails.surname}</p>
        </IonText>

       

        <IonItem lines="none" routerLink="/updateInfo">
          <IonLabel>
            <p>
              <IonIcon icon={createOutline}/>
              Edit
            </p>
          </IonLabel>
        </IonItem>

        <IonItem className="cursor" lines="none" onClick={()=>presentAlert({
                      header: 'Notifications',
                      subHeader: 'Notifications Status',
                      message: "You currently don't have any notifications!",
                      buttons: ['OK'],
        })}>
          <IonLabel>
            <p>
              <IonIcon icon={notificationsOutline} /> Notifications{" "}
            </p>
          </IonLabel>
        </IonItem>

        <IonItem className="cursor" lines="none">
          <IonLabel>
            <p>
              <IonIcon icon={helpOutline} />
              Help
            </p>
          </IonLabel>
        </IonItem>
        <IonItem className="cursor" lines="none" onClick={logOut}>
          <IonLabel>
            <p>
              <IonIcon icon={logOutOutline} />
              Logout
            </p>
          </IonLabel>
        </IonItem>

         <IonItem lines="none" className="cursor" onClick={deleteAccount}>
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
