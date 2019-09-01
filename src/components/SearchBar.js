import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onSearch}) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" size={30} style={styles.iconStyle}/>
        <TextInput
            placeholder="Search"
            value={term} onChangeText={newTerm => onTermChange(newTerm)}
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={() => onSearch()}/>
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 48,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;
