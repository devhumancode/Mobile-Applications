import React from 'react';
//Importing react components
import { Text, View, StyleSheet } from 'react-native';
import HorizontalLine from '../components/horizontalLine';
import {LinearGradient} from 'expo-linear-gradient';
//Importing my personal component to show awaiting advertisments
import AdvertsList from '../components/advertsList';

export default class PendingAdverts extends React.Component {
  //Setting a name for this screen in tab navigation
  static navigationOptions = {
    tabBarLabel: 'Pending',
  };

  render() {
    return (
      <LinearGradient style={styles.root} colors={['#F7BE81', '#F5DA81', '#81BEF7']}>
        <View style={{width: '80%', marginLeft: '10%', marginTop: 50,}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center',}}>
            Adverts Waiting For Confirm
          </Text>
          <HorizontalLine/>
        </View>
        <View style={styles.listContainer}>
          <AdvertsList/>
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