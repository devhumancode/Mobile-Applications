import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

export class List extends React.Component {
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
      directory: '',
    },
    {
      id: 2,
      name: 'Sold items',
      directory: '',
    },
    {
      id:3,
      name: 'Items for sale',
      directory: '',
    },
    {
      id:4,
      name: 'Profile settings',
      directory: '',
    },
    {
      id:5,
      name: 'KAMILE SEXY AF',
      directory: '',
    }
  ]
}
render () {
  return (
    <View style= {styles.menu}>
      {
        this.menu_options.options.map((item, index) =>
        (
          <TouchableOpacity
          style= {styles.buttons}
          onPress= {() => this.props.navigation.navigate( 'Profile' )}>
            <Text style = {styles.buttons_text}>
              {
                item.name
              }
            </Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

}
export default List
const styles = StyleSheet.create({
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    width: 300,
    padding: 15,
    backgroundColor: 'black',
    marginTop: 10,
  },
  buttons_text: {
    color: 'white',
    textAlign: 'center',
  }
});
