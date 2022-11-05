











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
  const Setupscreen = () => {
    const history = useHistory();
    const [Addnickname,setAddNickname]=useState([]);
    const [newNickname,setNewNickname]=useState([]);
    const[image,setImage]=useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    // useEffect(() => {
    //   console.log("Form Data: ", formData);
    // }, [formData]);
    const Snap = async () => {
      const cameraResult = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      setImage (cameraResult.webPath);
    
      // Can be set to the src of an image now
      // imageElement.src = imageUrl;
      console.log(image)
    };
    function handleSubmit() {
      if(!newNickname)
      {
        setErrorMessage(true);
      }else{
        addDoc(nicknameRef,{
        Nickname:newNickname,
      }).then((refrence)=>{
        console.log("Nickname moved")
      }).catch((error)=>{
        console.log(error)
      })
      setAddNickname("")
      history.push("/home",{ direction: "forward" }); // go to home page
    }}
      
    return (
      <IonContent className="profile-page">
    <div>
        <img  className="img-container" src={image}></img>
    </div>
    <FaCamera className="iconn" onClick={()=>Snap()} 
      color="#573926"
      size="2em" 
      title="Take picture or choos from your photos "/>
      {/* {errorMessage && <h1 className="Alert">Please fill out all the fields</h1>} */}
        <IonItem>
          <IonLabel position="floating" color="medium">Nickname:</IonLabel>
          <IonInput
        color="medium"
           className="Nickname"
            type="text"
            onIonChange={(e)=>setNewNickname(e.target.value)}
            value={newNickname}
          />
        </IonItem>
        <IonButton className="next-bt"shape="round" size="small" onClick={handleSubmit}>
          Next
        </IonButton>
      </IonContent>
    );
  };
  
  export default Setupscreen;
  


// import {
//   IonButton,
//   IonCard,
//   IonCardContent,
//   IonCardTitle,
//   IonContent,
//   IonHeader,
//   IonImg,
//   IonInput,
//   IonItem,
//   IonLabel,
//   IonToolbar
// } from "@ionic/react";
// import { useContext, useEffect, useState } from "react";
// import { useHistory } from "react-router";
// import "./Setupscreen.css"
// import { Camera, CameraResultType } from '@capacitor/camera';
// import {FaCamera} from "react-icons/fa"
// import {db,nicknameRef, storage, storageRef} from "../config/firebase-config"
// import{
//   getDocs,
//   addDoc,
//   deleteDoc,
//   doc,
//   onSnapshot,
// } from "firebase/firestore"
// import { AuthContext } from "../contexts/AuthContext";
// import { ref, uploadBytes } from "firebase/storage";
// const Setupscreen = () => {
//   const history = useHistory();
//   const [Addnickname,setAddNickname]=useState([]);
//   const [newNickname,setNewNickname]=useState([]);
//   const[image,setImage]=useState("");

//   const {nickname,setNickName,addNickName,setProfile,profile} = useContext(AuthContext);

//   const takePhoto = async () => {
//     const image = await Camera.getPhoto({
//       quality: 90,
//       allowEditing: true,
//       resultType: CameraResultType.Uri
//     });
  
//     // image.webPath will contain a path that can be set as an image src.
//     // You can access the original file using image.path, which can be
//     // passed to the Filesystem API to read the raw data of the image,
//     // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
//     let imageUrl = image.webPath;
  
//     // Can be set to the src of an image now
//     setImage(imageUrl);
//     setProfile(image.webPath);
//     console.log("Image:",imageUrl);
//     const storageRef = ref(storage,`ProfileImages/${profile}`);
//     uploadBytes(storageRef,Blob).then((snapshot)=>console.log('Uploaded file'));
//   };

//   // uploadBytes(storageRef,profile).then((snapshot)=>console.log('Uploaded file'));

//   return (
//     <IonContent className="profile-page">
//   <div>
//       <img  className="img-container" src={image}></img>
//   </div>
//   < FaCamera className="iconn" onClick={takePhoto} 
//     color="#573926"
//     size="2em" 
//     title="Take picture or choos from your photos "/>
//       <IonItem>
//         <IonLabel position="floating" color="medium">Name:</IonLabel>
//         <IonInput
//         className="Name"
//           type="text"
//           color="medium"
//         />
//       </IonItem>
//       <IonItem>
//         <IonLabel position="floating" color="medium">Nickname:</IonLabel>
//         <IonInput
//       color="medium"
//          className="Nickname"
//           type="text"
//           onIonChange={(e)=>setNickName(e.target.value)}
//           value={nickname}
//         />
//       </IonItem>
//       <IonButton className="next-bt"shape="round" size="small" onClick={addNickName}>
//         Next
//       </IonButton>
//     </IonContent>
//   );
// };

// export default Setupscreen;
