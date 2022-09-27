import {  IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Toolbar from '../components/Toolbar';
import './Home.css';

const Home = ({text}) => {
  return (
    <IonPage>
      <Toolbar/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText>
          <h2>Home</h2>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Home;
