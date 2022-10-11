import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle,} from "@ionic/react";
import Toolbar from "../components/Toolbar";
// import "./Register.css"
import LogoX from "../images/LogoX.png";

function Register() {
    return ( 
        <IonPage>
        <IonContent >
        <IonGrid>
            <img src={LogoX} class="LogoC"></img>
            <IonHeader><IonTitle class="title">Nutri-Fit</IonTitle></IonHeader>
            <IonItem><IonLabel>Name</IonLabel><IonInput class="name" ></IonInput></IonItem>
            <IonItem><IonLabel>Surname</IonLabel><IonInput  class="name"></IonInput></IonItem>
            <IonItem><IonLabel>Password</IonLabel><IonInput  class="name"></IonInput></IonItem>
  
            </IonGrid>
            <p  style={{textAlign:"center"}}><IonButton shape="round" routerLink='/Login' class="btn" className='Lbtn'>Register</IonButton></p>
        </IonContent> 
        </IonPage>
     );
}

export default Register;