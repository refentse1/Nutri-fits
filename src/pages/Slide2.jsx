import { IonContent, IonPage } from "@ionic/react";
import './Slides.css'
import Logo from '../images/RealLogo.png'

function Slide2() {
    return ( 
        <IonPage>
            <IonContent className="slide2">
                <div className="slide">
                    <img src={Logo} alt="" />
                    <p className="slide-text">Find the right <br/> workout for what <br/> you need</p>
                </div>
            </IonContent>
        </IonPage>
     );
}

export default Slide2;