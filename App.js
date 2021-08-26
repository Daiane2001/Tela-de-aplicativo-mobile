import { StatusBar } from 'expo-status-bar';
import React from 'react';//importanto o react
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';//importanto alguns componentes do react native

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
      >Aula de Programação 1</Text>
      <TextInput
        placeholder='Digite o seu nome'
        style={styles.textInput}
      >
      </TextInput>
      <TouchableOpacity
        style={styles.button}
      > 
        <Text style={styles.textButton} >Clique Aqui</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:30,
    marginBottom:50,
    color:'#fff',
  },
  textButton: {
    fontSize:20,
    color:'#fff',
  },
  textInput: {
    backgroundColor:'#fff',
    width:'80%',
    height:45,
    borderRadius:7,
    padding:10,
    color: '#222',
    fontSize:20,
    marginBottom:25,
  },
  button:{
    backgroundColor:'#35aaff',
    width:'80%',
    height:45,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center'
  }
});
