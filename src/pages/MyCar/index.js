import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Header from "../../components/Header";

export default function MyCar(){
    return(
        <View style={ styles.background }>
            <Header />

            <View style={ styles.container }>
                <Text style={ styles.text }>Pagina Home</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        color: '#333',
    },
});