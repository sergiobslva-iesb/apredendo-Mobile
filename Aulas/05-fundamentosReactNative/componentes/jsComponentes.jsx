import { StyleSheet, Text, View } from 'react-native'
import React from 'react'




export default function jsComponentes() {
const nome ="gustavo"
const idade = 15 

function maiorDeIdade (){
    if (idade >= 18){
        return "maior de idade"
    }else {
        return "menor de idade "
    }
}



  return (
    <View>
      <Text>jsComponentes</Text>
      <Text>nome: {nome}</Text>
      <Text>idade + 40 : {idade + 40}</Text>
      <Text>Maior : {maiorDeIdade()}</Text>
      <Text>check: {idade>= 18 ? "18+" : "18-"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})