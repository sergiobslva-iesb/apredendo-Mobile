import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const copa = {
    nome: "Copa do Mundo FIFA 2022",
    imagem: 'https://i.pinimg.com/236x/00/63/15/00631561f4895a630508c2b0d0bdb4d1.jpg',
    local: "Qatar",
    organizacao: "FIFA",
    mascote: "La'eeb",
    edicao: 22,
    ano: 2022,
    campeao: "Argentina",
    viceCampeao: "França",
    };

const CopaScreen = () => {
  return (
    <FlatList
      data={[copa]}
      keyExtractor={(item) => item.nome}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">{item.nome}</Text>
            <Text variant="bodyMedium">Local: {item.local}</Text>
            <Text variant="bodyMedium">organizacao: {item.organizacao}</Text>
            <Text variant="bodyMedium">mascote: {item.mascote}</Text>
            <Text variant="bodyMedium">edicao: {item.edicao}</Text>
            <Text variant="bodyMedium">ano: {item.ano}</Text>
            <Text variant="bodyMedium">campeao: {item.campeao}</Text>
            <Text variant="bodyMedium"> viceCampeao: {item.viceCampeao}</Text>
          </Card.Content>
          <Card.Cover source={{ uri: item.imagem }} />
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

export default CopaScreen;
