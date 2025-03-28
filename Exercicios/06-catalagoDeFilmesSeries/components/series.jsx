import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Serie = ({ nome, ano, diretor, temporadas, capa }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: capa }} style={styles.image} />
      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.text}>Ano: {ano}</Text>
      <Text style={styles.text}>Diretor: {diretor}</Text>
      <Text style={styles.text}>Temporadas: {temporadas}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#555",
  },
});

export default Serie;


