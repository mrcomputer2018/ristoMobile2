import React from "react";
import { View, Text, StyleSheet,TouchableOpacity, Image } from "react-native";

export default function CardItem({ data, addAmount, removeAmount }){

    function handleIncrease(){
        addAmount();

        console.log('CarItem >>>>> amount: ' + data.amount);
    }

    function handleDecrease(){
        removeAmount()
    
        if(data.amount === 0){
          return;
        }
    
      }

    return(
        <View style={ styles.container }>
            <View style={ styles.viewDescription }>
                <View>
                    <Text style={ styles.title }>{ data.nome }</Text>
                    <Text style={ styles.price }>RS { data.preco }</Text>
                </View>
                
                <View style={ styles.amountContainer }>
                    <TouchableOpacity 
                        style={ styles.btnAdd }
                        onPress={ handleDecrease }    
                    >
                        <Text style={ styles.btnText }>-</Text>
                    </TouchableOpacity>

                    <Text style={ styles.amount }>{ data.amount }</Text>

                    <TouchableOpacity 
                        style={ styles.btnAdd }
                        onPress={ handleIncrease }
                    >
                        <Text style={ styles.btnText }>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Image 
                    style={ styles.image } 
                    source={ data?.imagem }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 2,
        marginBottom: 14,
        marginTop: 14,
        padding: 8,
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    viewDescription: {
        lexdirection: 'column',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    price: {
        color: '#E4723C',
        fontWeight: 'bold',
        fontSize: 17
    }, 
    amountContainer: {
        marginTop: 14,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnAdd : {
        backgroundColor: '#F5CA48',
        padding: 6,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 2,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    amount: {
        fontSize: 18,
        marginLeft: 14,
        marginRight: 14,
    },
    image: {
        height: 85,
        width: 85,
        borderRadius: 2,
    }
});