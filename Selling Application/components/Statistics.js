import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';
export default class Statistics extends React.Component {

  render() {
    return (
      <ImageBackground source={require('../images/background.jpg')}
      style={{width:'100%', bottom:0}}>
        <View style= {styles.container}>

            <View style={styles.main}>
              <Text style={styles.text}>
                +6000
              </Text>
            </View>

          <View style={styles.firstborder}>
            <View style={styles.block}>
              <Text style={styles.textleft}>
                Current money invested
              </Text>
              <Text style={styles.textright}>
                406
              </Text>
            </View>
          </View>

          <View style={styles.border}>
            <View style={styles.block}>
              <Text style={styles.textleft}>
                All money invested
              </Text>
              <Text style={styles.textright}>
                5320
              </Text>
            </View>
          </View>

          <View style={styles.border}>
            <View style={styles.block}>
              <Text style={styles.textleft}>
                Items sold
              </Text>
              <Text style={styles.textright}>
                20
              </Text>
            </View>
          </View>

          <View style={styles.border}>
            <View style={styles.block}>
              <Text style={styles.textleft}>
                Average income from a single item
              </Text>
              <Text style={styles.textright}>
                +132
              </Text>
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
    width:'60%',
    marginLeft: '20%',
    marginTop: 30,
    aspectRatio: 1,
    borderRadius: 50,
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
    width: '70%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'left',
  },
  text: {
    fontSize: 40,
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
  textright: {
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
  }
});
