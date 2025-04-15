import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const titulos = [
  {
    nome: 'Drogon',
    Caracteristicas: 'Preto com marcas vermelhas, o maior e mais agressivo dos três',
  },
  {
    nome: 'Rhaegal',
    Caracteristicas: 'Verde com marcas de bronze, a montaria de Jon Snow',
  },
  {
    nome: 'Viserion',
    Caracteristicas: 'Branco cremoso com marcas de ouro, a montaria de Daenerys',
  },
 
];

const DragonsScreen = () => {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">{item.nome}</Text>
            <Text variant="bodyMedium">Caracteristicas: {item.Caracteristicas}</Text>
          </Card.Content>
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
});

export default DragonsScreen;
