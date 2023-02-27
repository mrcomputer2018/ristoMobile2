// configuracoes stack - controle da autenticacao
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const authStack = createNativeStackNavigator();

export default function AuthRoutes( ){
    return(
        <authStack.Navigator>
            <authStack.Screen 
                name="SignIn"
                component={ SignIn }
                options={{
                    headerShown: false,
                }}
            />

            <authStack.Screen 
                name="SignUp"
                component={ SignUp }
                options={{
                    headerStyle:{
                        backgroundColor: '#333',
                        borderBottomWidth: 1,
                        borderBottomColor: '#facc15',
                        
                    },
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar',
                }}
            />
        </authStack.Navigator>
    );
}