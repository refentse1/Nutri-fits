import { IonContent, IonPage } from "@ionic/react";
import './Slides.css'
import Logo from '../images/RealLogo.png'

function Slide1() {
    return ( 
        <IonPage>
            <IonContent className="slide1">
                <div className="slide">
                    <img src={Logo} alt="" />
                </div>
            </IonContent>
        </IonPage>
     );
}

export default Slide1;