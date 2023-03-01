import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function MyCar(){
    return(
        <View style={ styles.container }>
            <Text style={ styles.text }>Meu Carrinho</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
    },
});