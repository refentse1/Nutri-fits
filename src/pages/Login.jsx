import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle,} from "@ionic/react";
import Toolbar from "../components/Toolbar";
// import "./Register.css"
import LogoX from "../images/LogoX.png";

function Login() {
    return ( 
        <IonPage>
        <IonContent >
        <IonGrid>
            <img src={LogoX} class="LogoC"></img>
            <IonHeader><IonTitle class="title">Nutri-Fit</IonTitle></IonHeader>
            <IonItem><IonLabel>Username</IonLabel><IonInput class="name"></IonInput></IonItem>
            <IonItem><IonLabel>Password</IonLabel><IonInput class="name" type="password"></IonInput></IonItem>
            <IonItem><IonLabel>Confirm Password</IonLabel><IonInput class="name" type="password"></IonInput></IonItem>
            
            </IonGrid>
            <p  style={{textAlign:"center"}}><IonButton  routerLink='/Login' shape="round" className='Lbtn'>Login</IonButton></p>
        </IonContent> 
        </IonPage>
     );
}

export default Login;