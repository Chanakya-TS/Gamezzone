import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
import Navigator from './routes/drawer'

const loadFonts = () => Font.loadAsync({
    'raleway-bold': require('./fonts/Raleway-Bold.ttf'),
    'raleway-reg' : require('./fonts/Raleway-Regular.ttf'),
    'raleway-thin': require('./fonts/Raleway-Thin.ttf')
});

export default function App() {
  const [fontLoaded, setFontsLoaded] = useState(false);

    if (fontLoaded){
        return (
        <Navigator />
        )
    } else {
        return (
            <AppLoading
                startAsync={loadFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        )
    }
}