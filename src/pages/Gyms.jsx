import { Geolocation } from "@capacitor/geolocation";
import { IonHeader, IonIcon, IonCol, IonText, IonItem, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonContent, IonTitle, IonPage } from "@ionic/react";
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
          url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${long}&radius=5000&type=gym&key=AIzaSyAs6URY0FrsM3w9FnbEdFfKxrOAtxAh4dI`,
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
            
            <IonTitle className="Gtitle">Gyms near you!</IonTitle>
            <IonCol>
            <IonText><div className="meals--text">“Success usually comes to those who are too busy to be looking for it.” -Henry David Thoreau</div></IonText>
            </IonCol>
    
{       
        gyms.map((gym, index) => (
          <IonCard>
            <IonCardHeader>
      <IonCardTitle className="gym-name">{gym.name}</IonCardTitle>
      </IonCardHeader>

      <img
                  style={gym.photos && { height: "30vh", width: "100%", borderColor:"#F09E54", borderWidth:"4px"}} alt="No picture"
                  src={
                    gym.photos &&
                    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${gym.photos.map(
                      (photo) => photo.photo_reference
                    )}&key=AIzaSyAs6URY0FrsM3w9FnbEdFfKxrOAtxAh4dI`
                  }/>
      
      
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
                             Open
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
                            Closed
                          </p>
                        )}
        </IonItem>
        <IonCol>
        <IonIcon color="warning" icon={star}/>
                          {gym.rating}
        </IonCol>
        
      
    </IonCard>
        
        ))
        
    }    
        </IonContent>
        <TabBar/>
        </IonPage>
    )
}
export default NearbyGyms;

/**    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-feature android:name="android.hardware.location.gps" /> */
