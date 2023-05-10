import React, { useContext, useState, useEffect } from 'react';
import firebase from '../../services/firebase/firebaseConnection';
import 
{ View, Text, StyleSheet, KeyboardAvoidingView, Platform, FlatList, Alert, TouchableOpacity } 
from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

import Header from "../../components/Header";
import ListReserves from '../../components/ListReserves';


export default function MyReserve(){
    const [ reserves, setReserves ] = useState([]);

    const { user } = useContext(AuthContext);
    const uid = user && user.uid;

    const navigation = useNavigation();

    useEffect( () => {
        async function loadList() {
            await firebase.database().ref('reserve').child(uid)
            .orderByChild('data')
            .limitToLast(10)
            .on('value', (snapshot) => {
                setReserves([]);

                snapshot.forEach( (childItem) => {
                    let list = {
                        key: childItem.key,
                        data: childItem.val().data,
                        email: childItem.val().email,
                        hora: childItem.val().hora,
                        nome: childItem.val().nome,
                        telefone: childItem.val().telefone
                    }

                    setReserves(oldArray => [...oldArray, list]);
                });
            });
        }
        
        loadList();
    },[])

    function handleDelete(data){

        Alert.alert(
          'Cuidado Atençao!',
          `Você deseja excluir ${data.nome} - Dia: ${data.data}\nHora: ${data.hora}`,
          [
            {
              text: 'Cancelar',
              style: 'cancel'
            },
            {
              text: 'Continuar',
              onPress: () => handleDeleteSuccess(data)
            }
          ]
        )
    
      }
    
      async function handleDeleteSuccess(data){
        await firebase.database().ref('reserve')
        .child(uid).child(data.key).remove()
        .then(  ()=>{
            Alert('Reserva excluida com sucesso.');
        })
        .catch((error)=>{
          console.log(error);
        })
      }
   
    return (
        <KeyboardAvoidingView 
            style={ styles.Bachground }
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            enabled
        >
            <Header />

            <Text style={ styles.title }>Minhas Reservas</Text>

            <View style={ styles.container }>
                <FlatList
                    showsVerticalScrollIndicator= { false } 
                    data={ reserves }
                    keyExtractor={ (item) => String(item.key) }
                    renderItem={({item}) => (
                        <ListReserves 
                            data={ item }
                            deleteItem={ handleDelete } 
                        />
                    )}
                    ListEmptyComponent={ 
                        () => 
                        <View style={ styles.viewText }>
                            <Text style={ styles.text }>
                                   Sem reservas no momento...
                            </Text>
    
                            <View style={ styles.btnView }>
                                <TouchableOpacity 
                                    style={ styles.btn }
                                    onPress={
                                        () => navigation.navigate('Home')
                                    }
                                >
                                    <Text style={ styles.textBtn }>Voltar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                />
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
        borderRadius: 4,
        marginRight:20,
        marginLeft:20,
        marginTop: 20,
        padding: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        paddingLeft: 14,
        paddingRight: 14,
        marginTop: 15,
    },
    viewText: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
       
    }, 
    text : {
        fontSize: 20,
        color: '#333',
        paddingTop: 200,
    },
    total: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 24,
        marginTop: 10,
    },
    btnView: {
        flex: 1,
        paddingBottom: 200,
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
});