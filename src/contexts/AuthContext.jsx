import {createContext, useState} from "react";


export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [test, setTets] = useState("Context works");

    return(
        <AuthContext.Provider value= {test}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;