import React, { useState, useContext } from "react";
import { Platform, ActivityIndicator } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

import 
{ BackGround, Container, ImageLogo, View, Text, TextInput,
    SubmitBotton, SubmitText, BtnLinK, LinkText } 
from "./styles";

export default function SignIn(){

    const navigation = useNavigation();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    function handleSignIn() {
        signIn(email, password);
    }

    return(
        <BackGround>
            <Container
                behavior={ Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <ImageLogo 
                    source={require("../../assets/logotipo_novo.jpeg")}
                />

                <View>
                    <Text>Email</Text>
                    <TextInput 
                        placeholder="ex: contato@dominio.com"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { email }
                        onChangeText={ (text) => setEmail(text) }
                    />
                </View>

                <View>
                    <Text>Senha</Text>
                    <TextInput 
                        placeholder="ex: senha123"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        secureTextEntry
                        value= { password }
                        onChangeText={ (text) => setPassword(text) }
                    />
                </View>

                {/* botao */}
                <SubmitBotton
                    onPress={ handleSignIn }
                >
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={24} color="#313234"/>
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }
                    
                </SubmitBotton>

                <BtnLinK
                onPress={ () => navigation.navigate('SignUp') }
                >
                    <LinkText>Criar uma conta</LinkText>
                </BtnLinK>

            </Container>
        </BackGround>
    );
}