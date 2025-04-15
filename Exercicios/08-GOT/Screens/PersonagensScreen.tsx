import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const jogadores = [
  {
    nome: 'Daenerys Targaryen',
    idade: 24 ,
    imagem: 'https://i.pinimg.com/736x/76/fa/7e/76fa7e3e0dca057d53a283b262839f9a.jpg',
  },
  {
    nome: 'Jon Snow',
    idade: 25,
    imagem: 'https://i.pinimg.com/736x/00/0b/c3/000bc3917310a2efd1a1d7f53d3e86f4.jpg',
  },
  {
    nome: 'Rhaenyra targaryen',
    idade: 18,
    imagem: 'https://i.pinimg.com/736x/be/2a/26/be2a26bf8864c7d10bcc3a3c31870021.jpg',
  },
  {
    nome: 'Daemon Targaryen',
    idade: 26,
    imagem: 'https://i.pinimg.com/736x/b2/8d/e6/b28de6a562d2e7a9c02b8e4fc164dd5d.jpg',
  },
];

const PersonagensScreen = () => {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.nome}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <View style={styles.row}>
            <Image source={{ uri: item.imagem }} style={styles.img} />
            <View>
              <Text variant="titleMedium">{item.nome}</Text>
              <Text variant="bodyMedium">idade: {item.idade}</Text>
            </View>
          </View>
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
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
});

export default PersonagensScreen;
