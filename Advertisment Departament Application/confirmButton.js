import React, {Component} from 'react';
//Importing react components
import {View, StyleSheet, Button, Text} from 'react-native';

//I created this component to display two buttons. They can be fully adjusted by props.
export default class ConfirmButton extends Component {
    render () {
        return(
            <View style={styles.buttonContainer}>
                <Button title="Hint" onPress={this.props.hint} color="red"/>
                <Button title={this.props.buttonTitle} onPress={this.props.action} color="green"/>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    buttonContainer: {
        marginVertical: 20,
        flexDirection: 'row',
    }
})