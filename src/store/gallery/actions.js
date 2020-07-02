import {
    FETCH_GALLERY_SUCCESS,
    FETCH_GALLERY_ERROR,
    URL
} from "./consts";

const fetchGallerySuccess = (gallery) => {
    return {
        type: FETCH_GALLERY_SUCCESS,
        payload: gallery
    };
};

const fetchGalleryError = (errorMessage) => {
    return {
        type: FETCH_GALLERY_ERROR,
        payload: errorMessage
    };
};

export const fetchGallery = () => {
    return (dispatch) => {
        fetch(`${URL}&page=1&per_page=10`)
            .then(res => res.json())
            .then(data => dispatch(fetchGallerySuccess(data)))
            .catch((error) => {
                dispatch(fetchGalleryError(error.message));
            });
    };
};
