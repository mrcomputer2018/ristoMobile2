import styled from "styled-components/native";

export const BackGround = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${ props => props.theme.background };
    padding: 15px;
`;

export const Container = styled.KeyboardAvoidingView`
    align-items: center;
    justify-content: center;   
`;

export const ImageLogo = styled.Image`
    height: 170px;
    width: 170px;
    margin-bottom: 35px;
`;

export const View = styled.View`
    width: 95%;
    margin-bottom: 10px;
`;

export const Text = styled.Text`
    color: ${ props => props.theme.textLight };
    font-size: 18px;
    margin-bottom: 10px;
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255, 255, 255, 0.7)'
})`
    color: ${ props => props.theme.textLight };
    background-color:  ${ props => props.theme.inputBackground };
    width: 100%;
    font-size: 18px;
    margin-bottom: 10px;
    border-radius: 8px;
    height: 55px;
    padding: 15px;
`;

export const SubmitBotton = styled.TouchableOpacity`
    alignItems: center;
    justify-content: center;
    background-color: ${ props => props.theme.botton };
    width: 90%;
    height: 55px;
    border-radius: 8px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: ${ props => props.theme.textDark };
    font-weight: bold;
    text-transform: uppercase;
`;

export const BtnLinK = styled.TouchableOpacity`
    margin-bottom: 9px;
    margin-top: 5px;
`;

export const  LinkText = styled.Text`
    margin-bottom: 15px;
    color: ${ props => props.theme.textLight };
    font-size: 17px;
    margin-top: 10px;
`;
