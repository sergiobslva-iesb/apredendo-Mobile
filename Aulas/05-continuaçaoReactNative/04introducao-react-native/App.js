import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function App() {
  const showAlert = () => {
    Alert.alert('Alerta', 'Bem-vindo ao início do meu projeto Mobile', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/44/78/0a/44780a1369e167bcde1c6e4052347166.jpg' }}
        style={{ height: 350, width: 250 }}
      />
      <Text>Projetinho mobile de Sarah</Text>
      <Text>Projetinho mobile de Sarah</Text>
      <Text>Projetinho mobile de Sarah</Text>
      <Text>Projetinho mobile de Sarah</Text>
      <Text>Projetinho mobile de Sarah</Text>
      <Text>Projetinho mobile de Sarah</Text>
      <Button title="Pressione-me" onPress={showAlert} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
