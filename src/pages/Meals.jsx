import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";
import useFetch from "../hooks/useFetch";
import "./Meals.css"


function Meals() {

    const {data:meals, isLoading, Error} = useFetch('http://localhost:8000/meals')


    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow> 
                        <IonCol size="4"><div id="meals-calorie-color1" className="meals--category">100-250Cal</div></IonCol>
                        <IonCol size="4"><div id="meals-calorie-color2" className="meals--category">250-400Cal</div></IonCol>
                        <IonCol size="4"><div id="meals-calorie-color3" className="meals--category">400-600Cal</div></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <h2 className="meals--title">Let's Eat</h2>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonText><div className="meals--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos repellendus voluptatum provident, molestias eos.</div></IonText>
                        </IonCol>
                    </IonRow>
                    {Error && <div><IonRow><IonCol><IonText ><p style={{textAlign:"Center",fontWeight:"bold"}}>{Error}</p></IonText></IonCol></IonRow></div> }
                    {isLoading && <div><IonRow><IonCol><IonText ><p style={{textAlign:"Center",fontWeight:"bold"}}>Loading...</p></IonText></IonCol></IonRow></div>}
                    {meals && meals.map((meal)=>{
                        return(
                            <IonRow>
                            <IonCol>
                                <MealCard
                                    id={meal.id}
                                    meal={meal.meal}
                                    mealImg = {meal.img}
                                    ingredients = {meal.ingredients}
                                    mealCardColor = {meal.color}
                                    path = {meal.path}
                                />
                            </IonCol>
                        </IonRow>
                        );
                    })}
                </IonGrid>
           </IonContent>
           <TabBar/>
        </IonPage>
     );
}

export default Meals;