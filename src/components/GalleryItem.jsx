import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const GalleryItem = ({item}) => {
    return (
        <View style={styles.galleryItem}>
            <Image style={styles.image} source={{uri: item.urls.small}}/>
            <View style={styles.text}>
                <Text>{item.user.username.toUpperCase()}</Text>
                <Text>{item["alt_description"]}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    galleryItem: {
        flexDirection: 'row'
    },
    image: {
        width: 80,
        height: 80,
        margin: 5
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10
    }
})

export default GalleryItem;