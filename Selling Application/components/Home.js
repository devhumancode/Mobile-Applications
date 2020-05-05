import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default class Home extends React.Component {

  render() {
    let picture = {
      uri: '/images/logo.png'
      };
    return (
      <ImageBackground source={require('../images/background.jpg')}
      style={{width:'100%', bottom:0}}>
        <View style= {styles.container}>
          <Image source={require('../images/logo2.png')} style={{width:150, height:150, marginTop:100}}/>
          <Text style={styles.welcome}> MarkeTrack </Text>
          <View style={styles.button_box}>
            <TouchableOpacity
            style= {styles.buttons}
            onPress= {() => this.props.navigation.navigate('Profile')}>
              <Text style = {styles.buttons_text}>
                Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height:'100%',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 50,
  },
  button_box: {
    width: '80%',
    opacity: 0.9,
    padding: 5,
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: 'white',
    marginTop: 10,
  },
  buttons: {
    width: '100%',
    opacity: 0.9,
    padding: 10,
    backgroundColor: 'white',
  },
  buttons_text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});
