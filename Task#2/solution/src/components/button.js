import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setActiveImage, setInActiveImage} from '../Redux/actions/gallery';


const Button = ({imageIndex, label}) => {
    const [isChecked, setChecked] = useState(false);
    const currentActiveImageIndex = useSelector((state) => state.gallery.currentActiveImageIndex);
    const dispatch = useDispatch()

    const onClick = () => {
        if (!isChecked) {
            dispatch(setActiveImage(imageIndex))
        } else{
            dispatch(setInActiveImage())
        }
    }

    useEffect(() => {
        if(currentActiveImageIndex === imageIndex){
            setChecked(true)
        } else {
            setChecked(false)
        }
    }, [currentActiveImageIndex, imageIndex])

    return (<div>
        <input onClick={onClick} className={`btn ${isChecked ? 'active': ''}`} value={label} type="button"/>
    </div>)
}

export default Button;