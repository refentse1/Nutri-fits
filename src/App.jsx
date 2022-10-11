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
import Workouts from './pages/Workouts';
import Meals from './pages/Meals';
import Gyms from './pages/Gyms';
import Meal from './pages/Meal';
import Workout from './pages/Workout';
import { useState } from 'react';
import Height from './pages/Height';
import TargetWeight from './pages/TargetWeight';
import Weight from './pages/Weight';
import Login from './pages/Login';
import Register from './pages/Register';
import SignIn from './pages/SignIn';


setupIonicReact();

const userData = {
  user: "Jane Doe",
  email: "janedoe@gmail.com",
  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
};


const App = () => (

  <IonApp >
    <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/profile">
          <Profile
              username={userData.user}
              email={userData.email}
              img={userData.img}
            />
          </Route>
          <Route exact path="/progress">
            <Progress/>
          </Route>
          <Route exact path="/workouts">
            <Workouts/>
          </Route>
          <Route exact path="/workout/:id">
            <Workout/>
          </Route>
          <Route exact path="/meals">
            <Meals/>
          </Route>
          <Route exact path="/meal/:id">
            <Meal/>
          </Route>
          <Route exact path="/gyms">
            <Gyms/>
          </Route>
          <Route exact path="/height">
            <Height/>
          </Route>
          <Route exact path="/targetweight">
            <TargetWeight/>
          </Route>
          <Route exact path="/weight">
            <Weight/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/register'>
            <Register/>
          </Route>
          <Route exact path='/signin'>
            <SignIn/>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
