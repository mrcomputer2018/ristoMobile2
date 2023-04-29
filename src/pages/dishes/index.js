import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, Image, TouchableOpacity, Platform } from 'react-native';


export default function Dishes({navigation, route}) {
  return (
      <KeyboardAvoidingView 
      behavior={Platform.OS == 'ios' ? 'padding' : ''} 
      style={styles.container} 
      >
        <View style={styles.containerButtonSuperior}>
          <View style={styles.areabuttonOne}>
            <TouchableOpacity style={styles.buttonOne} onPress={()=> navigation.navigate('Risto')}>
            <Image style={styles.imagebutton1} source={require('../../../assets/Group_1.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.areabuttonTwo}>
            {/* Adicionar onPress para página do carrinho */}
            <TouchableOpacity style={styles.buttonTwo}>
            <Image style={styles.imagebutton2} source={require('../../../assets/Star_1.png')}/>
            </TouchableOpacity>
          </View>

        </View>
       
          <Text style={styles.nomePrato}>{route.params?.nome}</Text>
          
          <Text style={styles.precoPrato}>R${route.params?.preco}</Text>
       
       <View style={styles.containerIferiorcomImagem}>

          <Image style={styles.imageLogo} source={route.params?.imagem}/>
          
        
        <View style={styles.containerInferior}>
            
              <Text style={styles.descricao}>Descrição</Text>

              <View style={styles.linhadescricao}></View>

              <Text style={styles.descricaoprato}>{route.params?.descricao}</Text>
            
            <View style={styles.divquantidade}>

              <Text style={styles.quantidadetexto}>Qtd:</Text>

              <TouchableOpacity style={styles.pickerquantidade}>
              <TextInput style={styles.textobotao} placeholder='1' keyboardType='numeric'></TextInput>
              </TouchableOpacity>
             
            </View>
            <View style={styles.areaButtonAdicionar}>
              {/* Adicionar evento para jogar o prato para o carrinho */}
            <TouchableOpacity style={styles.buttonCarrinho}>
              <Text style={styles.textobotao}>Adicionar ao carrinho</Text>
              <Image style={styles.imagebuttonc} source={require('../../../assets/Group_2.png')}/>
            </TouchableOpacity>
            </View>
        </View>
        </View>
      </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  imageLogo: {
    width: '100%',
    height: 400,
    top: 75,
  },

  areaButtonAdicionar: {
    alignItems: "center",
    bottom: 8,
  },

  containerInferior: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    top: 55,
  },

  buttonCarrinho: {
    width: 315,
    height: 65,
    flexDirection: 'row',
    borderRadius: 35,
    backgroundColor: "#F5CA48",
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerButtonSuperior: {
    flexDirection: 'row',
    top: 40,
    paddingHorizontal: 16,
  },

  areabuttonOne: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  buttonOne: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D9D9D9",
    justifyContent: 'center',
    alignItems: 'center',
  },

  areabuttonTwo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  buttonTwo: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: "#F5CA48",
    justifyContent: 'center',
    alignItems: 'center',
  },

  nomePrato: {
    left: 16,
    top: 60,
    fontSize: 24,
    fontWeight: 'bold',
  },

  precoPrato: {
    left: 16,
    top: 65,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E4723C',
  },

  descricao: {
    fontSize: 20,
    left: 16,
    top: 5,
    color: '#CDCDCD',
  },
  
  linhadescricao: {
    height: 1,
    width: '100%',
    backgroundColor: '#CDCDCD',
    top: 10,
  },

  descricaoprato: {
    fontSize: 15,
    textAlign: 'justify',
    padding: 25,
    fontWeight: 'bold',
    height: 120,
  },

  quantidadetexto: {
    left: 29,
    fontSize: 20,
  },

  divquantidade: {
    flexDirection: 'row',
    bottom: 15,
  },

  textobotao: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  imagebuttonc: {
    marginLeft: 10,
  },

  pickerquantidade: {
    height: 39,
    width: 58,
    marginLeft: 45,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000000",
    backgroundColor: "#D9D9D9",
    padding: 5,
  },

  imagebutton1: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },

  imagebutton2: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },

});