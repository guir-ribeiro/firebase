import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import firebase from './src/firebaseconnection';

function App(){
  return(
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}> 
      <Text> Olá mundo!</Text>
    </View>
  )
}

export default App;
