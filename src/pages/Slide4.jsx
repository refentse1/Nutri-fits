import { IonContent, IonPage } from "@ionic/react";
import './Slides.css'
import Logo from '../images/RealLogo.png'

function Slide4() {
    return ( 
        <IonPage>
            <IonContent className="slide4">
                <div className="slide">
                    <img src={Logo} alt="" />
                    <p className="slide-text">Prepare exceptional <br/> meals on your health <br/> journey</p>
                </div>
            </IonContent>
        </IonPage>
     );
}

export default Slide4;