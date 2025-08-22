import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';

export default function Acessar() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      
      <Text  style={{ fontSize: 40, fontStyle: 'bold', marginTop: 40}} >Acesse</Text>
      <Text style={{ fontSize: 15, fontStyle: 'bold', marginTop: 10, marginBottom: 40}} >com E-mail e senha</Text>

      <Text style={{ fontSize: 15, fontStyle: 'bold', marginTop: 10, marginBottom: 40}} >E-mail</Text>
      <TextInput
        placeholder="Digite seu E-mail"
        onChangeText={setEmail}
        value={email}
        style={{ borderWidth: 1, padding: 10 }}
      />

      <Text style={{ fontSize: 15, fontStyle: 'bold', marginTop: 10, marginBottom: 40}} >Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        onChangeText={setSenha}
        value={email}
        style={{ borderWidth: 1, padding: 10 }}
      />

      <TouchableOpacity 
        style={{backgroundColor: 'rgb(20, 200, 113)', borderColor: 'rgb(98, 218, 160)', borderWidth: 2, borderRadius: 8, width:350, height:55, margin: 5, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => alert('acessar')}>
        <Text style={{ color: 'white' }}>Acessar</Text>
      </TouchableOpacity >

      <TouchableOpacity 
        style={{backgroundColor: 'white', borderColor: 'rgb(98, 218, 160)', borderWidth: 2, borderRadius: 8, width:350, height:55, margin: 5, justifyContent: 'center', alignItems: 'center'}}
        onPress={() => alert('cadastar.')}>
        <Text style={{ color: 'black' }}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 15, fontStyle: 'bold', marginTop: 10, marginBottom: 40}} >Ou continue com</Text>

       <Image
          source={require('../../assets/img/Google.png')}
          style={{ width: 30, height: 30 }}
        />

        <Image
          source={require('../../assets/img/Facebook.png')}
          style={{ width: 30, height: 30 }}
        />

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