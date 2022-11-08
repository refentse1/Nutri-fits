import { IonButton, IonContent, IonPage, IonSlide, IonSlides, IonText } from "@ionic/react";
import "./OnBoarding.css"
import Log from '../images/RealLogo.png'
import splash1 from "../images/LDkettle.JPG";
import Profile from "./Profile";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Register from "./Register";
import SignIn from "./SignIn";
import { useState } from "react";
import Home from "./Home";
import Logo from '../images/RealLogo.png'



function OnBoarding() {

    const [auth,setAuth] = useState(false);
    

    const slideOptions = {
        initialSlide: 0,
        speed: 400,
        autoplay:true,
        loop:false,
      };

    return ( 
        <IonPage>
            <IonContent>
                <IonSlides pager={true} options={slideOptions}>
                    <IonSlide>
                        <Slide1/>
                    </IonSlide>
                    <IonSlide>
                        <Slide2/>
                    </IonSlide>
                    <IonSlide>
                        <Slide3/>
                    </IonSlide>
                    <IonSlide>
                        <Slide4/>
                    </IonSlide>
                    <IonSlide>
                        <SignIn/>
                    </IonSlide>
                </IonSlides>
            </IonContent>
        </IonPage>
     );
}

export default OnBoarding;