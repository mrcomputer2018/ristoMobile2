import React, { useState, useContext } from "react";
import firebase from '../../services/firebase/firebaseConnection';
import { useNavigation } from "@react-navigation/native";
import 
{ Text, View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Alert, ActivityIndicator, Platform } 
from "react-native";

import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";

export default function Question(){

    const navigation = useNavigation();

    const [ question, setQuestion ] = useState('');
    const [ loadingQuestion, setLoadingQuestion ] = useState(false);

    const { user } = useContext(AuthContext);

    const maskOnlyLetters = (value) => {
        return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
    };
    
    function handleSubmit(){
        // fechando teclado
        Keyboard.dismiss();

        if( question === '') {
            alert('Preencha o campo de pergunta.');
            return;
        }

        handleAdd();
    }

    async function handleAdd() {
        setLoadingQuestion(true);

        let uid = user.uid;

        //gerando chave aleatoria
        let key = await firebase.database().ref('question').child(uid)
        .push().key;

        await firebase.database().ref('question')
        .child(uid).child(key).set({
            question: question,
        })

        Keyboard.dismiss();
        setQuestion('');
        setLoadingQuestion(false);
    }

    return(

        <KeyboardAvoidingView 
            behavior={Platform.OS == 'ios' ? 'padding' : ''}
            style={ styles.background }
            enabled
        >
            <Header/>

            <View style={ styles.container }>
                <Text style={ styles.text }>Faça seu pedido via chat aqui!!!</Text>

                <View style={ styles.viewInput }>
                    <TextInput
                        style={ styles.input }
                        placeholder="digite aqui..."
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { question }
                        onChangeText={ (text) => setQuestion(maskOnlyLetters(text)) }
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
                        loadingQuestion ? (
                            <ActivityIndicator size={24} color="#313234"/>
                        ) : (
                            <Text style={ styles.textBtn }>Enviar pergunta</Text>
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
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    container: {
        backgroundColor: '#fafafa',
        borderRadius: 8,
        marginRight:20,
        marginLeft:20,
        marginTop: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    text: {
        fontSize: 22,
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