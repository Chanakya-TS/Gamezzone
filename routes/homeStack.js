import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home.js'
import ReviewDetails from '../screens/reviewDetails.js';
import Header from '../shared/header'
import React from 'react'
import { Image } from 'react-native'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle : () => <Header title="GameZone" navigation={navigation}/>,
                headerAlignTitle : 'center'
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title : 'Review details'
        }
     }
}

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 80,
        },
        headerTintColor: '#333',
        headerBackground: () => <Image source={require('../images/game_bg.png')} style={{height:'100%'}}/>,
    }
});

export default homeStack;