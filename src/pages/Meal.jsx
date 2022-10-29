import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import { useParams } from "react-router";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";
import useFetch from "../hooks/useFetch";

function Meal() {

    const { id } = useParams();
    const {data:meal, Error, isLoading} = useFetch('http://localhost:8000/meals/'+ id);

    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>
              <IonGrid>
                {isLoading && <div><IonRow><IonCol><IonText><p style={{textAlign:"Center",fontWeight:"bold"}}>Loading...</p></IonText></IonCol></IonRow></div>}
                {Error && <div><IonRow><IonCol><IonText ><p style={{textAlign:"Center",fontWeight:"bold"}}>{Error}</p></IonText></IonCol></IonRow></div> }
                {meal &&(
                    <>
                        <IonRow  className="ion-padding" style={{}}>
                            <IonCol ><img  src={meal.img} alt=""  style={{borderRadius:"5px",boxShadow:"0px 10px 10px 1px #515151 "}}/></IonCol>
                        </IonRow>
                        <IonRow>
                        <IonCol ><IonText><h3 style={{textAlign:"center",marginTop:"30px"}}>{meal.meal}</h3></IonText></IonCol>
                        </IonRow>
                        <IonRow className="ion-padding">
                            <IonCard style={{boxShadow:"0px 10px 10px 1px #515151 "}} color='primary' >
                                <IonCardContent >
                                    <h1 style={{textAlign:"center"}}>Ingredients</h1><br />
                                    <p >{meal.ingredients}</p>
                                </IonCardContent>
                            </IonCard>
                        </IonRow>
                    </>
                )}
              </IonGrid>
            </IonContent>
            <TabBar/>
        </IonPage>
     );
}

export default Meal;