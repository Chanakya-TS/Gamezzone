import {Text, StyleSheet, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({title, navigation}) {
    const openNav = () => {
        navigation.openDrawer();
    }
    return(
            <View style={styles.header}>
                <MaterialIcons name='menu' size={28} style={styles.icon} onPress={openNav} />
                <View style={styles.headerText}>
                    <Image source={require('../images/heart_logo.png')} style={styles.headerImage} />
                    <Text style={styles.title}>{title}</Text> 
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'raleway-bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        textAlign: 'center'
    },
    icon: {
        position: 'absolute',
        left: 6,
    },
    headerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginRight: 10,
    },
})