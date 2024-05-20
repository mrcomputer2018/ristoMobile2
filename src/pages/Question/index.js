import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import 
{ Text, View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Alert, ActivityIndicator, Platform } 
from "react-native";
import axios from "axios";


import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import { set } from "react-native-reanimated";

export default function Question(){

    const navigation = useNavigation();

    const [ question, setQuestion ] = useState('');
    const [ loadingQuestion, setLoadingQuestion ] = useState(false);
    const [ data, setData ] = useState([]);

    const { user } = useContext(AuthContext);

    const maskOnlyLetters = (value) => {
        return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
    };
    
    function handleSubmit(){
        // fechando teclado
        Keyboard.dismiss();

        if( question === '') {
            alert('Preencha este campo com uma pergunta.');
            return;
        }

        handleSendQuestions();
    }

    async function handleSendQuestions() {
        setLoadingQuestion(true);

        await axios.post("http://10.0.2.2:3000/ask", {
            question: `${question}`,
        })
        .then((response) => { 
            setData(response.data);
            newData = [ ...data, response.data]
            setData(newData);
        })
        .catch((error) => {
            console.log(error);
            Alert.alert('Erro ao enviar pergunta. Tente novamente mais tarde.');
        });

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
                    <Text style={ styles.label }>Perguntas:</Text>

                    <TextInput
                        style={ styles.input }
                        placeholder="digite aqui..."
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { question }
                        onChangeText={ (text) => setQuestion(maskOnlyLetters(text)) }
                    />
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
                                <Text style={ styles.textBtn }>Enviar</Text>
                            )
                        }
                    </TouchableOpacity>
                </View>
            </View>

            <View style={ styles.answerView }>
                <Text style={ styles.label }>Conversa:</Text>

                { 
                data.length > 0 ?
                (data.map((item, index) => {
                    return(
                        <View key={index}>
                            <Text style={ styles.textQuestion }>
                                Você: { item.question }
                            </Text>

                            <Text style={ styles.textAnswer }>
                                Risto: { item.answer }
                            </Text>
                        </View>
                    );
                }))
                :
                (
                    <Text style={ styles.textQuestion }>
                        sem conversa ainda...
                    </Text>
                )}
            </View>
            
            
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
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
        height: 280,
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
        marginTop: 0,
    },
    textLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 16,
        padding: 10,
        fontSize: 18,
        backgroundColor: '#fff',
        marginTop: 5,
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
    answerView: {
        backgroundColor: '#fafafa',
        borderRadius: 8,
        marginRight:20,
        marginLeft:20,
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    textAnswer: {
        fontSize: 16,
        color: '#333',
        padding: 8,
        fontWeight: 'bold',
        backgroundColor: '#DDD',
        borderRadius: 20,
    },
    textQuestion: {
        fontSize: 16,
        color: '#333',
        padding: 8,
    },
});