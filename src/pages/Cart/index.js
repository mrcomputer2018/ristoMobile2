import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity }
from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CartContext } from '../../contexts/cartContext';

import CardItem from '../../components/CardItem';

export default function Cart(){

    const { cart, addItemCard, removeItemCart, total } = useContext(CartContext);
    const navigation = useNavigation();

    return (
        <View style={ styles.container }>
            <FlatList 
                showsVerticalScrollIndicator= { false }
                data={ cart }
                keyExtractor={ (item) => String(item.id) }
                ListEmptyComponent={ 
                    () => 
                    <View style={ styles.viewText }>
                        <Text style={ styles.text }>
                                Nenhum item no carrinho...
                        </Text>

                        <View style={ styles.btnView }>
                            <TouchableOpacity 
                                style={ styles.btn }
                                onPress={
                                    () => navigation.navigate('Seu Pedido')
                                }
                            >
                                <Text style={ styles.textBtn }>Voltar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                renderItem={ ({ item }) => (
                        <CardItem 
                        data={ item } 
                        addAmount={ () => addItemCard(item) }
                        removeAmount={ () => removeItemCart(item) }
                        />
                    ) 
                }
                ListFooterComponent={ () =>
                    <View>
                        <Text style={ styles.total }>
                            { total !== 0 && `Total: RS ${ total }`}
                        </Text>

                        <View style={ styles.btnViewFooter }>
                            <TouchableOpacity 
                                style={ styles.btnFooter }
                                onPress={
                                    () => navigation.navigate('Seu Pedido')
                                }
                            >
                                <Text style={ styles.textBtnFooter }>
                                    Fechar pedido
                                </Text>
                            </TouchableOpacity>
                        </View>

                        
                        <View style={ styles.btnViewFooter }>
                            <TouchableOpacity 
                                style={ styles.btnFooter }
                                onPress={
                                    () => navigation.navigate('Seu Pedido')
                                }
                            >
                                <Text style={ styles.textBtnFooter }>
                                    Continuar Comprando
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    viewText: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
       
    }, 
    text : {
        fontSize: 20,
        color: '#333',
        paddingTop: 300,
    },
    total: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 24,
        marginTop: 10,
    },
    btnView: {
        flex: 1,
    },
    btn: {
        backgroundColor: '#facc15',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        height: 45,
        width: 100,
        borderRadius: 8,
    },
    textBtn: {
        color: '#333',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    btnViewFooter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    btnFooter: {
        backgroundColor: '#facc15',
        height: 45,
        width:220,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    textBtnFooter: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
    }
});