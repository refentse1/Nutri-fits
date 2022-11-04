import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";
import { AuthContext } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";
import { db,mealRef } from "../config/firebase-config";
import {collection,getDocs,getDoc,doc} from "firebase/firestore";

function Meal() {

    const { id } = useParams();
    const {meal, GetMeal} = useContext(AuthContext);


    GetMeal(id);
  
    return ( 
        <IonPage>
            <Toolbar/>
            <IonContent fullscreen>
                {meal && (
                    
                    <IonGrid>
                        <IonTitle style={{color:"red" , paddingTop: "20px"}}>Let's Make It!</IonTitle>
                        <IonRow className="ion-padding">
                            <IonCol><img src={meal.image} style={{borderRadius:"5px",boxShadow:"0px 10px 10px 1px #515151 "}} alt="" /></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ><IonText><h3 style={{textAlign:"center",marginTop:"30px", color:"#573926"}}>{meal.name}</h3></IonText></IonCol>
                        </IonRow>
                        <IonRow className="ion-padding">
                            <IonCard style={{boxShadow:"0px 10px 10px 1px #515151 "}} color='primary' >
                                <IonCardContent >
                                    <h1 style={{textAlign:"center"}}>Ingredients</h1><br />
                                    <p >{meal.ingredient}</p>
                                </IonCardContent>
                            </IonCard>
                        </IonRow>
                        <IonRow className="ion-padding">
                            <IonCard style={{boxShadow:"0px 10px 10px 1px #515151 "}} color='primary' >
                                <IonCardContent >
                                    <h1 style={{textAlign:"center"}}>Cooking Instructions</h1><br />
                                    <p>{meal.instructions}</p>
                                </IonCardContent>
                            </IonCard>
                        </IonRow>
                    </IonGrid>
                )}
            </IonContent>
            <TabBar/>
        </IonPage>
     );
}

export default Meal;
