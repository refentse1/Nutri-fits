import { IonContent, IonPage } from "@ionic/react";
import Logo from '../images/RealLogo.png'

const Splash = () => {
    return ( 
        <IonPage>
            <IonContent color='secondary'>
                <img style={{marginTop:'35vh',marginLeft:'65px'}} src={Logo} alt="" />
            </IonContent>
        </IonPage>
     );
}
 
export default Splash;