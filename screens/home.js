import React, { useState } from 'react'
import { Text, View, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card';

export default function Home({ navigation }){
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