import React, { Component } from 'react';
//Importing react components
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Button
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//Importing my own created component
import HorizontalLine from '../components/horizontalLine';


export default class ApplicationInfo extends Component {
    render() {
        //Getting a value from props
        let visible = this.props.isVisible;
        return (
            <Modal visible={visible} style={styles.root} animated="slide">
                <LinearGradient colors={['#F7BE81', '#F5DA81', '#81BEF7']} style={styles.root}>
                    <View style={styles.topText}>
                        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold',}}>
                            How my app works
                        </Text>
                        <HorizontalLine/>
                    </View>
                    <HorizontalLine/>
                    <Text style={{fontWeight: 'bold', color: 'grey', fontSize: 20,}}>
                        I've chosen this part:
                    </Text>
                    <HorizontalLine/>
                    <Text style={styles.mainText}>
                        The Editor checks and edits the adverts and sends them to the processing centre, 
                        where all the data concerning the content of the advertisement are stored 
                        this would normally consist of text and graphics.
                    </Text>
                    <HorizontalLine/>
                    <Text style={{fontWeight: 'bold', color: 'grey', fontSize: 20,}}>
                        What I've implemented:
                    </Text>
                    <HorizontalLine/>
                    <Text style={styles.mainText}>
                        • Program has a default username and password stored in json file to be checked with user input. 
                        By entering correct details you got here!{"\n \n"}
                        • In Notes page you can add/remove notes, they are stored in two-dimentional array, I use Modal to display appearing new note creation window. {"\n \n"}
                        • Page "pending" and "confirmed" read data from local JSON file and displays different categories of ads. {"\n \n"}
                        • Last "navi" page I used to display navigation that is focused on our university, let's say it is zoomed-in workplace of advertisment team staff... :) {"\n \n"}
                        • I use multiple re-usable components that I developed to keep my code neat. {"\n"}
                    </Text>
                    <View style={{position: "absolute", bottom: 40,}}>
                        <Button onPress={this.props.hide} title="⇩⇩CLOSE⇩⇩" color="red"/>
                    </View>
                </LinearGradient>   
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    topText: {
        fontSize: 20,
        textAlign: 'center',
        width: '80%',
        margin: '5%',
        position: 'absolute',
        top: 30,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    mainText: {
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 10,
        marginBottom: 40,
        fontWeight: 'bold',
        color: 'black',
    },
});
