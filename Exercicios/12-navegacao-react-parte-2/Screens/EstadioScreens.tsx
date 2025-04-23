import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { PaperProvider, Button, Snackbar, Card, Title, Paragraph, Divider } from 'react-native-paper';

    const estadios = [
        {
        id: 1,
        nome: "Lusail Iconic Stadium",
        cidade: "Lusail",
        capacidade: 80000,
        imagem: "https://i.pinimg.com/1200x/80/3d/0f/803d0f07020dac1ac638e6dfcc7a0607.jpg"
        },
        {
        id: 2,
        nome: "Al Bayt Stadium",
        cidade: "Al Khor",
        capacidade: 60000,
        imagem: "https://i.pinimg.com/1200x/d9/87/a5/d987a5f490e32083c094839e78e97e67.jpg"
        },
        {
        id: 3,
        
        nome: "Stadium 974",
        cidade: "Doha",
        capacidade: 40000,
        imagem: "https://i.pinimg.com/1200x/63/47/7b/63477b146143956117fdeb6d06b7b2f6.jpg"
        },
        {
        id: 4,
        nome: "Al Thumama Stadium",
        cidade: "Al Thumama",
        capacidade: 40000,
        imagem: "https://i.pinimg.com/1200x/7c/d4/3f/7cd43f44ceb9a451011c6fb5b4c7b6ad.jpg"
        },
        {
        id: 5,
        nome: "Education City Stadium",
        cidade: "Al Rayyan",
        capacidade: 45350,
        imagem: "https://i.pinimg.com/1200x/91/be/c9/91bec9fa27d8ff1ec426260ba475a185.jpg"
        }
        ];

  const EstadioScreen =() =>{    

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {estadios.map((item) => (
          <Text key={item.id}>{item.nome}</Text>
        ))}

<FlatList
  data={estadios}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.nome}</Title>
        <Paragraph>{item.cidade}</Paragraph>
        <Paragraph>{item.capacidade}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: item.imagem }} />
    </Card>
  )}
/>
      </View>
    </PaperProvider>
  );

}  


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: 10,
  }
});

export default EstadioScreen;
