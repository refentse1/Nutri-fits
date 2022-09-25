import { IonContent, IonPage, IonText, IonButton } from "@ionic/react";
import { useState } from "react";
import Toolbar from "../components/Toolbar";
import "./Progress.css";

function Progress(props) {
   const [startingWeight, setStartingWeight] = useState(70);
    const [percentage, setPercentage] = useState(0);
  const [goalWeight, setGoalWeight] = useState(50);
  const [currentWeight, setCurrentWeight] = useState(0);

  //Handling current weight input
  const handleCurrentWeight = (e) => {
    setCurrentWeight(e.target.value);
  }

//Calculating percentage progress of the goal
  const progress = () => {
    
    const weightLost = startingWeight - currentWeight;
    const difference = startingWeight - goalWeight;
    
    console.log(`Weight lost: ${weightLost}`)
    setPercentage(weightLost/difference * 100);
  }


  return (
    <IonPage>
      <Toolbar />
      <IonContent fullscreen>
        <IonText>
          <h2>Progress</h2>
        </IonText>

        <div className="stats-container">
          <IonText>
            <h3>You've wroked out for</h3>
            <p>{props.workHours}</p>
          </IonText>

          <IonText>
            <h3>Current weight</h3>
            <input onChange= {handleCurrentWeight} value= {currentWeight}/>
            <IonButton onClick= {progress}>Save changes</IonButton>
          </IonText>

          <IonText>
            <h3>Burned calories</h3>
            <p>{props.burnedCalories}</p>
          </IonText>

          <IonText>
            <h3>Starting weight</h3>
            <p>{props.weight}</p>
          </IonText>

          <IonText>
            <h3>BMI</h3>
            <p>{props.bmi}</p>
          </IonText>

          <div className="goal">Goal: {goalWeight}</div>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="bar" style= {{width: `${percentage}%`}}></div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Progress;
