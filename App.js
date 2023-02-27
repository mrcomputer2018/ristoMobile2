import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

/* LogBox.ignoreLogs(patterns)  = true; */
import { ThemeProvider } from 'styled-components';

import AuthProvider from "./src/contexts/auth";
import Routes from "./src/routes";
import colors from './src/colors/colors';

export default function App() {
  return(
    <NavigationContainer>
      {/* para todas as rotas terem acesso as informacoes */}
      <AuthProvider>

        <ThemeProvider theme={ colors }>

          <StatusBar
            backgroundColor="#333"
            barStyle="light-content"
          />

          <Routes />

        </ThemeProvider>

      </AuthProvider>

    </NavigationContainer>
    
  );
}