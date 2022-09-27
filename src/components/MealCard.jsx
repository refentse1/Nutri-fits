import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCol, IonGrid, IonItem, IonLabel, IonRow, IonText } from "@ionic/react";
import "./MealCard.css"

function MealCard({meal,ingredients,mealImg,id,mealCardColor}) {
    return ( 
        <IonCard id={mealCardColor} className="meals--card" key={id} routerLink={`/meal/${id}`}>
            <IonGrid>
                <IonRow>
                    <IonCol size="4"><img id="meals--img" src={mealImg} alt="" /></IonCol>
                    <IonCol><IonText><h2 className="meals--name">{meal}</h2></IonText></IonCol>
                </IonRow>
                <IonRow>
                </IonRow>
            </IonGrid>

        </IonCard>
     );
}

export default MealCard;