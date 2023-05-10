import React from 'react';
import 
{ View, Text, StyleSheet, TouchableWithoutFeedback } 
from 'react-native';

export default function ListReserves({ data, deleteItem }){
    return (
        <TouchableWithoutFeedback
            onLongPress={ () => deleteItem(data) }
        >
            <View style={ styles.container }>
                <Text style={ styles.txtPrincipal }>Nome: { data.nome }</Text>
                <Text style={ styles.txt }>Data: { data.data }</Text>
                <Text style={ styles.txt }>Hora: { data.hora }</Text>
                <Text style={ styles.txt }>Contato: { data.telefone }</Text>
                <Text style={ styles.txt }>E-mail: { data.email }</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    txtPrincipal: {
        fontSize: 18,
        color: '#131313',
        fontWeight: 'bold',
    },
    txt: {
        fontSize: 16,
        color: '#5b5b5b'
    }
});