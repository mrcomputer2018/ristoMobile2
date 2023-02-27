import React, { createContext, useState, useEffect } from "react";
import firebase from '../services/firebase/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* createContext - pede um valor default */
export const AuthContext = createContext({});


export default function AuthProvider({ children }) {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    // Verificando ao carregar se esta logado
    useEffect( () => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }

        loadStorage();

    }, []);

    // cadastro de usuario
    async function signUp(nome, email, password){
        await firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then( 
            async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users')
                .child(uid)
                .set({
                    saldo: 0,
                    nome: nome
                })
                .then( () => {
                    // criou a conta do usuario
                    let data = {
                        uid: uid,
                        nome: nome, 
                        email: value.user.email
                    }

                    setUser(data);
                    storageUser(data);
                })
                .catch( 
                    (error) => {
                        console.log(error.code);
                        alert(error.code);
                    }
                )
        })
        .catch(
            (error) => {
                console.log(error.code);
                alert(error.code);
            }
        );
    }

    // adicionando DATA ao banco de dados local
    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    return(
        // exportando funcoes e dados vindos do firebase
        <AuthContext.Provider value={{ signed: !!user, user, signUp }}>
            { children }
        </AuthContext.Provider>
    );
}