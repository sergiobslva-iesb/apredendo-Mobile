import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, ImageBackground, TextInput,ActivityIndicator } from 'react-native';

export default function App() {
  const showAlert = () => {
    Alert.alert('Alerta', 'Bem-vindo ao início do meu projeto Mobile', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://i.pinimg.com/736x/44/78/0a/44780a1369e167bcde1c6e4052347166.jpg' }} 
        resizeMode="cover" 
        style={styles.image}
      >
        <Text style={styles.text}>Projetinho mobile de Sarah</Text>
        <Text style={styles.text}>Projetinho mobile de Sarah</Text>
        <Text style={styles.text}>Projetinho mobile de Sarah</Text>
        <Text style={styles.text}>Projetinho mobile de Sarah</Text>
        <Text style={styles.text}>Projetinho mobile de Sarah</Text>
        <Text style={styles.text}>Projetinho mobile de Sarah</Text>
        <ActivityIndicator size="large" />
        <TextInput style={styles.input} placeholder="Coloque seu nome" placeholderTextColor="#fff" />
        <Button title="Pressione-me" onPress={showAlert} />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 5,
  },
});
