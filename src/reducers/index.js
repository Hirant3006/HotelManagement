<<<<<<< HEAD
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import loaiphong from './loaiphong';
import phong from './phong';
import khachhang from './khachhang'
import thietbi from './thietbi'
import loaikhachhang from './loaikhachhang'
import loaithietbi from './loaithietbi'

export default combineReducers({
    form: formReducer,
    loaiphong,phong,khachhang, thietbi,loaikhachhang,loaithietbi
})
=======
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loaiphong from "./loaiphong";
import phong from "./phong";
import khachhang from "./khachhang";
import huhong from "./huhong";
import datphong from "./datphong";

export default combineReducers({
  form: formReducer,
  loaiphong,
  phong,
  khachhang,
  huhong,
  datphong
});
>>>>>>> c0af9e70f6047743cb8cd00d72abef37b9f3877c
