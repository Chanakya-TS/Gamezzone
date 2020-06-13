import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about'
import React from 'react'
import Header from '../shared/header'
import { Image } from 'react-native'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle : () => <Header title="About GameZone" navigation={navigation}/>,
                headerAlignTitle : 'center'
            }
        }
     }
}

const aboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 80,
        },
        headerTintColor: '#333',
        headerBackground: () => <Image source={require('../images/game_bg.png')} style={{height:'100%'}}/>,
    }
});

export default aboutStack;