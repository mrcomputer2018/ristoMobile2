import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { HeaderView, BtnMenu } from './styles';

export default function Header(){

    const navigation = useNavigation();

    return(
        <HeaderView>
            <BtnMenu
                onPress={ () => navigation.toggleDrawer() }
            >
                <Feather
                    name="menu"
                    color="#333"
                    size={ 30 }
                />
            </BtnMenu>
        </HeaderView>
    );
}