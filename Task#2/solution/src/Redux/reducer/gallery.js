import * as actionTypes from '../actions/actionTypes';
const initialState = {
    images: [],
    currentActiveImageIndex: 0,
    currentImage: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_IMAGES:
            return {
                ...state,
                images: action.payload.images
            };
        case actionTypes.SET_ACTIVE_IMAGE:
            return {
                ...state,
                currentActiveImageIndex: action.payload.index,
                currentImage: state.images[action.payload.index]
            }
        case actionTypes.NEXT_IMAGE:
            const i = (state.currentActiveImageIndex + 1) % state.images.length
            return {
                ...state,
                currentActiveImageIndex: i,
                currentImage: state.images[i]
            }
        case actionTypes.SET_INACTIVE_IMAGE:
            return {
                ...state,
                currentActiveImageIndex: -1,
                currentImage: ''
            }
        default: return state;
    }
};

export default reducer;