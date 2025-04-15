import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const time = {
  nome: 'House ',
  escudo: 'https://i.pinimg.com/736x/cf/4b/3e/cf4b3ebca031001cd203a7afde134dc2.jpg',
};

const EscudoScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">{time.nome}</Text>
      <Image source={{ uri: time.escudo }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100,
  },
});

export default EscudoScreen;
