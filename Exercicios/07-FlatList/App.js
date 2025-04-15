import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { PaperProvider, Button, Snackbar, Card, Title, Paragraph, Divider } from 'react-native-paper';

export default function App() {
  const lista = [
    {
      id: '1',
      titulo: "Card 1",
      descricao: "lallalalalalla",
      imagem: "https://i.pinimg.com/736x/3a/1b/83/3a1b830773b5d9a8850ab098e96e0228.jpg"
    },
    {
      id: '2',
      titulo: "Card 2",
      descricao: "Outra descrição aqui",
      imagem: "https://i.pinimg.com/736x/3a/1b/83/3a1b830773b5d9a8850ab098e96e0228.jpg"
    },
    {
      id: '3',
      titulo: "Card 3",
      descricao: "Mais uma descrição aleatória",
      imagem: "https://i.pinimg.com/736x/3a/1b/83/3a1b830773b5d9a8850ab098e96e0228.jpg"
    }
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {lista.map((item) => (
          <Text key={item.id}>{item.titulo}</Text>
        ))}

        <FlatList
          data={lista}
          keyExtractor={(item) => item.id} 
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <Title>{item.titulo}</Title>
                <Paragraph>{item.descricao}</Paragraph>
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
