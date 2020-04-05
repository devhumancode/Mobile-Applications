import React, { Component } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';

import { TabNavigator } from 'react-navigation';

import Colors from '../constants/colors';

export default class Pages extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <SimpleAppNavigator/>
        )
    }
}
const SimpleAppNavigator = TabNavigator({
    page1: {screen: FirstPage},
    page2: {screen: SecondPage},
    page3: {screen: ThirdPage},
    page4: {screen: FourthPage},
    page5: {screen: FifthPage},
},
{
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.mainText,
      inactiveTintColor: Colors.accentText,
      style: {
        backgroundColor: Colors.main,
        borderTopWidth: 3,
        borderTopColor: 'white',
      },
      labelStyle: {
        fontSize: 13,
        fontWeight: 'bold',
      },
    },
     initialRouteName: 'page1',
     swipeEnabled: true,
     animationEnabled: true,
     lazy: false,
     tabBarPosition:'bottom',
 },
 
 );
