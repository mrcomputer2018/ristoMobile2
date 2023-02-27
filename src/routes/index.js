// vai controlar qual rota vai ser enviada
import React, { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { AuthContext } from "../contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { LoadingView } from "./styles.js"

export default function Routes(){

    const { signed, loading } = useContext(AuthContext);

    if(loading) {
        return(
            <LoadingView>
                <ActivityIndicator 
                    size={ 60 }
                    color="#333"
                />
            </LoadingView>
        )
    }
    
    return(
       signed ? <AppRoutes /> : <AuthRoutes />
    );
}