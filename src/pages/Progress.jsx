import { IonContent, IonPage, IonText, IonButton, IonHeader, IonTitle } from "@ionic/react";
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
        <IonTitle style={{color:"#FE8235",marginTop:"20px", fontSize:"20px", fontWeight:"600"}}> Progress </IonTitle>
        <div className="stats-container">
        <IonText>
          <p className="motivate">
            "slowly is the fastest way to
            <br /> get where you want to be"
          </p>
        </IonText>
          <IonText className="inapp-text">
            <p>You've worked out for: </p>
            <p>{props.workHours}</p>
          </IonText>

          <IonText className="inapp-text">
            <h4 style={{color: "#FE8235"}}>Current weight</h4>
            <input
              className="progress-input"
              type="number"
              onChange={handleCurrentWeight}
              value={currentWeight}
            />
          </IonText>

          <IonText className="inapp-text">
            <h4 style={{color: "#FE8235"}}>Height</h4>
            <input
              className="progress-input"
              type="number"
              onChange={handleHeight}
              value={height}
            />
          </IonText>

          <IonText className="inapp-text">
            <h4 style={{color: "#FE8235"}}>Burned calories: </h4>
            <p>{props.burnedCalories}</p>
          </IonText>

          <IonText className="inapp-text">
            <h4 style={{color: "#FE8235"}}>Starting weight: </h4>
            <p>{props.weight}</p>
          </IonText>

          <IonText className="inapp-text">
            <h4 style={{color: "#FE8235"}}>BMI</h4>
            <p>{bmi}</p>
          </IonText>

          <div className="goal">Goal: {goalWeight}</div>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="bar" style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
          <br></br>
          <IonButton className="progress-btn" shape="round" onClick={progress}>
            Save
          </IonButton>
        </div>
      </IonContent>
      <TabBar/>
    </IonPage>
  );
}

export default Progress;
