import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import { useParams } from "react-router";
import Toolbar from "../components/Toolbar";
import useFetch from "../hooks/useFetch";

function Meal() {

    const { id } = useParams();
    const {data:meal, Error, isLoading} = useFetch('http://localhost:8000/meals/'+ id);

    return ( 
        <IonPage>
            <Toolbar/>e
            <IonContent fullscreen>
              <IonGrid>
                {isLoading && <div><IonRow><IonCol><IonText><p style={{textAlign:"Center",fontWeight:"bold"}}>Loading...</p></IonText></IonCol></IonRow></div>}
                {Error && <div><IonRow><IonCol><IonText ><p style={{textAlign:"Center",fontWeight:"bold"}}>{Error}</p></IonText></IonCol></IonRow></div> }
                {meal &&(
                    <>
                        <IonRow>
                            <IonCol><img src={meal.img} alt="" /></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol><IonText><IonTitle>{meal.meal}</IonTitle></IonText></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonText>{meal.ingredients}</IonText>
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