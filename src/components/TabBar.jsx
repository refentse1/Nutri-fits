import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { personOutline, homeOutline, trendingUpOutline } from "ionicons/icons";
import "./TabBar.css";

function TabBar() {
  return (
    <IonTabBar color="" className="tabBar" slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonIcon icon={homeOutline} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="progress" href="/progress">
        <IonIcon icon={trendingUpOutline} />
        <IonLabel>Progress</IonLabel>
      </IonTabButton>
      <IonTabButton tab="profile" href="/profile">
        <IonIcon icon={personOutline} />
        <IonLabel>Profile</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
}

export default TabBar;
