import { IonContent, IonPage, IonText, IonButton } from "@ionic/react";
import { useState } from "react";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";
import "./Progress.css";

function Progress(props) {
  const [startingWeight, setStartingWeight] = useState(70);
  const [percentage, setPercentage] = useState(0);
  const [goalWeight, setGoalWeight] = useState(50);
  const [currentWeight, setCurrentWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  //Handling current weight input
  const handleCurrentWeight = (e) => {
    setCurrentWeight(e.target.value);
  };

  //Height input handling
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  //Calculating percentage progress of the goal
  const progress = () => {
    const weightLost = startingWeight - currentWeight;
    const difference = startingWeight - goalWeight;
    console.log(`Weight lost: ${weightLost}`);
    setPercentage((weightLost / difference) * 100);

    //Calculating bmi
    setBmi(Math.round(currentWeight / (height * height)));
  };

  return (
    <IonPage>
      <Toolbar />
      <IonContent fullscreen className="progress-page ion-padding">
        <IonText className="heading">
          <h2>Progress</h2>
        </IonText>

        <div className="stats-container">
          <IonText className="inapp-text">
            <h3>You've wroked out for</h3>
            <p>{props.workHours}</p>
          </IonText>

          <IonText className="inapp-text">
            <h3>Current weight</h3>
            <input
              className="progress-input"
              type="number"
              onChange={handleCurrentWeight}
              value={currentWeight}
            />
          </IonText>

          <IonText className="inapp-text">
            <h3>Height</h3>
            <input
              className="progress-input"
              type="number"
              onChange={handleHeight}
              value={height}
            />
          </IonText>

          <IonText className="inapp-text">
            <h3>Burned calories</h3>
            <p>{props.burnedCalories}</p>
          </IonText>

          <IonText className="inapp-text">
            <h3>Starting weight</h3>
            <p>{props.weight}</p>
          </IonText>

          <IonText className="inapp-text">
            <h3>BMI</h3>
            <p>{bmi}</p>
          </IonText>

          <div className="goal">Goal: {goalWeight}</div>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="bar" style={{ width: `${percentage}%` }}></div>
            </div>
          </div>

          <IonButton className="progress-btn" shape="round" onClick={progress}>
            Save changes
          </IonButton>
        </div>
      </IonContent>
      <TabBar/>
    </IonPage>
  );
}

export default Progress;
