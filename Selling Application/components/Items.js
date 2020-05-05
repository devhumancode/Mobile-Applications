import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';
export default class Home extends React.Component {

  render() {
    return (
      <ImageBackground source={require('../images/background.jpg')}
      style={{width:'100%', bottom:0}}>
        <View style= {styles.container}>

            <View style={styles.main}>
              <Text style={styles.text}>
                14 Items in stock
              </Text>
            </View>


          <View style={styles.border}>
            <View style={styles.body}>
              <View style={styles.name}>
                <Text style={styles.text}>
                  Macbook PRO 2016 touchbar
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>top</Text>
                <Text>middle</Text>
                <Text>bottom</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>top</Text>
                <Text>middle</Text>
                <Text style={{marginLeft:50,}}>bottom</Text>
              </View>
            </View>
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
  },
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
  },
  main: {
    width:'100%',
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: '#12d0a2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    flex:1,
    flexDirection: 'row',
    opacity: 0.9,
    padding: 10,
    paddingRight: 0,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'left',
  },
  name: {
    width: '100%',
    justifyContent: 'center',
    color: 'brown',
  },
  text: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textleft: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    width: '80%',
  },
  textRight: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20%',
  },
  firstborder: {
    flex:0,
    flexDirection: 'row',
    opacity: 0.9,
    marginTop: 60,
    padding: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: 'white',
  },
  border: {
    flex:0,
    flexDirection: 'row',
    opacity: 0.9,
    marginTop: 20,
    padding: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: 'white',
  },
  body: {
    opacity: 0.9,
    padding: 10,
    width: '90%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
  }
});
