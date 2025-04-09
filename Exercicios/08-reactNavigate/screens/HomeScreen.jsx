import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text,Card,Title,Paragraph } from 'react-native-paper'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>home!</Text>
      <Card>
        <Card.Content>
            <Title>titulo</Title>
            <Paragraph>lallalallallalalllalallalallalalallaalallalal</Paragraph>
        </Card.Content>
    <Card.Cover source={{uri:"https://i.pinimg.com/474x/79/2e/1e/792e1e398b6349dd3713eb74a5cf2bc2.jpg"}}/>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'fff',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
