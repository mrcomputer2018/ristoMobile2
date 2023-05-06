import React,{ useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity, Image } from "react-native";

export default function CardItem({ data, addAmount, removeAmount }){

    const [amount, setAmount]= useState(data?.amount);

    function handleIncrease(){
        addAmount();
        //chamar do contexto para aumentar e somar +1
        setAmount(item => item + 1);
       
        console.log('CarItem >>>>> amount: ' + data.amount);
    }

    function handleDecrease(){
        removeAmount()
    
        if(amount === 0){
          setAmount(0);
          return;
        }
    
        setAmount(item => item - 1)
    
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

                    <Text style={ styles.amount }>{ amount }</Text>

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
        fontSize: 16,
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