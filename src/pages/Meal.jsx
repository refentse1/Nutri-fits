import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import { useParams } from "react-router";
import Toolbar from "../components/Toolbar";
import useFetch from "../hooks/useFetch";

function Meal() {

    const { id } = useParams();
    const {data:meal, Error, isLoading} = useFetch('http://localhost:8000/meals/'+ id);

    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>
              <IonGrid>
                {isLoading && <div><IonRow><IonCol><IonText><p style={{textAlign:"Center",fontWeight:"bold"}}>Loading...</p></IonText></IonCol></IonRow></div>}
                {Error && <div><IonRow><IonCol><IonText ><p style={{textAlign:"Center",fontWeight:"bold"}}>{Error}</p></IonText></IonCol></IonRow></div> }
                {meal &&(
                    <>
                        <IonRow className="ion-padding">
                            <IonCol><img src={meal.img} alt=""  style={{borderRadius:"5px"}}/></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol><IonText><IonTitle ><p style={{textAlign:"center"}}>{meal.meal}</p></IonTitle></IonText></IonCol>
                        </IonRow>
                        <IonRow className="ion-padding">
                            <IonCol>
                                <IonText><p style={{textAlign:"center"}}>{meal.ingredients}</p></IonText>
                            </IonCol>
                        </IonRow>
                    </>
                )}
              </IonGrid>
            </IonContent>
        </IonPage>
     );
}

export default Meal;