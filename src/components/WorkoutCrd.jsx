import { IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import Workout from "../pages/Workout";
import "./WorkoutCrd.css";


function WorkoutCrd({workoutImg,workoutname,workoutColor,id}) {

    return (  
        <IonCard id={workoutColor} className="workouts--card" routerLink={`/workout/${id}`} key={id}>
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="4"><img style={{borderRadius:5 +"px"}} src={workoutImg} alt="" /></IonCol>
                        <IonCol size="8"><IonText><h2 className="workouts--name" style={{marginTop:18+"px",color:"black",fontWeight:"bold"}}>{workoutname}</h2></IonText></IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
}

export default WorkoutCrd;