import { IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import Workout from "../pages/Workout";
import "./WorkoutCrd.css";


function WorkoutCrd({workoutImg,workoutname,id}) {

    return (  
        <IonCard className="container" routerLink={`/workout/${id}`} key={id}>
            <img  className="card--bg" style={{height:'200px',width:'100%'}} src={workoutImg} alt="cardBg.jpg" />
            <h2 className="centered">{workoutname}</h2>
        </IonCard>
    );
}

export default WorkoutCrd;