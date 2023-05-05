import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CartContext } from '../../contexts/cartContext';

import CardItem from '../../components/CardItem';

export default function Cart(){

    const { cart, addItemCard, removeItemCart } = useContext(CartContext);

    return (
        <View style={ styles.container }>
            <FlatList 
                showsVerticalScrollIndicator= { false }
                data={ cart }
                keyExtractor={ (item) => String(item.id) }
                ListEmptyComponent={ 
                    () => <Text style={ styles.text }>
                            Nenhum item no carrinho...
                    </Text>
                }
                renderItem={ ({ item }) => (
                        <CardItem 
                        data={ item } 
                        addAmount={ () => addItemCard(item) }
                        removeAmount={ () => removeItemCart(item) }
                        />
                    ) 
                }
                
            />
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14,
        backgroundColor: '#FAFAFA',
    }, 
    text : {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        paddingTop: 20,
    }
});