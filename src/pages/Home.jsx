import {  IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card';
import Toolbar from '../components/Toolbar';
import './Home.css';
import CardData from "../data/card.json";
import TabBar from '../components/TabBar';

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
        <IonTitle>
          <IonText>
            <p>Good Day,<br/><strong>Nickname!</strong></p>
          </IonText>
        </IonTitle>
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
        <IonButton routerLink='/height'>Height</IonButton>
        <IonButton routerLink='/targetweight'>TargetWeight</IonButton>
        <IonButton routerLink='/weight'>Weight</IonButton>
        <IonButton routerLink='/login'>Login</IonButton>
        <IonButton routerLink='/register'>Register</IonButton>
        <IonButton routerLink='/signin'>SignIn/Up</IonButton>
      </IonContent>
      <TabBar/>
    </IonPage>
  );
};

export default Home;
