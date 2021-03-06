import { combineReducers } from 'redux';
import galleriesReducer from './gallery';


const rootReducer = combineReducers({
    gallery: galleriesReducer,
});

export default rootReducer;