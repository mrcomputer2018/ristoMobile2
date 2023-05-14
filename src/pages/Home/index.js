import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Delivery() {

  const navigation = useNavigation();
  
  return (
      <View style={styles.container}>

        {/* cabecalho */}
        <View style={styles.containerButtonSuperior}>
          <View style={styles.areabuttonOne}>
            {/* Adicionar onPress para abrir o Drawer */}
            <TouchableOpacity 
              onPress={()=> navigation.navigate('Perfil')}
            >
              <Image 
              style={styles.buttonOne} 
              source={require('../../assets/userimage.png')}/>
            </TouchableOpacity>
          </View>

          <View style={styles.areaTitle}>
            <Image 
            style={styles.ristotext} 
            source={require('../../assets/Risto.png')}/>
          </View>

          <View style={styles.areabuttonTwo}>
            {/* Adicionar onPress para página do carrinho */}
            <TouchableOpacity 
              style={styles.buttonTwo}
              onPress={ () => navigation.navigate('Seu Pedido') }
            >
              <Image 
              style={styles.imagebutton2} 
              source={require('../../assets/carrinho.png')}/>
            </TouchableOpacity>
          </View>

        </View>
        {/* Fim cabecalho */}

        {/* Delivery */}
        <Text style={styles.textdelivery}>Delivery</Text>

        <View style={styles.areaPratos}>

          <View style={styles.pratos1}>

          <TouchableOpacity 
            style={styles.areaPratoButton} 
            onPress={()=> navigation.navigate('Pratos', 
            {
              nome: 'Pizza',
              preco: '49,99',
              descricao: 'Deliciosa pizza, feita com queijo, tomate, manjericão, orégano e azeitonas.',
              imagem: require('../../assets/pizza.jpg'),
            }
          )}>
              <Image style={styles.imagePrato} source={require('../../assets/pizza.jpg')}/>
              <Text>Pizza</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.areaPratoButton} 
            onPress={()=> navigation.navigate('Pratos', {
              nome: 'Lasanha',
              preco: '59,99',
              descricao: 'Lasanha divina, feita com queijo, carne e molho de tomate.',
              imagem: require('../../assets/lasanha.jpg')
            })}>
              <Image style={styles.imagePrato} source={require('../../assets/lasanha.jpg')}/>
              <Text>Lasanha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.areaPratoButton} onPress={()=> navigation.navigate('Pratos', {
               nome: 'Raviolli',
               preco: '49,99',
               descricao: 'Raviolli, feito com queijo e molho de tomate.',
               imagem: require('../../assets/raviolli.jpg'),
            })}>
              <Image style={styles.imagePrato} source={require('../../assets/raviolli.jpg')}/>
              <Text>Raviolli</Text>
          </TouchableOpacity>

        </View>
       
        <View style={styles.pratos2}>

          <TouchableOpacity 
            style={styles.areaPratoButton} 
            onPress={()=> navigation.navigate('Pratos', 
            {
                nome: 'Risotto',
                preco: '39,99',
                descricao: 'Risoto maravilhoso.',
                imagem: require('../../assets/risoto.jpg'),
            })}>
              <Image style={styles.imagePrato} source={require('../../assets/risoto.jpg')}/>
              <Text>Risotto</Text>
          </TouchableOpacity>
            
          <TouchableOpacity style={styles.areaPratoButton} onPress={()=> navigation.navigate('Pratos', {
               nome: 'Spaghetti',
               preco: '49,99',
               descricao: 'Spaghetti feito com carne e molho de tomate.',
               imagem: require('../../assets/spaghetti.jpg'),
            })}>
              <Image style={styles.imagePrato} source={require('../../assets/spaghetti.jpg')}/>
              <Text>Spaghetti</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.areaPratoButton} onPress={()=> navigation.navigate('Pratos', {
                nome: 'Tiramisù',
                preco: '39,99',
                descricao: '*Manter na geladeira antes de consumir.',
                imagem: require('../../assets/tiramisu.jpg'),
            })}>
              <Image style={styles.imagePrato} source={require('../../assets/tiramisu.jpg')}/>
              <Text>Tiramisù</Text>
          </TouchableOpacity>
        

        </View>

        </View>

        <View style={styles.linhareserva}></View>
        
        <Text style={styles.textreserva}>Reserva</Text>

        {/* reserva */}
        <TouchableOpacity 
          style={styles.buttonReserva}
          onPress={() => navigation.navigate('Reserva')}
        >

          <Image style={styles.imageRestaurante} source={require('../../assets/restaurante.jpg')}/>
          <Text style={styles.textoReservai}>Venha nos conhecer</Text>
          <Text style={styles.textRestaurante}>O restaurante 5 estrelas que amamos!</Text>

        </TouchableOpacity>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  containerButtonSuperior: {
    flexDirection: 'row',
    top:15,
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
    borderRadius: 30,
    borderColor: "#D9D9D9",
    resizeMode: 'contain',
  },

  areaTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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

  imagebutton2: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },

  ristotext: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    bottom: 20,
  },

  textdelivery: {
    left: 16,
    top: 5,
    fontSize: 24,
    fontWeight: 'bold',
  },

  areaPratos: {
    top:5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  linhareserva: {
    height: 1,
    width: '100%',
    backgroundColor: '#CDCDCD',
    top:-20,
  },

  textreserva: {
    left: 16,
    top: 0,
    fontSize: 24,
    fontWeight: 'bold',
  },

  pratos1: {
    flexDirection: 'row',
    top: 25,
    paddingHorizontal: 16,
  },

  pratos2: {
    flexDirection: 'row',
    marginVertical:60,
    paddingHorizontal: 16,
  },

  areaPratoButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },

  imagePrato: {
    height: 90,
    width: 90,
    borderWidth: 2,
    borderColor: "#F5CA48",
    borderRadius: 10,
  },

  imageRestaurante: {
    height: 190,
    width: 350,
    borderWidth: 2,
    borderColor: "#CDCDCD",
    borderRadius: 15,
    alignSelf: 'center',
  },

  textRestaurante: {
    textAlign: 'center',
    width: 350,
    bottom: 70,
    backgroundColor: '#000000',
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16
  },

  textoReservai: {
    width: 350,
    bottom: 70,
    alignSelf: 'center',
    backgroundColor: "#F5CA48",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },

  buttonReserva: {
    height: 210,
    top: 20,
  },
 
});