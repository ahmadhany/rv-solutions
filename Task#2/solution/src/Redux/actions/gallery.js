import * as actionTypes from './actionTypes';

export const loadImages = (images) => {
    return {
        type: actionTypes.LOAD_IMAGES,
        payload: {
            images
        }
    }
}

export const setActiveImage = (index) => {
    return {
        type: actionTypes.SET_ACTIVE_IMAGE,
        payload: {
            index
        }
    }
}

export const setNextImage = () => {
    return {
        type: actionTypes.NEXT_IMAGE,
    }
}

export const setInActiveImage = () => {
    return {
        type: actionTypes.SET_INACTIVE_IMAGE
    }
}