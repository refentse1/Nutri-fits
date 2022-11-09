import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonToolbar
  } from "@ionic/react";
  import { useContext, useEffect, useState } from "react";
  import { useHistory } from "react-router";
  import "./Setupscreen.css"
  import { Camera, CameraResultType } from '@capacitor/camera';
  import {FaCamera} from "react-icons/fa"
  import {db,nicknameRef} from "../config/firebase-config"
  import{
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
  } from "firebase/firestore"
import { AuthContext } from "../contexts/AuthContext";
  const Setupscreen = () => {
    const history = useHistory();
    const [Addnickname,setAddNickname]=useState([]);
    const [newNickname,setNewNickname]=useState([]);
    const[image,setImage]=useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const {nickname,setNickName,addNickName,setProfile,profile} = useContext(AuthContext);
    // useEffect(() => {
    //   console.log("Form Data: ", formData);
    // }, [formData]);
    const Snap = async () => {
      const cameraResult = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      setImage (cameraResult.webPath);
  
      console.log(image)
    };
      
    return (
      <IonContent className="profile-page">
    <div>
        <img  className="img-container" src={image}></img>
    </div>
    <FaCamera className="iconn" onClick={()=>Snap()} 
      color="#573926"
      size="2em" 
      title="Take picture or choos from your photos "/>
        <IonItem>
          <IonLabel position="floating" color="medium">Nickname:</IonLabel>
          <IonInput
        color="medium"
           className="Nickname"
            type="text"
            onIonChange={(e)=>setNickName(e.target.value)}
            value={nickname}
          />
        </IonItem>
        <IonButton className="next-bt"shape="round" size="small" onClick={addNickName}>
          Next
        </IonButton>
      </IonContent>
    );
  };
  
  export default Setupscreen;
