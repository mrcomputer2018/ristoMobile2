import React, { createContext, useState } from "react";
import firebase from '../../services/firebase/firebaseConnection';
import { AuthContext } from "../../contexts/auth";

export const ReserveContext = createContext({});

export default function ReserveProvider({ children}) {

    const [ reserve, setReserve ] = useState([])

    const { user } = useContext(AuthContext);

    function addReserve(){
        
    }

    return(
        <ReserveContext.Provider value={{ reserve }}>
            { children }
        </ReserveContext.Provider>
    )
}