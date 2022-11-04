import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import { useContext } from "react";
import { useParams } from "react-router";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";
import { AuthContext } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";
import './Workout.css';



function Workout() {
    const { id } = useParams();
    const {GetWorkout,workout} = useContext(AuthContext);

    GetWorkout(id);

    console.log(workout);

    return (  
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>
            <IonGrid>
                {workout &&(
                    <>
                        <IonTitle  style={{color:"red" , paddingTop: "20px"}}>Let's Work It!</IonTitle>
                        <IonRow className="ion-padding">
                            <iframe className="video"  src={workout.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
                        </IonRow>
                        <IonCardTitle><p className="wrkout--name">{workout.name}</p></IonCardTitle>
                        <IonCard color='primary'>
                            <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <IonText>{workout.description}</IonText>
                                        </IonCol>
                                    </IonRow>
                                    {/* <IonRow>
                                        <IonCol>
                                            <p style={{textAlign:'center'}}><IonButton   className="workout--start">Start</IonButton></p>
                                        </IonCol>  
                                </IonRow> */}
                            </IonCardContent>
                        </IonCard>
                    </>
                )}
            </IonGrid>
            </IonContent>
            <TabBar/>
        </IonPage>
    );
}

export default Workout;
