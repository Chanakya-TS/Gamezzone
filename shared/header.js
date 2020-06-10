import {Text, StyleSheet, View} from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { navigation } from 'react-navigation'

export default function Header({title, navigation}) {
    const openNav = () => {
        navigation.openDrawer();
    }
    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} style={styles.icon} onPress={openNav} />
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('window').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'raleway-bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 6,
    },
})