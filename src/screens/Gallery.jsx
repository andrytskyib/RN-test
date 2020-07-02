import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import GalleryItem from "../components/GalleryItem";
import {selectGallery} from "../store/gallery/selectors";
import {FlatList, TouchableOpacity} from "react-native";
import {fetchGallery} from "../store/gallery/actions";

const Gallery = ({navigation}) => {
    const dispatch = useDispatch();

    const gallery = useSelector(selectGallery)

    useEffect(() => {
        dispatch(fetchGallery())
    }, [
        dispatch
    ])

    return (
        <FlatList
            data={gallery}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Gallery Photo', {photo: item.urls.regular})}>
                    <GalleryItem
                        item={item}
                    />
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default Gallery;