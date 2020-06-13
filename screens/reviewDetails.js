import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card'

export default function ReviewDetails({ navigation }){
    const rating =  navigation.getParam('rating');

    const ratings = {
        '1' : require('../images/rating-1.png'),
        '2' : require('../images/rating-2.png'),
        '3' : require('../images/rating-3.png'),
        '4' : require('../images/rating-4.png'),
        '5' : require('../images/rating-5.png'),
    }
    return(
    <View style={globalStyles.container}>
        <Card>
        <Text style={globalStyles.textTitle}>{ navigation.getParam('title') }</Text>
        <Text style={globalStyles.paragraph}>{ navigation.getParam('body') }</Text>
        <View style={styles.image}>
            <Text>Gamezone rating: </Text>
            <Image source={ratings[rating]} />
        </View>
        </Card>
    </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        height: 40,
    },
})

