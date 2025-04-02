import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, Button, Snackbar,Card,Title, Paragraph, Divider } from 'react-native-paper';

export default function App() {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const lista =["uva","Maçã","banana"]

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Card> 
          <Card.Content> 
            <Title>One Piece</Title> 
            <Paragraph>Um anime com mais de mil ep</Paragraph> 
          </Card.Content> 
        </Card>; 
       <Text>uva</Text>
       <Divider/>
       <Text>Maçã</Text>
       <Divider/>


        <Button onPress={onToggleSnackBar}>
          {visible ? 'Hide' : 'Show'}
        </Button>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Undo',
            onPress: () => {
            },
          }}>
        aviso aviso aviso 
        </Snackbar>
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
});
