import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyBVZScEFC0ZLF_xlb3Y1rBztU_8D_4pa9Q',
    authDomain: 'authentication-da392.firebaseapp.com',
    databaseURL: 'https://authentication-da392.firebaseio.com',
    storageBucket: 'authentication-da392.appspot.com',
    messagingSenderId: '486149762382'
  });
  }
  render(){
    return(
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
