import React, { Component } from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaProvider>
      <View>
        <Header
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{
            text: 'My App',
            style: {color: '#fff', fontFamily: 'Noteworthy'},
          }}
          rightComponent={{icon: 'home', color: '#fff'}}
        />

        <Image source={require('../pics/logo.png')} />
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Screen2")}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Screen3")}>
          <Text>SignUp</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaProvider>
    );
  }
}
