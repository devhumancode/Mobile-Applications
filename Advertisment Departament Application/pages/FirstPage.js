import React, { Component } from 'react'; //It is clear enough...
import { StyleSheet, Text } from 'react-native'; //Importing default building blocks from react-native library
import Login from '../components/login'; //Importing two inputs for user input
import ConfirmButton from '../components/confirmButton'; //Importing button to confirm user input
import { LinearGradient } from 'expo-linear-gradient'; //Some cool style ;)
import ApplicationInfo from '../components/applicationInfo';

export default class FirstPage extends Component {
    constructor(props){
        super(props);
        
        //Creating default variables in a state that I will use through the page.
        this.state = {
          realUsername: "",
          realPassword: "",
          username: "",
          password: "",
          visible: false,
        }
    }
    //Giving this page a name in bottom navigation.
    static navigationOptions = {
        tabBarLabel: 'Log In',
    };

    //Using this function to store username input and update it every time user delete or enter new symbol.
    setUsername = (userInput) => {
        this.setState({username: userInput});
    }

    //Using this function to store password input and update it every time user delete or enter new symbol.
    setPassword = (userInput) => {
        this.setState({password: userInput});
    }

    //Using this function to display real username and password to the user
    giveHint = () => {
        alert("Username: " + this.state.realUsername + "\n Password: " + this.state.realPassword);
    }
    //This function procces user input and compares it with the ones saved in json file.
    confirmDetails = () => {
        if(this.state.username == this.state.realUsername && this.state.password == this.state.realPassword){
            this.changeVisibility(true)
        }
        else if(this.state.username == ""){
            alert("Username can't be empty!");
        }
        else if(this.state.password == "") {
            alert("Password can't be empty!");
        }
        else{
            alert("You have entered wrong details!");
        }
    }

    changeVisibility = action => {
        this.setState({visible: action});
    }
    //On load I read data from the json file and store them to the state variables.
    componentDidMount = () => {
    const loginDetails = require('../data/login.json');
    this.setState({
      isLoading: false,
      realPassword: loginDetails.password,
      realUsername: loginDetails.username,
    })
    }
    render() {
        return (
            <LinearGradient style={styles.root} colors={['#F7BE81', '#F5DA81', '#81BEF7']}> 
                <Text style={{color:'black', top: -30, fontWeight: 'bold',}}>
                    Please Log In to continue
                </Text>
                <Login firstInput={this.setUsername} secondInput={this.setPassword} />
                <ConfirmButton buttonTitle="Confirm" action={this.confirmDetails} hint={this.giveHint}/>
                <ApplicationInfo isVisible={this.state.visible} hide={this.changeVisibility.bind(false)}/>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
