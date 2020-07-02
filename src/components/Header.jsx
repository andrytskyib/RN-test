import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3949ab'
    },
    text: {
        color: '#fff',
        fontSize: 24
    }
})

export default Header;