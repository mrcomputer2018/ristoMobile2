import React, { createContext, useState, useEffect } from "react";
import firebase from '../services/firebase/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* createContext - pede um valor default */
export const AuthContext = createContext({});


export default function AuthProvider({ children }) {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ loadingAuth, setLoadingAuth ] = useState(false);

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

    // Logar usuario
    async function signIn(email, password){

        setLoadingAuth(true);

        await firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(
            async (value) => {
                // once - para pegar uma unica vez
                let uid = value.user.uid;
                await firebase.database().ref('users')
                .child(uid)
                .once('value')
                .then(
                    (sanpshot) => {
                        let data = {
                            uid: uid,
                            nome: sanpshot.val().nome,
                            email: value.user.email
                        };

                        setUser(data);
                         /** salvando no async storage */
                        storageUser(data);
                        // Parando de exibir o loading
                        setLoadingAuth(false);
                    }
                )
                .catch(
                    (error) => {
                        console.log(error.code);
                        alert(error.code);
                        setLoadingAuth(false);
                    }
                )
            }
        )
        .catch(
            (error) => {
                console.log(error.code);
                alert(error.code);
                setLoadingAuth(false);
            }
        )
    }

    // cadastro de usuario
    async function signUp(nome, email, password){

        setLoadingAuth(true);

        await firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then( 
            async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users')
                .child(uid)
                .set({
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
                    setLoadingAuth(false);
                })
                .catch( 
                    (error) => {
                        console.log(error.code);
                        alert(error.code);
                        setLoadingAuth(false);
                    }
                )
        })
        .catch(
            (error) => {
                console.log(error.code);
                alert(error.code);
                setLoadingAuth(false);
            }
        );
    }

    // Deslogar Usuario
    async function signOut() {
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(
            () => {
                setUser(null);
            }
        )
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
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut, loading, loadingAuth }}>
            { children }
        </AuthContext.Provider>
    );
}