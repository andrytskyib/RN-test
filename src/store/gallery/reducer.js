import {
    FETCH_GALLERY_SUCCESS,
    FETCH_GALLERY_ERROR
} from "./consts";

const initialState = {
    gallery: [],
    errorMessage: ""
};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GALLERY_SUCCESS: {
            return {
                ...state,
                gallery: action.payload
            };
        }
        case FETCH_GALLERY_ERROR: {
            return {
                ...state,
                errorMessage: action.payload
            };
        }
        default:
            return state;
    }
};

export default galleryReducer;