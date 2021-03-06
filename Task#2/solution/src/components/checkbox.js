import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setActiveImage, setInActiveImage} from '../Redux/actions/gallery';

const Checkbox = ({imageIndex, label}) => {
    const [isChecked, setChecked] = useState(false);
    const currentActiveImageIndex = useSelector((state) => state.gallery.currentActiveImageIndex);
    const dispatch = useDispatch()

    const onChange = (event) => {
        if (event.target.checked) {
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
        <label>{label}</label>
        <input checked={isChecked} onChange={onChange}  type="checkbox"/>
    </div>)
}

export default Checkbox;