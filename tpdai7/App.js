import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'; 

export default function App() {
  const imgExterna = {uri: 'https://i.pinimg.com/736x/58/45/33/584533963b52ef77f22f2e9d4c276c90.jpg'};
  return (
    <ImageBackground 
      source={imgExterna}
      style={{flex:1}}
      resizeMethod= "cover"
      >
      <SafeAreaView style={styles.container}>
        <Image source={{uri: 'https://i.pinimg.com/736x/7d/a8/d0/7da8d04ef76e488a0b6117b97efece9d.jpg'}} style={styles.FotoPerfil}/>
        <StatusBar style="auto" />
      </SafeAreaView>
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
});
