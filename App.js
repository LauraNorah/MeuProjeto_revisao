import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/img/casual_dog.png')}
        style={{ width: 470, height: 380 }}
      />
      
      <Text  style={{ fontSize: 40, fontStyle: 'bold', marginTop: 40}} > Ótimo dia!</Text>
      <Text style={{ fontSize: 15, fontStyle: 'bold', marginTop: 10, marginBottom: 40}} >Como deseja acessar?</Text>

      <TouchableOpacity 
        style={{backgroundColor: 'rgb(20, 200, 113)', borderColor: 'rgb(98, 218, 160)', borderWidth: 2, borderradius: 8, width:350, height:55, margin: 5, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => alert('Você acessou.')}
      >
        <Image
          source={require('./assets/img/Google.png')}
          style={{ width: 30, height: 30 }}
        />

        <Text style={{ color: 'white' }}>Como deseja acessar?</Text>
      </TouchableOpacity >

      <TouchableOpacity 
        style={{backgroundColor: 'white', borderColor: 'rgb(98, 218, 160)', borderWidth: 2, borderradius: 8, width:350, height:55, margin: 5, justifyContent: 'center', alignItems: 'center'}}
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
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
