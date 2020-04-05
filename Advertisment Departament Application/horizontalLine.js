import React, {Component} from 'react';
//Importing react components.
import {View, StyleSheet} from 'react-native';

//This component return a horizontal line, I used it for my UI design
export default class HorizontalLine extends Component {
    render () {
        return(
            <View style={styles.horizontalLine} />
        )
    }
}

const styles = StyleSheet.create ({
    horizontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 10,
    },
})