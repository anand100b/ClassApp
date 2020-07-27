import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
//custom components
import{ TextBox} from './components/TextBox';
import { ClickCounter } from './components/ClickCounter'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.greeting}>Hello World!</Text>
//       <Button title="Click me" color='blue'></Button>
//       <StatusBar style="auto" />
//       <TextBox color="green" size={24} text="Custom Component"/>
//       <TextBox color="purple" size={18} text="Custom text 2"/>
//       <ClickCounter/>
//       <ClickCounter/>
//     </View>
//   );
// }

export default class App extends Component {
  
  constructor() {
    this.state = {
      secret:0,
      guess:0,
      feedback: ''
    }
super()
  }
  setSecret(){
    let random = Math.round ( Math.random()*100 )
    this.setState( {secret:random} )
  }
  componentDidMount(){
    this.setSecret()
  }
  render () {
    return(
      <View style = {styles.container}>
        <TextBox color='blue' size={24} text='Guess my number?'/>
        <TextInput style ={styles.input} onChangeText={this.updateGuess} />
        <Button title="check Guess"/>
        <Text>{this.state.feedback}</Text>
      </View>
    )
  }
  // updateGuess(userInput) {
//this.setState({guess:userInput})
  // }
  updateGuess = (userInput)=>{
    this.setState({guess: userInput})
  }
  checkGuess = () =>{
    const userGuess = parseInt (this.state.guess)
    if(this.state.guess == this.state.secret){
      this.setState({feedback:"You gussed right!"})
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    color: 'red',
    fontSize: 24
  },
  
  input:{
    minWidth:200,
    padding:10,
    textAlign:'center'
  }
});
