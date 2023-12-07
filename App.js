import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 
  { StyleSheet, Text, View, Touchable,
    TouchableWithoutFeedback, Alert 
  }
 from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import Main from './src/components/Main.jsx';

export default function App() {
  console.log('Log test')
  return (
    <View style={styles.container}>
      <Main />
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
