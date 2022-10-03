import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import { useParams } from "react-router";
import Toolbar from "../components/Toolbar";
import useFetch from "../hooks/useFetch";



function Workout() {
    const { id } = useParams();

    const {data:workout, Error, isLoading} = useFetch('http://localhost:8000/workouts/'+ id);

    return (  
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>
            <IonGrid>
                {isLoading && <div><IonRow><IonCol><IonText><p style={{textAlign:"Center",fontWeight:"bold"}}>Loading...</p></IonText></IonCol></IonRow></div>}
                {Error && <div><IonRow><IonCol><IonText ><p style={{textAlign:"Center",fontWeight:"bold"}}>{Error}</p></IonText></IonCol></IonRow></div> }
                {workout &&(
                    <>
                        <IonRow className="ion-padding">
                            <IonCol><img style={{borderRadius:"5px"}} src={workout.img} alt="" /></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol><IonText><IonTitle><p style={{textAlign:"center"}}>{workout.name}</p></IonTitle></IonText></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <p style={{textAlign:"center"}}>
                                 <IonButton  className="workout--start">Start</IonButton>
                                </p>
                            </IonCol>
                        </IonRow>
                    </>
                )}
            </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Workout;