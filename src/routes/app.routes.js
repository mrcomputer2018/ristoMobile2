// configuracoes stack
import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const appDrawer = createDrawerNavigator();

export default function AppRoutes( ){

    return(
        <appDrawer.Navigator>
            <appDrawer.Screen 
                name="Home"
                component={ Home }
                options={{
                    headerShown: false,
                }}
            />
        </appDrawer.Navigator>
    );
}