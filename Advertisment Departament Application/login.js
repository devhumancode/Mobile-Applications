import React, { Component } from 'react';
//Importing react components.
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';

//This component returns two text inputs positioned in a column and takes the onchanchetext properties from props.
export default class Login extends Component {
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="username" onChangeText={this.props.firstInput}/>
                <TextInput style={styles.input} placeholder="password" onChangeText={this.props.secondInput}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '80%',
        marginTop: 20,
    },
    input: {
        width: '100%',
        color: 'black',
        textAlign: 'center',
        padding: 5,
        marginVertical: 10,
        fontSize: 18,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        fontWeight: 'bold',
    },
});