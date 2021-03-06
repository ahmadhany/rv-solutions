import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setNextImage} from '../Redux/actions/gallery';

const Image = () => {
    const currentImage = useSelector((state) => state.gallery.currentImage)

    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(setNextImage())
    }

    return <div>
            <img onClick={onClick} alt='description' src={currentImage} />
        </div>
}

export default Image;