import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Profile from './components/Profile.js'
import Home from './components/Home.js'
import Forsale from './components/Forsale.js'
import Items from './components/Items.js'
import Sold from './components/Sold.js'
import Statistics from './components/Statistics.js'
import Settings from './components/Settings.js'

const RootStack = createStackNavigator({
    Home: {
      screen: Home
    },
    Profile: {
      screen: Profile
    },
    Forsale: {
      screen: Forsale
    },
    Items: {
      screen: Items
    },
    Sold: {
      screen: Sold
    },
    Statistics: {
      screen: Statistics
    },
    Settings: {
      screen: Settings
    }
});
const Menu = createAppContainer(RootStack);
export default class App extends React.Component {

  render() {

    return (
      <Menu/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
