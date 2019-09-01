import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [search, restaurants, errorMessage] = useRestaurants();

    const filterByPrice = (price) => {
        return restaurants.filter(r => r.price === price);
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchBar term={term} onTermChange={setTerm} onSearch={() => search(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantList restaurants={filterByPrice('$')} title="Cost Effective"/>
                <RestaurantList restaurants={filterByPrice('$$')} title="A Bit Pricier"/>
                <RestaurantList restaurants={filterByPrice('$$$')} title="Big Spender"/>
                <RestaurantList restaurants={filterByPrice('$$$$')} title="No Limits"/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
