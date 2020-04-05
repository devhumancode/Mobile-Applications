import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Modal,
    FlatList,
} from 'react-native';
//Importing needed components
import HorizontalLine from '../components/horizontalLine';
import { LinearGradient } from 'expo-linear-gradient';

export default class SecondPage extends Component {
    static navigationOptions = {
        tabBarLabel: 'Notes',
    };
    //I store notes in constructor under the "notes" array
    constructor(props){
        super(props)
        this.state = {
            noteText: '',
            notes: [{id: 1, text: 'Review IKEA advertisment request!'}],
            state: false,
        }
    }
        //Created a function to set text over to the constructor variable every time text changes.
        prepareNewNoteText = textFromClient => {
            this.setState({noteText: textFromClient});
        }

        //This function sets a new note to a "notes" array
        createNewNote = () => {
            if(this.state.noteText == "")
            {
                return alert("Your note is empty!");
            }
            var randomID = Math.random()
            this.setState(oldNotes => ({
                notes: [...oldNotes.notes, {id: randomID, text: this.state.noteText}]
            }))
    
            
            this.setState({state: false});
            this.setState({noteText: ''});
        }

        //I use this function to delete unwanted notes by their ID
        deleteNote = noteID => {
            this.setState(state => {
                const notes = state.notes.filter(note => note.id !== noteID);
                return {
                  notes,
                };
            });
        }

        //It is function to show or hide the modal that I used to develop new note creating screen
        modalDisplay = parameter => {
            this.setState({state: parameter});
        }

    render() {
        return (
            <LinearGradient colors={['#F7BE81', '#F5DA81', '#81BEF7']} style={styles.root}>
                <View style={styles.topText}>
                    <View style={{flexDirection:'row', justifyContent: 'center', alignContent: 'center'}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold',}}>
                                Notes
                            </Text>
                        </View>
                        <View>
                            <Button title="➕" color="green" onPress={this.modalDisplay.bind(this, true)}/>
                        </View>
                    </View>
                    <HorizontalLine/>
                </View>
                <Modal animated='slide' visible={this.state.state}> 
                    <View style={{width: '100%', height: '100%', backgroundColor: 'black',}}>
                        <View style={styles.inputBox}>
                            <TextInput onChangeText={this.prepareNewNoteText}  placeholder="your text" placeholderTextColor="white" style={styles.textInput}/>
                            <Button onPress={this.createNewNote} title="+" color="green" />
                        </View>
                        <Button onPress={this.modalDisplay.bind(this, false)} title="⇊ cancel ⇊" color="red"/>
                    </View>
                </Modal>
                <View style={styles.notesBox}>
                    <FlatList style={{height: '70%', marginTop: 20,}} data={this.state.notes} renderItem={notesArray => 
                        <View style = {styles.notesList}>
                            <Text style={{color: 'black', flex: 1, textAlign: 'center', fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', padding: 5,}}>
                                {notesArray.item.text}
                            </Text>
                            <Button title="X" color="red" onPress={this.deleteNote.bind(this, notesArray.item.id)} />
                        </View>
                    } keyExtractor={(item, index) => index.toString()}/>
                </View>
            </LinearGradient>   
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
    inputBox: {
        marginTop: 60,
        width: '80%',
        marginLeft: '10%',
        flexDirection: 'row',
    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        color: 'white',
        flex: 1,
        textAlign: 'center',
    },
    notesBox: {
        width: '100%',
    },
    notesList: {
        width: '100%',
        marginVertical: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
});
