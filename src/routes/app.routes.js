// configuracoes stack
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons"

import Home from "../pages/Home";
import Profile from "../pages/Profile"
import CustomDrawer from "../components/CustomDrawer";

const appDrawer = createDrawerNavigator();

export default function AppRoutes( ){

    return(
        <appDrawer.Navigator
            drawerContent={ props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: {
                    fontWeight: 'bold',
                    fontSize: 15,
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
                    drawerIcon: () => {
                        <Ionicons name="home-outline" size={22} color='#333'/>
                    },
                }}
            />
            
            <appDrawer.Screen
                name="Perfil" 
                component={ Profile }
                options={{
                    headerShown: false,
                    drawerIcon: () => {
                        <Ionicons name="person-outline" size={22} color='#333'/>
                    },
                }}
            />
        </appDrawer.Navigator>
    );
}