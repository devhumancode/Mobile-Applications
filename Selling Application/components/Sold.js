import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
export default class Home extends React.Component {

  render() {
    return (
      <View style= {styles.container}>
        <Text>Sold</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
