// vai controlar qual rota vai ser enviada
import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes(){

    const { signed, user } = useContext(AuthContext);
    
    return(
       signed ? <AppRoutes /> : <AuthRoutes />
    );
}