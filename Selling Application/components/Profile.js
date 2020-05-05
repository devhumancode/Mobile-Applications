import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Alert, Header } from 'react-native';
export default class Profile extends React.Component {
  menu_options= {
    options: [
      {
        id: 0,
        name: 'Statistics',
        directory: 'Statistics',
      },
      {
        id: 1,
        name: 'Present items',
        directory: 'Items',
      },
      {
        id: 2,
        name: 'Sold items',
        directory: 'Sold',
      },
      {
        id:3,
        name: 'Items for sale',
        directory: 'Forsale',
      },
      {
        id:4,
        name: 'Profile settings',
        directory: 'Settings',
      },
    ]
  }
  render() {
    let picture = {
      uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/36756872_635198060176230_2770257539462332416_n.jpg?_nc_cat=101&_nc_ht=scontent-lht6-1.xx&oh=bf4580daf3f3e77714cd0089d15f9d4d&oe=5CC049F1'
      };
    return (
      <ImageBackground source={require('../images/background.jpg')}
      style={{width:'100%', bottom:0}}>
      <View style= {styles.container}>
        <View style={styles.box}>
          <View style={styles.reputation}>
            <Text style={styles.side_text}> +1 Rep</Text>
          </View>
        </View>
        <View style={styles.box2}>
          <View style={styles.reputation}>
            <Text style={styles.side_text}> 6 Rev</Text>
          </View>
        </View>
        <Text style= {styles.text}> Human Code </Text>
        <View style={styles.hairline} />
        <View style= {styles.img_container}>
          <Image source={picture} style={{width:150, height:150, borderWidth:2, borderColor: 'white'}}/>
        </View>
        <View style= {styles.menu}>
          {
            this.menu_options.options.map((item, index) =>
            (
              <View style={styles.button_box}>
                <TouchableOpacity
                style= {styles.buttons}
                key={item.id}
                onPress= {() => this.props.navigation.navigate( item.directory )}>
                  <Text style = {styles.buttons_text}>
                    {
                      item.name
                    }
                  </Text>
                </TouchableOpacity>
              </View>
            ))
          }
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
  img_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    marginTop: -50,
  },
  text: {
    color:'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize:20,
    marginBottom:10,
  },
  hairline: {
    backgroundColor: 'white',
    height: 2,
    width: '100%',
  },
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
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
  side_text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  reputation: {
    height:60,
    width:60,
    borderRadius: 50,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    opacity:0.8,
    position: 'absolute',
    height:70,
    width:70,
    borderColor:'white',
    top: 70,
    left: 30,
    backgroundColor:'transparent',
    borderWidth:2,
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    opacity:0.8,
    position: 'absolute',
    height:70,
    width:70,
    borderColor:'white',
    top: 150,
    left: 30,
    backgroundColor:'transparent',
    borderWidth:2,
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});
