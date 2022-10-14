import { IonContent, IonPage, IonSlide, IonSlides, IonText } from "@ionic/react";
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



function OnBoarding() {

    const [auth,setAuth] = useState(true);
    

    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        autoplay:true,
        loop:false
      };

    return ( 
                <IonSlides  options={slideOpts}>

                    {/* If user is authenticated or already registered they will be pushed to the home page */}
                    {auth ? <Home/> :
                    // If the user isnt authenticated they will see the OnBoarding pages then be promted to register
                     <>
                    <IonSlide >
                        <Slide1/>
                    </IonSlide>
                    <IonSlide  >
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
                    </>
                                        
                    }
                </IonSlides>
     );
}

export default OnBoarding;