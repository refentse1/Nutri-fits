import { IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import Toolbar from "../components/Toolbar";
import WorkoutCrd from "../components/WorkoutCrd";
import "./Workouts.css"
import { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import TabBar from "../components/TabBar";
import { AuthContext } from "../contexts/AuthContext";


function Workouts() {

    const {GetWorkouts, workouts} = useContext(AuthContext);


    GetWorkouts();

    console.log(workouts);
    


    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>
                <IonGrid>


                    <IonRow  >
                        <IonCol size="4"><div id="workouts-category-color1"  className='workouts--category'>Beginner</div></IonCol>
                        <IonCol size="4"><div id="workouts-category-color2"  className='workouts--category'>Intermediate</div></IonCol>
                        <IonCol size="4"><div id="workouts-category-color3"  className='workouts--category'>Advanced</div></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <h2 className="workouts--title">Let's Go</h2>
                        </IonCol>
                    </IonRow>
                   <IonRow>
                        <IonCol>
                            <IonText ><div className="workouts--text">“Your Body Can Stand Almost Anything… it’s just your mind you have to convince.”</div> </IonText>
                        </IonCol>
                    </IonRow>
                    {workouts && workouts.map((workout)=>{
                        return(
                            <IonRow>
                            <IonCol>
                                <WorkoutCrd
                                    id={workout.id}
                                    workoutImg = {workout.image}
                                    workoutname = {workout.name}
                                    workoutColor = {workout.color}
                                    path = {workout.path}
                                />
                            </IonCol>
                        </IonRow>
                        );
                    })}
                </IonGrid>
            </IonContent>
            <TabBar/>
        </IonPage>
     );
}

export default Workouts;
