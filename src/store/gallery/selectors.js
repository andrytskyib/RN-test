import {createSelector} from "reselect";

const selectGall = (state) => state.gallery;

export const selectGallery = createSelector(
    [selectGall],
    (gallery) => gallery.gallery
);