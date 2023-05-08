import React, { useState, useContext } from "react";
import { ActivityIndicator } from "react-native";
import 
{ BackGround, 
    Container, View, Text, TextInput,
    SubmitBotton, SubmitText, 
} 
from "../SignIn/styles";
import { AuthContext } from "../../contexts/auth";


export default function SignUp(){

    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const { signUp, user, loadingAuth } = useContext(AuthContext);

    function handleSignUp() {
        signUp(nome, email, password);
    }

    return(
        <BackGround>
            <Container
                behavior={ Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <View>
                    <Text>Nome</Text>
                    <TextInput 
                        placeholder="ex: nome sobrenome"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        value= { nome }
                        onChangeText={ (text) => setNome(text) }
                    />
                </View>

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
                    onPress={ handleSignUp }  
                >
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={24} color="#313234"/>
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                    
                </SubmitBotton>

            </Container>
        </BackGround>
    );
}