import { IonCard, IonCardContent, IonCardHeader,IonCol, IonGrid, IonRow } from "@ionic/react";
import "./Card.css";

function Card({title,card,path,id}) {
    return ( 
        <IonCard id={card} className="card" routerLink={path} key={id}>
            <IonGrid >
                <IonRow className="ion-padding">
                <IonCol size="12">
                    <IonCardHeader >
                    <h6 className="title1">{title}</h6>
                    </IonCardHeader>
                </IonCol>
            </IonRow>
            </IonGrid>
        </IonCard>
     );
}

export default Card;
