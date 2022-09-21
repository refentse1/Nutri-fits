import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, setupIonicReact,IonIcon, IonLabel, IonTabBar, IonTabButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personOutline,homeOutline, trendingUpOutline } from 'ionicons/icons';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Profile from './pages/Profile';
import Progress from './pages/Progress';


setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home 
                text = "Hello" 
            />
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/progress">
            <Progress/>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
            <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={personOutline}/>
                <IonLabel>Profile</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
                <IonIcon icon={homeOutline}/>
                <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="progress" href="/progress">
                <IonIcon icon={trendingUpOutline}/>
                <IonLabel>Progress</IonLabel>
            </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
