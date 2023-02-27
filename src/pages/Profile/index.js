import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { AuthContext } from "../../contexts/auth";

export default function Profile( ){

    const { signOut, user } = useContext(AuthContext);

    return(
        <View style={ styles.container }>

        <Image
        style={ styles.image }
        source={ require('../../assets/perfil.png') }
        />

        <Text style={ styles.txt }>Bem-vindo:</Text>
        <Text style={ styles.txtUser }>{ user.nome }</Text>
        
        <View style={ styles.viewBtn }>
            <TouchableOpacity
            style={ styles.btn }
            onPress={ signOut }
            >
                <Text style={ styles.txtBtn }>Logout</Text>
            </TouchableOpacity>
        </View>

    </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: { 
        height: 100,
        width: 100,
    },
     txt: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 18,
     },
     txtUser: {
        fontSize: 22,
        fontWeight:'bold',
     },
     viewBtn: {
        height: 50,
        width: 150,
        backgroundColor: '#ff0000',
        borderRadius: 5,
        marginTop: 30,
     },
     btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     },
     txtBtn: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
     },
});