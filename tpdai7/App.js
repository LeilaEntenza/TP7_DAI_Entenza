import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native'; 
import { Pressable } from 'react-native-web';

export default function App() {
  const imgExterna = {uri: 'https://i.pinimg.com/736x/58/45/33/584533963b52ef77f22f2e9d4c276c90.jpg'};
  const [input, setInput] = useState('');
  const [p, setP] = useState("");
  const mostrarInput = () => {
    setP(input);
  }

  const agregar = (e) =>{
    setInput(e.target.value);    
    console.log(input);
  }
  return (
    <ImageBackground 
      source={imgExterna}
      style={{flex:1}}
      resizeMethod= "cover"
      >
      <SafeAreaView style={styles.container}>
        <Image source={{uri: 'https://i.pinimg.com/736x/7d/a8/d0/7da8d04ef76e488a0b6117b97efece9d.jpg'}} style={styles.FotoPerfil}/>
        <Text style={styles.texto1}>Leila Entenza Chiderski</Text>
        <Text style={styles.texto1}>Full Stack Developer</Text>
        <TextInput onChange={agregar} onInput={agregar} style={styles.input} placeholder='Comentarios' keyboardType='default'/>
        <TouchableOpacity style={styles.contactarButton} onPress={mostrarInput}>
          <Text >Contactar</Text>
        </TouchableOpacity>
        <Text style={styles.texto1}>{p}</Text>
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

  FotoPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  texto1: {
    margin: 2,
    color: 'white',
    fontSize: 25,
    fontFamily: 'fantasy',
  },

  input: {
    backgroundColor: 'white',
    width: 200,
    borderRadius: 15,
  },

  contactarButton: {
    backgroundColor: 'orange',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
