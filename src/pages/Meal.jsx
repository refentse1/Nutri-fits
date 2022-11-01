import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import { useContext } from "react";
import { useParams } from "react-router";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";
import { AuthContext } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";

function Meal() {

    const { id } = useParams();


    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>

            </IonContent>
            <TabBar/>
        </IonPage>
     );
}

export default Meal;