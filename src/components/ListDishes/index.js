import React from "react";
import 
{ View, Text, StyleSheet, TouchableOpacity } 
from "react-native";


export default function ListDishes({ data, addToCart }){

     return(
        <View style={ styles.container }>
            <View>
                <Text style={ styles.txtTitle }>{data.nome}</Text>
                <Text style={ styles.txtPrice }>R$ {data.preco}</Text>
            </View>

            <TouchableOpacity 
                style={ styles.btnAdd }
                onPress={ addToCart }
            >
                <Text style={ styles.btnText }>+</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 2,
        marginBottom: 14,
        marginLeft: 14,
        marginRight: 14,
        padding: 8,
        paddingBottom: 14,
        paddingTop: 14,
        paddingLeft: 14,
        paddingRight: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    txtTitle : {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
    },
    txtPrice: {

    },
    btnAdd : {
        paddingStart: 12,
        paddingEnd: 12,
        backgroundColor: '#F5CA48',
        borderRadius: 2,
        paddingTop: 6,
        paddingBottom: 6,
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});