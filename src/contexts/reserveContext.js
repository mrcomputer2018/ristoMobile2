import React, { createContext, useState } from "react";

export const ReserveContext = createContext({});

export default function ReserveProvider({ children}) {

    const [ reserve, setReserve ] = useState([])

    return(
        <ReserveContext.Provider value={{ reserve }}>
            { children }
        </ReserveContext.Provider>
    )
}