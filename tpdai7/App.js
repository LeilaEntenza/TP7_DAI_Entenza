import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef, useEffect} from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable} from 'react-native'; 

export default function App() {
  const [imgExterna, setImgExterna] = useState({uri: 'https://i.pinimg.com/736x/58/45/33/584533963b52ef77f22f2e9d4c276c90.jpg'});
  const [input, setInput] = useState('');
  const [p, setP] = useState('');
  const buttonRef = useRef(null);
  const mostrarInput = () => {
    setP(input);
  }

  const agregar = (e) =>{
    setInput(e.target.value);
  }

  const verPerfil = () =>{
      if(imgExterna.uri === 'https://i.pinimg.com/736x/58/45/33/584533963b52ef77f22f2e9d4c276c90.jpg')
      setImgExterna ({uri: 'https://i.pinimg.com/736x/e5/5e/b1/e55eb19f5393e2c81d36586825c45b2e.jpg'});
      else setImgExterna ({uri: 'https://i.pinimg.com/736x/58/45/33/584533963b52ef77f22f2e9d4c276c90.jpg'});
  }
  return (
    <ImageBackground 
      source={imgExterna}
      style={{flex:1}}
      resizeMethod= "cover"
      >
      <SafeAreaView style={styles.container}>
        <View style={styles.card}> 
        <Image source={{uri: 'https://i.pinimg.com/736x/7d/a8/d0/7da8d04ef76e488a0b6117b97efece9d.jpg'}} style={styles.FotoPerfil}/>
        <Text style={styles.texto1}>Leila Entenza Chiderski</Text>
        <Text style={styles.texto2}>Full Stack Developer</Text>
        <TextInput onChange={agregar} onInput={agregar} style={styles.input} placeholder='Comentarios' keyboardType='default'/>
        <TouchableOpacity style={styles.contactarButton} onPress={mostrarInput}>
          <Text style={styles.buttonText}>Contactar</Text>
        </TouchableOpacity>
        <Text style={styles.texto1}>{p}</Text>
        <Pressable onPress={verPerfil} style={({ pressed }) => [
        styles.verPerfil, { backgroundColor: pressed ? '#444' : '#1c1c1c' } ]}>
          <Text style={styles.buttonText}>Ver Perfil</Text>
          </Pressable>
        </View>
      </SafeAreaView>          
      <StatusBar style='light'/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    margin: 3
  },

  FotoPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  texto1: {
    margin: 2,
    fontSize: 20,
    fontFamily: 'inherit',
    fontWeight: 600
  },

  texto2: {
    margin: 2,
    fontSize: 18,
    fontFamily: 'inherit',
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    width: 200,
    height: 30,
    borderRadius: 10,
    margin: 10,
    fontSize: 15,
    padding: 2,
  },

  contactarButton: {
    backgroundColor: '#1A3E77',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    margin: 3
  },

  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'sans-serif'
  },

  verPerfil: {
    width: 125,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    margin: 2
  },

  
});
