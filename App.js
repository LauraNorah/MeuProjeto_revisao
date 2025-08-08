import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/img/casual_dog.png')}
        style={{ width: 200, height: 200 }}
      />
      
      <Text>Ótimo dia!</Text>
      <Text>Como deseja acessar?</Text>

      <TouchableOpacity 
        style={{backgroundColor: 'green', padding: 10 }}
        onPress={() => alert('Você acessou.')}
      >
        <Image
          source={require('./assets/img/Google.png')}
          style={{ width: 20, height: 20 }}
        />

        <Text style={{ color: 'white' }}>Como deseja acessar?</Text>
      </TouchableOpacity >

      <TouchableOpacity 
        style={{backgroundColor: 'white', borderColor: 'green', borderWidth: 2, borderradius: 8, width:350, height:60, margin: 30, justifyContent: 'center', alignItems: 'center'}}
        onPress={() => alert('outras opções.')}>
        <Text style={{ color: 'black' }}>Outras opções</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
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
