import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyBVZScEFC0ZLF_xlb3Y1rBztU_8D_4pa9Q',
    authDomain: 'authentication-da392.firebaseapp.com',
    databaseURL: 'https://authentication-da392.firebaseio.com',
    storageBucket: 'authentication-da392.appspot.com',
    messagingSenderId: '486149762382'
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

// const styles = {
//   btnStyle: {
//     marginTop: 200
//   }
// };

export default App;
