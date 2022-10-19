import { IonContent, IonPage } from "@ionic/react";
import './Slides.css'
import Logo from '../images/RealLogo.png'

function Slide3() {
    return ( 
        <IonPage>
            <IonContent className="slide3">
                <div className="slide">
                    <img src={Logo} alt="" />
                    <p className="slide-text">Make suitable<br/> workout and great<br/> result</p>
                </div>
            </IonContent>
        </IonPage>
     );
}

export default Slide3;