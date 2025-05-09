import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'; 

export default function App() {
  const imgExterna = {uri: 'https://i.pinimg.com/736x/58/45/33/584533963b52ef77f22f2e9d4c276c90.jpg'};
  return (
    <ImageBackground 
      source={imgExterna}
      resizeMethod= "cover"
      >
      <SafeAreaView style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
});
