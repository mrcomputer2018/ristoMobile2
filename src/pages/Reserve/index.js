import React, { useState, useContext } from "react";
import firebase from '../../services/firebase/firebaseConnection';
import { useNavigation } from "@react-navigation/native";
import 
{ Text, View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Alert, ActivityIndicator } 
from "react-native";
import { TextInputMask } from 'react-native-masked-text'

import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";

export default function Reserve(){

    const navigation = useNavigation();

    const [ nameReserve, setNameReserve ] = useState('');
    const [ emailReserve, setEmailReserve ] = useState('');
    const [ telephone, setTelephone ] = useState('');
    const [ date, setDate ] = useState('');
    const [ hour, setHour] = useState('');
    const [ loadingReserve, setLoadingReserve ] = useState(false);

    const { user } = useContext(AuthContext);

    const maskOnlyLetters = (value) => {
        return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
    };
    
    const maskEmail = (value) => {
        return value.replaceAll("(?<=.)[^@](?=[^@]*?@)|(?:(?<=@.)|(?!^)\\G(?=[^@]*$)).(?=.*\\.)", "*")
    };

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
        setLoadingReserve(true);

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
       setLoadingReserve(false);
        alert("Reserva efetuada com sucesso.");
        navigation.navigate('Home');
    }

    return(

        <KeyboardAvoidingView 
            behavior={Platform.OS == 'ios' ? 'padding' : ''}
            style={ styles.background }
            enabled
        >
            <Header/>

            <View style={ styles.container }>
                <Text style={ styles.text }>Reserva</Text>

                <View style={ styles.viewInput }>
                    <TextInput
                        style={ styles.input }
                        placeholder="Nome"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { nameReserve }
                        onChangeText={ (text) => setNameReserve(maskOnlyLetters(text)) }
                    />
                </View>

                <View style={ styles.viewInput }>
                    <TextInput
                        style={ styles.input }
                        placeholder="E-mail"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { emailReserve }
                        onChangeText={ (text) => setEmailReserve(maskEmail(text)) }
                    />
                </View>

                {/* telefone */}
                <View style={ styles.viewInput }>
                    <TextInputMask
                        style={ styles.input }
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        placeholder="(21)99999-9999"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { telephone }
                        keyboardType="numeric"
                        onChangeText={ (text) => setTelephone(text) }
                    />
                </View>

                {/* dia */}
                <View style={ styles.viewInput }>
                    <TextInputMask
                        style={ styles.input }
                        type={'datetime'}
                        options={{
                          format: 'DD/MM/YYYY'
                        }}
                        placeholder="03/03/2023"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { date }
                        keyboardType="numeric"
                        onChangeText={ (text) => setDate(text) }
                    />
                </View>

                {/* horario */}
                <View style={ styles.viewInput }>
                    <TextInputMask
                        style={ styles.input }
                        type={'datetime'}
                        options={{
                          format: 'HH:mm'
                        }}
                        placeholder="13:00hs"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { hour }
                        keyboardType="numeric"
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
                     {
                        loadingReserve ? (
                            <ActivityIndicator size={24} color="#313234"/>
                        ) : (
                            <Text style={ styles.textBtn }>Reservar</Text>
                        )
                    }
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        /* alignItems: 'center', */
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    container: {
        backgroundColor: '#fafafa',
        borderRadius: 16,
        marginRight:20,
        marginLeft:20,
        marginTop: 10,
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
        marginBottom: 20,
    },
    textLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
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