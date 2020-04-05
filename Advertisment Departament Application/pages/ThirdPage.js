import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HorizontalLine from '../components/horizontalLine';
import {LinearGradient} from 'expo-linear-gradient';
//Importing my personal created component that shows all advertisments that are under confirmed section in json file
import ConfirmedAdvertsList from '../components/confirmedAdvertsList';

export default class ConfirmedAdverts extends React.Component {
  //Giving a name in tab navigation
  static navigationOptions = {
    tabBarLabel: 'Confirmed',
  };

  render() {
    return (
      <LinearGradient style={styles.root} colors={['#F7BE81', '#F5DA81', '#81BEF7']}>
        <View style={{width: '80%', marginLeft: '10%', marginTop: 50,}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center',}}>
            Confirmed Adverts
          </Text>
          <HorizontalLine/>
        </View>
        <View style={styles.listContainer}>
          <ConfirmedAdvertsList wantedAdverts="confirmedAdverts"/>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});