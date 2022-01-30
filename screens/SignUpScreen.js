import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';


//let customFonts = {
//Noteworthy: require('../assets/Noteworthy-Bold.ttf'),
//};

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      emailID: '',
      password: '',
      error: ""
    };
  }

  signUpMethod=async()=>{
    var e=this.state.emailID;
    var p=this.state.password;
    if(this.state.emailID.trim() === ""){
      this.setState({error:"Email ID is required"})
    }
    else if(this.state.password.trim() === ""){
      this.setState({error:"Password is required"})
    }
    else if(this.state.emailID.trim() !== "" && this.state.password.trim() !== "")
    {
      await firebase.auth().createUserWithEmailAndPassword(e.trim(),p.trim())
      .then((cred)=>{
          console.log(cred);
          alert("signup successfull")
          this.props.navigation.navigate("Screen2")
      })
     .catch(function(error){
        console.log(error.message);
        alert(error.message)
     })
    } 
else{
this.setState({
  error:null
})
}
  }

  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{
              text: 'My App',
              style: { color: '#fff', fontFamily: 'Noteworthy' },
            }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <TextInput
            placeholder="Enter Your Email ID"
            onChangeText={(text1) => this.setState({ emailID: text1 })}
            value={this.state.emailID}
          />

          <TextInput
            placeholder="Enter Your Password"
            onChangeText={(text2) => this.setState({ password: text2 })}
            value={this.state.password}
          />

          <Text> ──────── or ──────── </Text>

          <TouchableOpacity onPress={() => 
          {
            this.signUpMethod();
          }
          }>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}
