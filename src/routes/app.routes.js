// configuracoes stack
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons"

import Home from "../pages/Home";
import Profile from "../pages/Profile"
import MyCar from "../pages/MyCar";
import Question from "../pages/Question";
import Cart from "../pages/Cart";
import Dishes from "../pages/Dishes";
import MyReserve from "../pages/MyReserve";
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
                drawerInactiveTintColor: "#808080",
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
                    drawerIcon: () =>
                        <Ionicons 
                        name="home-outline" size={24} color='#333'/>
                }}
            />

            <appDrawer.Screen 
                name="Pratos"
                component={ Dishes }
                options={{
                    drawerIcon: () =>
                        <Ionicons 
                        name="md-pizza-outline" size={24} color='#333'/>
                }}
            />

            <appDrawer.Screen
                name="Seu Pedido" 
                component={ MyCar }
                options={{
                    headerShown: false,
                    drawerIcon: () =>
                        <Ionicons name="md-fast-food-outline" size={24} color='#333'/>
                }}
            />

<appDrawer.Screen
                name="Meu Carrinho" 
                component={ Cart }
                options={{
                    headerShown: false,
                    drawerIcon: () =>
                        <Ionicons name="md-cart-outline" size={24} color='#333'/>
                }}
            />

            <appDrawer.Screen
                name="Pedido via chat" 
                component={ Question }
                options={{
                    headerShown: false,
                    drawerIcon: () =>
                        <Ionicons name="hourglass-outline" size={24} color='#333'/>
                }}
            />

            <appDrawer.Screen
                            name="Meus Pedidos" 
                            component={ MyReserve }
                            options={{
                                headerShown: false,
                                drawerIcon: () =>
                                    <Ionicons name="calendar-outline" size={24} color='#333'/>
                }}
            />
            
            <appDrawer.Screen
                name="Perfil" 
                component={ Profile }
                options={{
                    headerShown: false,
                    drawerIcon: () =>
                        <Ionicons name="person-outline" size={24} color='#333'/>
                }}
            />

        </appDrawer.Navigator>
    );
}