import React from "react";
import {View,Text,StyleSheet} from "react-native"


export default function PrimeiroComponente (){
    return(
        <View>
            <Text style={styles.Text}>PrimeiroComponente</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    Text: {
      color: 'white',
      fontSize: 30
      
    },
  });


