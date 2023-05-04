import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import  Feather  from "react-native-vector-icons/Feather";

import Header from "../../components/Header";
import ListDishes from "../../components/ListDishes";
import { CartContext } from "../../contexts/cartContext";

export default function MyCar(){

    const { cart } = useContext(CartContext);

    const navigation = useNavigation();

    const [ products, setProducts ] = useState([
        {
            id: '1',
            nome: 'Pizza',
            preco: '49,99',
            descricao: 'Deliciosa pizza, feita com queijo, orégano e azeitonas.',
            imagem: require('../../assets/pizza.jpg'),
        },
        {
            id: '2',
            nome: 'Lasanha',
            preco: '59,99',
            descricao: 'Lasanha divina, feita com queijo, carne e molho de tomate.',
            imagem: require('../../assets/lasanha.jpg')
        },
        {
            id: '3',
            nome: 'Raviolli',
            preco: '49,99',
            descricao: 'Raviolli, feito com queijo e molho de tomate.',
            imagem: require('../../assets/raviolli.jpg'),
        },
        {
            id: '4',
            nome: 'Risotto',
            preco: '39,99',
            descricao: 'Risoto maravilhoso.',
            imagem: require('../../assets/risoto.jpg'),
        },
        {
            id: '5',
            nome: 'Spaghetti',
            preco: '49,99',
            descricao: 'Spaghetti feito com carne e molho de tomate.',
            imagem: require('../../assets/spaghetti.jpg'),
        },
        {
            id: '6',
            nome: 'Tiramisù',
            preco: '39,99',
            descricao: '*Manter na geladeira antes de consumir.',
            imagem: require('../../assets/tiramisu.jpg'),
        },
    ]);

    return(
        <SafeAreaView 
            style={ styles.background }
        >
            <Header />

            <View style={ styles.container }>
                
                <Text style={ styles.title }>Pratos</Text>

                <TouchableOpacity 
                    style={ styles.btnCart }
                    onPress={ ( )=> navigation.navigate('Cart') }
                >
                    <View style={ styles.dot }>
                        <Text style={ styles.dotText }>
                            { cart?.length }
                        </Text>
                    </View>

                    <Feather name="shopping-cart" size={ 30 }  color="#333" />                
                </TouchableOpacity>
            </View>

            <FlatList 
                style={ styles.listDishes }
                data={ products }
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({ item }) => <ListDishes data={ item } /> }
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingEnd: 14,
        paddingStart: 14,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: 20,
        width:20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4,
    },
    dotText: {
        fontSize: 12,
    },
    listDishes :{

    }
});