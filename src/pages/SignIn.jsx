import { IonButton, IonContent, IonPage } from "@ionic/react";
import './SignIn.css';
import Logo from '../images/RealLogo.png'

function SignIn(){
    return(
        <IonPage>
            <IonContent className="slide5">
                <div className="slide">
                    <img src={Logo} alt="" />
                    <IonButton routerLink='/register' className="btnsign-in">Register</IonButton><br />
                    <IonButton routerLink='/login' className="btnlogin-in">Login</IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default SignIn;