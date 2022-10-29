import {  IonButton, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card';
import Toolbar from '../components/Toolbar';
import './Home.css';
import CardData from "../data/card.json";
import TabBar from '../components/TabBar';
import Workouts from '../images/Workouts.jpg';
import Meals from '../images/Meals.jpg';
import Gyms from '../images/Gyms.jpg';



const Home = () => {
  
  return (
    <IonPage >
      <Toolbar/>
      <IonContent className='background'  fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar >
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTitle className='ion-padding'>Hello</IonTitle>
        {/* {user.map((item, index) => (
          
            <IonTitle>{item.nickname}</IonTitle>
          
        ))} */}
        {CardData.map((data)=>{
            return(
              <Card
                id={data.id}
                title={data.title}
                card={data.card}
                path={data.path}
              />
            );
        })}
      </IonContent>
      <TabBar/>
    </IonPage>
  );
};

export default Home;
