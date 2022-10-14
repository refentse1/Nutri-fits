import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import Logo from "../images/Logo.png"
import "./Toolbar.css"

function Toolbar() {
    return ( 
        <IonHeader>
            <IonToolbar  className="ToolBar background" >
                <IonTitle className="align--content"> 
                    <img className="logo" src={Logo} alt="" />
                </IonTitle>
                <IonButtons  slot="start">
                    <IonBackButton/>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
     );
}

export default Toolbar;