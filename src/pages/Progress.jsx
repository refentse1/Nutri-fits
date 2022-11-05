import { IonContent, IonPage, IonText, IonButton, IonHeader, IonTitle, useIonAlert } from "@ionic/react";
import { useContext, useState } from "react";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";
import { AuthContext } from "../contexts/AuthContext";
import "./Progress.css";

function Progress(props) {
  const [startingWeight, setStartingWeight] = useState(70);
  const [percentage, setPercentage] = useState(0);
  const [goalWeight, setGoalWeight] = useState(50);
  const [currentWeight, setCurrentWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const {GetUser,userDetails} = useContext(AuthContext);
  const [presentAlert] = useIonAlert();

  GetUser();

  //Handling current weight input
  const handleCurrentWeight = (e) => {
   parseInt( setCurrentWeight(e.target.value));
  };

  //Height input handling
  const handleHeight = (e) => {
    parseInt(setHeight(e.target.value))
  };

  //Calculating percentage progress of the goal
  const progress = () => {
    const weightLost = parseInt(userDetails.weight) - parseInt(currentWeight); 
    const difference = parseInt(userDetails.weight) - parseInt(userDetails.goalWeight);
    console.log(`Weight lost: ${weightLost}`);parseInt(userDetails.weight)
    setPercentage((weightLost / difference) * 100);

    //Calculating bmi
    const h = parseInt(userDetails.height);
    const h2 = Math.pow(h, 2);
    setBmi(currentWeight / h2);
  };

  if(percentage == '100'){
    presentAlert({
      header: 'Alert',
      subHeader: 'Goal Update',
      message: 'Congratulations, you have reached your weight goal!',
      buttons: ['OK'],
    })
  }

  return (
    <IonPage>
      <Toolbar />
      <IonContent fullscreen className="progress-page ion-padding">
        <IonTitle className="Ptitle"> Track Progress </IonTitle>
        <div className="stats-container">
        <IonText>
          <p className="motivate">
            "slowly is the fastest way to get where you want to be"
          </p>
        </IonText>

          <IonText >
            <h4 className="inapp-text">Current weight</h4>
            <ion-input
              className="value"
              type="number"
              onChange={handleCurrentWeight}
              value={currentWeight}
              color="medium"
            />
          </IonText>

          <IonText >
            <h4 className="inapp-text">Height</h4>
            <input
            className="value"
              
              type="number"
              onChange={handleHeight}
              value={userDetails.height}
            />
          </IonText>

          <IonText>
            <h4 className="inapp-text">Starting weight: </h4>
            <p className="value">{userDetails.weight}</p>
          </IonText>

          <IonText >
            <h4 className="inapp-text">BMI</h4>
            <p className="value">{bmi}</p>
          </IonText>

          <div className="goal" color="medium">Goal: {userDetails.goalWeight}</div>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="bar" style={{ width: `${percentage}%` ,color:"#573926"}}></div>
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
