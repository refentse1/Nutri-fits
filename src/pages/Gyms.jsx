import { Geolocation } from "@capacitor/geolocation";
import { IonHeader, IonIcon, IonCol, IonToolbar, IonItem, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonContent, IonTitle, IonPage } from "@ionic/react";
import axios from "axios";
import { useState, useEffect } from "react";
import apikey from "../resources/Api";
import { star } from "ionicons/icons";
import "./Gym.css";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";
const NearbyGyms = ()=>{
    const[lat, setLat]= useState(-26.1955496);
    const [long, setLong] = useState(28.0068864);
    const [gyms, setGyms] = useState([]);
    const printCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
        console.log("Current position:", coordinates);
    }      
    useEffect(() => {
        printCurrentPosition();
      }, []);
    const fetchNearbyPlaces = () =>{
        //var axios = require('axios');

        var config = {
          method: 'get',
          url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${long}&radius=5000&type=gym&key=AIzaSyAs6URY0FrsM3w9FnbEdFfKxrOAtxAh4dI`,
          headers: { }
        };
        
       axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          const place = response.data.results;

          setGyms(place);
  
         
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    useEffect(() => {
        fetchNearbyPlaces();
      }, []);
      
    return(
        <IonPage>
            <Toolbar/>
            <IonContent >
            <IonToolbar>
            </IonToolbar>
            <IonTitle style={{color:"#FF0000", fontSize:"20px", fontWeight:"600"}}>Find Gyms near you!</IonTitle>
    
{       
        gyms.map((gym, index) => (
            <IonCard >
        <IonCardHeader>
            <IonCardTitle className="gym-name">{gym.name}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
        <img
                  style={gym.photos && { height: "30vh", width: "100%", borderRadius:"20px" }}
                  src={
                    gym.photos &&
                    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${gym.photos.map(
                      (photo) => photo.photo_reference
                    )}&key=AIzaSyAs6URY0FrsM3w9FnbEdFfKxrOAtxAh4dI`
                  }/>
        </IonCardContent>
        <IonItem className="gym-address">
            {gym.vicinity}
        </IonItem>
        <IonItem>
        {gym.opening_hours &&
                        gym.opening_hours.open_now === true ? (
                          <p
                            style={{
                                fontFamily:"Epilogue",
                              fontSize: "1.0rem",
                              fontWeight: "bold",
                              color: "green",
                            }}
                          >
                            NOW OPEN
                          </p>
                        ) : (
                          <p
                            style={{
                                fontFamily:"Epilogue",
                              fontSize: "1.0rem",
                              fontWeight: "bold",
                              color: "Red",
                            }}
                          >
                            CLOSED
                          </p>
                        )}
        </IonItem>
        <IonItem>
        <IonIcon color="warning" icon={star}/>
                          {gym.rating}
        </IonItem>
        
        </IonCard>
        ))
        
    }    
        </IonContent>
        <TabBar/>
        </IonPage>
    )
}
export default NearbyGyms;