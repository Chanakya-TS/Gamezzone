import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about'
import React from 'react'
import Header from '../shared/header'

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
            backgroundColor: 'orange',
            height: 80,
        },
        headerTintColor: '#333',
    }
});

export default aboutStack;