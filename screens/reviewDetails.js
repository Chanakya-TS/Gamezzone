import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from '../styles/global'

export default function ReviewDetails({ navigation }){
    return(
    <View style={globalStyles.container}>
        <Text style={globalStyles.textTitle}>{ navigation.getParam('title') }</Text>
        <Text style={globalStyles.paragraph}>{ navigation.getParam('body') }</Text>
        <Text style={globalStyles.textTitle}>{ navigation.getParam('rating') }</Text>
    </View>
    )
}
