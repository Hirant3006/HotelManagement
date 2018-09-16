import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import phong from './phong';

export default combineReducers({
    form: formReducer,
    phong,
})