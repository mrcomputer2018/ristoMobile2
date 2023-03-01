import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function CustomDrawer(props){
    return (
        <View style={ styles.container }>
            <DrawerContentScrollView {...props} 
                contentContainerStyle= {{
                    backgroundColor: '#fafafa'
                }}
            >
                <ImageBackground
                    style={ styles.imageBackround } 
                    source={ require('../../assets/aurelien.jpg') }>
                    <Image
                        style={ styles.image }
                        source={ require('../../assets/perfil.png') }
                    />
                    <Text style={ styles.textImage }>
                        Marcelo Ribeiro
                    </Text>
                    <Text style={ styles.textEmail }>
                        email: marcelo@marcelo.com
                    </Text>
                </ImageBackground>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={ styles.viewCustomize }>
                <TouchableOpacity style={ styles.btn }>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="ios-log-out-outline" size={24} color='#333' />
                        <Text style={ styles.textSignOut }>SignOut</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container : {
        flex : 1,
    },
    imageBackround :{
        padding: 20,
        flex:1,
        justifyContent: 'center',
        marginBottom: 10,
    },
    image: {
        height: 70,
        width: 70,
        marginHorizontal: 80,
        marginBottom: 10,
    },
    textImage : { 
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fafafa',
    },
    textEmail : {
        textAlign: 'center',
        fontSize: 14,
        color: '#fafafa',
    },
    viewCustomize: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#fafafa',
    },
    textSignOut: {
        marginLeft: 5,
        fontSize: 15,
        color:'#333',
    }
});