// configuracoes stack
import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import Profile from "../pages/Profile"

const appDrawer = createDrawerNavigator();

export default function AppRoutes( ){

    return(
        <appDrawer.Navigator
            drawerStyle={{
                backgroundColor: '#333',
            }}
            screenOptions={{
                drawerLabelStyle: {
                    fontWeight: 'bold',
                },
                drawerActiveTintColor: '#333',
                drawerActiveBackgroundColor: '#facc15',
                drawerInactiveBackgroundColor: '#ddd',
                drawerInactiveTintColor: "#333",
                drawerItemStyle: {
                    marginVertical: 5,
                    borderRadius: 5,
                }
            }}
        >
            <appDrawer.Screen 
                name="Home"
                component={ Home }
                options={{
                    headerShown: false,
                }}
            />
            
            <appDrawer.Screen
                name="Perfil" 
                component={ Profile }
                options={{
                    headerShown: false,
                }}
            />
        </appDrawer.Navigator>
    );
}