import React from 'react';
import {View, Image} from "react-native";

const GalleryPhoto = ({route}) => {
    const {photo} = route.params;
    return (
        <View>
            <Image style={{width: '100%', height: '100%'}} source={{uri: photo}}/>
        </View>
    )
}

export default GalleryPhoto;