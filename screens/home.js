import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal} from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation }){
    const [modalOpen, setModal] = useState(false)
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);
    const handlePress = (item) => {
        navigation.navigate('ReviewDetails', item)
    }
    return(
    <View style={globalStyles.container}>
        <Modal visible={modalOpen} style={styles.modalContent} animationType="slide">
         <MaterialIcons name='close' size={24} onPress={ () => setModal(false)} style={{...styles.modalToggle, ...styles.modalClose}} />
         <Text>This is the modal screen</Text>
        </Modal>
        <MaterialIcons name='add' size={24} onPress={ () => setModal(true) } style={styles.modalToggle}/>
        <FlatList 
            data={reviews}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
                <Card>
                    <Text style={globalStyles.textTitle}>{ item.title }</Text>
                </Card>
            </TouchableOpacity>
            )}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    },
})
