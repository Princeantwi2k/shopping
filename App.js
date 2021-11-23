import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import Class from './assets/Component/Class';
import Herder from './assets/Header/Herder';
import Phonelist from './assets/House';

export default function App() {
  return (
    <View style={styles.container}>
   <Herder />
  <Phonelist />
    
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
