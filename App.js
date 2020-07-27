import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//custom components
import{ TextBox} from './components/TextBox';
import { ClickCounter } from './components/ClickCounter'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello World!</Text>
      <Button title="Click me" color='green'></Button>
      <StatusBar style="auto" />
      <TextBox color="green" size={24} text="Custom Component"/>
      <TextBox color="purple" size={18} text="Custom text 2"/>
      <ClickCounter/>
      <ClickCounter/>
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
  greeting: {
    color: 'red',
    fontSize: 24
  }
});
