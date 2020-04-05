import React, {Component} from 'react';
//Importing react components
import {View, StyleSheet, ActivityIndicator, Text, Image, FlatList} from 'react-native';

export default class ConfirmedAdvertsList extends Component {
  //Constructor to store json data loading info.
    constructor(props) {
        super(props);
        this.state = { 
        isLoading: true,
        }
    }
    //Pulling json data before rendering
    componentWillMount = props => {
        const localAdverts = require('../data/database.json');
        this.setState({
        isLoading: false,
        dataSource: localAdverts.confirmedAdverts,
        })
    }

    render () {
        if (this.state.isLoading) {
            return (
              <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
              </View>
            )
          }
        return(
            <View style={styles.listContainer}>
          <FlatList
            style={styles.list}
            data={this.state.dataSource}
            renderItem={({ item }) => 
              <View style={styles.advertContainer}>
                <View style={styles.advertPicture}>
                  <Image source={{uri: item.image}} style={{width:'100%', height: '100%',}}/>
                </View>
                <View style={styles.advertText}>
                  <View style={styles.advertTitle}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16,}}>
                      {item.title}
                    </Text>
                  </View>
                  <View style={styles.advertInfo}>
                    <Text style={{padding: 5,}}>
                      {item.content}
                    </Text>
                  </View>
                </View>
              </View>}
            keyExtractor={({ id }, index) => id}
          />
        </View>
        )
    }
}

const styles = StyleSheet.create ({
  listContainer: {
  margin: 20,
  },
  list: {
    width: '100%',
    height: '90%',
  },
  advertContainer: {
    flexDirection: 'row',
    height: 100,
    marginVertical: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    overflow: 'hidden',
  },
  advertPicture: {
    width: '30%',
    height: '100%',
  },
  advertText: {
    flexDirection: 'column',
    width: '70%',
    justifyContent: 'center',
  },
  advertTitle: {
    width: '100%',
  },
  advertInfo: {
    width: '100%',
  },
})