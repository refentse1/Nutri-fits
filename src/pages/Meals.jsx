import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";
import { AuthContext } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";
import "./Meals.css"


function Meals() {

    const {GetMeals,meals} = useContext(AuthContext);

    GetMeals();

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
                            <IonText><div className="meals--text">“Healthy eating is a way of life, so it’s important to establish routines that are simple, realistically, and ultimately livable.” – Horace</div></IonText>
                        </IonCol>
                    </IonRow>
                    {meals && meals.map((meal)=>{
                        return(
                            <IonRow>
                            <IonCol>
                                <MealCard
                                    id = {meal.id}
                                    meal={meal.name}
                                    mealImg = {meal.image}
                                    ingredients = {meal.ingredient}
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
