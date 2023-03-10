import React, { useState } from "react";
import 
{ Text, View, StyleSheet, TextInput, TouchableOpacity } 
from "react-native";

import Header from "../../components/Header";

export default function Reserve(){

    const [ nameReserve, setNameReserve ] = useState('');
    const [ emailReserve, setEmailReserve ] = useState('');

    return(
        <View style={ styles.background }>
            <Header/>

            <View style={ styles.container }>
                <Text style={ styles.text }>Reserva</Text>

                <View style={ styles.viewInput }>
                    <Text style={ styles.textLabel }>Nome:</Text>
                    <TextInput
                        style={ styles.input }
                        placeholder="ex: joao silva"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { nameReserve }
                        onChangeText={ (text) => setNameReserve(text) }
                    />
                </View>

                <View style={ styles.viewInput }>
                    <Text style={ styles.textLabel }>E-mail:</Text>
                    <TextInput
                        style={ styles.input }
                        placeholder="ex: contato@contato.com"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { emailReserve }
                        onChangeText={ (text) => setEmailReserve(text) }
                    />
                </View>

               {/*  botao */}
                <View style={ styles.btnView }>
                    <TouchableOpacity style={ styles.btn }>
                        <Text style={ styles.textBtn }>Reservar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#eee',
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        borderRadius: 16,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 65,
    },
    text: {
        fontSize: 26,
        color: '#333',
        padding: 15,
    },
    viewInput: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    textLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#131313',
        borderRadius: 16,
        padding: 10,
        fontSize: 18,
        backgroundColor: '#fff',
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
        height: 50,
        borderRadius: 8,
    },
    textBtn: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});