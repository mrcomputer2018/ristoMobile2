import React, { useState, useContext } from "react";
import firebase from '../../services/firebase/firebaseConnection';
import { useNavigation } from "@react-navigation/native";
/* import { Formik } from "formik";
import * as Yup from "yup"; */
import 
{ Text, View, StyleSheet, TextInput, TouchableOpacity, Keyboard, Alert } 
from "react-native";

import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";

export default function Reserve(){

    const navigation = useNavigation();

    const [ nameReserve, setNameReserve ] = useState('');
    const [ emailReserve, setEmailReserve ] = useState('');
    const [ telephone, setTelephone ] = useState('');
    const [ date, setDate ] = useState('');
    const [ hour, setHour] = useState('');
    const { user } = useContext(AuthContext);


    function handleSubmit(){
        // fechando teclado
        Keyboard.dismiss();

        if( nameReserve === '' || emailReserve === '' || telephone === '' || date === '' || hour === '' ) {
            alert('Preencha todos os campos');
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Nome: ${nameReserve}\nData: ${date} - Hora: ${hour}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd(),
                },
            ]
        )
    }

    async function handleAdd() {
        let uid = user.uid;

        //gerando chave aleatoria
        let key = await firebase.database().ref('reserve').child(uid)
        .push().key;

        await firebase.database().ref('reserve')
        .child(uid).child(key).set({
            nome: nameReserve,
            email:emailReserve,
            telefone: telephone,
            data: date,
            hora: hour
        })

        Keyboard.dismiss();
        setNameReserve('');
        setEmailReserve('');
        setTelephone('');
        setDate('');
        setHour('');
        alert("Reserva efetuada com sucesso.");
        navigation.navigate('Home');
    }

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

                {/* telefone */}
                <View style={ styles.viewInput }>
                    <Text style={ styles.textLabel }>telefone de contato:</Text>
                    <TextInput
                        style={ styles.input }
                        placeholder="ex: (21)99999-9999"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { telephone }
                        onChangeText={ (text) => setTelephone(text) }
                    />
                </View>

                {/* dia */}
                <View style={ styles.viewInput }>
                    <Text style={ styles.textLabel }>Data:</Text>
                    <TextInput
                        style={ styles.input }
                        placeholder="ex: 03/03/2023"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { date }
                        onChangeText={ (text) => setDate(text) }
                    />
                </View>

                {/* horario */}
                <View style={ styles.viewInput }>
                    <Text style={ styles.textLabel }>Horario:</Text>
                    <TextInput
                        style={ styles.input }
                        placeholder="ex: 13:00"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { hour }
                        onChangeText={ (text) => setHour(text) }
                    />
                </View>
            </View>
            
            {/*  botao */}
            <View style={ styles.btnView }>
                <TouchableOpacity 
                    style={ styles.btn }
                    onPress={ handleSubmit }
                    >
                    <Text style={ styles.textBtn }>Reservar</Text>
                </TouchableOpacity>
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
        backgroundColor: '#fafafa',
        borderRadius: 16,
        marginRight:20,
        marginLeft:20,
        padding: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    text: {
        fontSize: 26,
        color: '#333',
        padding: 15,
        fontWeight: 'bold',
    },
    viewInput: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
    },
    textLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#bbb',
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
        height: 45,
        borderRadius: 8,
    },
    textBtn: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});