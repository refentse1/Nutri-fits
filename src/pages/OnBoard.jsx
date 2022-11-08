import { useEffect, useState } from "react";
import SignIn from "./SignIn";
import Slide1 from "./Slide1";
import Splash from "./Splash";

const OnBoard = () => {

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    },[])

    return ( 
        <>
            {loading ? <Splash/> : <SignIn/>}
        </>
     );
}
 
export default OnBoard;