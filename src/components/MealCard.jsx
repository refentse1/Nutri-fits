import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCol, IonGrid, IonItem, IonLabel, IonRow, IonText } from "@ionic/react";
import "./MealCard.css"

function MealCard({meal,ingredients,mealImg,id}) {
    return ( 
        <IonCard className="container" key={id} routerLink={`/meal/${id}`}>
            <img className="card--bg" src={mealImg} alt="cardBG.jpg" />
            <h2 className="centered">{meal}</h2>
        </IonCard>
     );
}

export default MealCard;