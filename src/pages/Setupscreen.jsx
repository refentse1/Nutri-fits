import {
    IonButton,
    IonCard,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonToolbar
  } from "@ionic/react";
  import "./Setupscreen.css"

  const Setupscreen = (props) => {
    // const { user, setUser } = useContext(UserContext);
    // const history = useHistory();
  
    // const [formData, setFormData] = useState({});
  
    // function handleSubmit() {
    //   setUser([...user, formData]);
    //   setFormData({});
    //   history.push("/home", { direction: "forward" }); 
    // }
    // useEffect(() => {
    //   console.log("Form Data: ", formData);
    // }, [formData]);
  
    return (
      <IonPage>
              <IonContent className="profile-page">
                <IonHeader>
                  <IonToolbar>
                    <IonCardTitle style={{ textAlign: "center" }} className="Sprofile">Fill your Profile</IonCardTitle>
                  </IonToolbar>
                </IonHeader>
            <div className="img-container">
                <img src={ "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} />
            </div>
                <IonItem>
                  <IonLabel position="floating" color="medium">Name</IonLabel>
                  <IonInput
                  className="Name"
                    type="text"
                    color="medium"
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating" color="medium">Nickname</IonLabel>
                  <IonInput
                color="medium"
                  className="Nickname"
                    type="text"
                  />
                  {/* <IonInput
                color="medium"
                  className="Nickname"
                    type="text"
                    onIonInput={(e) =>
                      setFormData({ ...formData, nickname: e.target.value })
                    }
                  /> */}
                </IonItem>
                <IonButton routerLink="/home" className="next-bt"shape="round" size="small">
                  Next
                </IonButton>
                {/* <IonButton className="next-bt"shape="round" size="small" onClick={handleSubmit}>
                  Next
                </IonButton> */}
              </IonContent>
      </IonPage>
    );
  };
  
  export default Setupscreen;
  