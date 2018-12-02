import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import loaiphong from './loaiphong';
import phong from './phong';
import khachhang from './khachhang'
import huhong from './huhong'
import loaikhachhang from './loaikhachhang'

export default combineReducers({
    form: formReducer,
    loaiphong,phong,khachhang, huhong,loaikhachhang
})