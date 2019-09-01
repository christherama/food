import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantDetail from './RestaurantDetails';

const RestaurantList = ({ title, restaurants }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            keyExtractor={r => r.id}
            renderItem={({ item }) => {
                return <RestaurantDetail restaurant={item}/>
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    title: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    }
});

export default RestaurantList;