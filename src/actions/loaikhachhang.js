import axios from "axios";
import keys from "../configs/keys";
import {
    GET_LIST_LOAIKHACHHANG_REQUEST,
    GET_LIST_LOAIKHACHHANG_SUCCESS,
    GET_LIST_LOAIKHACHHANG_FAILURE,

    ADD_LOAIKHACHHANG_REQUEST,
    ADD_LOAIKHACHHANG_SUCCESS,
    ADD_LOAIKHACHHANG_FAILURE,
 
    FIND_LOAIKHACHHANG_REQUEST,
    FIND_LOAIKHACHHANG_SUCCESS,
    FIND_LOAIKHACHHANG_FAILURE ,

    DELETE_LOAIKHACHHANG_REQUEST ,
    DELETE_LOAIKHACHHANG_SUCCESS,
    DELETE_LOAIKHACHHANG_FAILURE ,

    UPDATE_LOAIKHACHHANG_REQUEST ,
    UPDATE_LOAIKHACHHANG_SUCCESS ,
    UPDATE_LOAIKHACHHANG_FAILURE ,
} from "./contstants";

export const getListLoaiKhachHangRequest = () => async dispatch => {
  dispatch({ type: GET_LIST_LOAIKHACHHANG_REQUEST });
  const res = await axios.get(keys.backend + "/loaikhachhang");

  if ((res.status = 200))
    dispatch({
      type: GET_LIST_LOAIKHACHHANG_SUCCESS,
      listLoaiKH: res.data
    });
  else
    dispatch({
      type: GET_LIST_LOAIKHACHHANG_FAILURE
    });
};

export const addLoaiKHRequest = (TenLoaiKhach,onCancel,getListLoaiKhachHangRequest) => async (dispatch,getState) => {
  dispatch({ type: ADD_LOAIKHACHHANG_REQUEST });
    const res = await axios.post(keys.backend + "/loaikhachhang", {
      TenLoaiKhach
  });
  if ((res.status = 200)){
    dispatch({
      type:  ADD_LOAIKHACHHANG_SUCCESS
    });
    getListLoaiKhachHangRequest();
    onCancel();
  }
  else
    dispatch({
      type: ADD_LOAIKHACHHANG_FAILURE
    });
};

//---------------------------------------------------------------------------------//
export const findLoaiKHRequest = id => async dispatch => {
  dispatch({ type: FIND_LOAIKHACHHANG_REQUEST });
  const res = await axios.get(keys.backend + "/loaikhachhang/" + id);

  if ((res.status = 200))
    dispatch({
      type: FIND_LOAIKHACHHANG_SUCCESS,
      //----------------------------//
      loaiKHtheoid: res.data
    });
  else
    dispatch({
      type: FIND_LOAIKHACHHANG_FAILURE
    });
};

export const deleteLoaiKHRequest = id => async dispatch => {
  dispatch({ type: DELETE_LOAIKHACHHANG_REQUEST });
  const res = await axios.delete(keys.backend + "/loaikhachhang/" + id);

  if ((res.status = 200))
    dispatch({
      type: DELETE_LOAIKHACHHANG_SUCCESS
    });
  else
    dispatch({
      type: DELETE_LOAIKHACHHANG_FAILURE
    });
};

export const updateLoaiKHRequest = (_id,TenLoaiKhach) => async dispatch => {
  dispatch({ type: UPDATE_LOAIKHACHHANG_REQUEST });
  const res = await axios.put(keys.backend + "/loaikhachhang", {
    _id,
    TenLoaiKhach
    });

  if ((res.status = 200)){
    dispatch({
      type: UPDATE_LOAIKHACHHANG_SUCCESS
    });
    dispatch({
      type: GET_LIST_LOAIKHACHHANG_SUCCESS,
      listLoaiKH: res.data
    })
  }
  else
    dispatch({
      type: UPDATE_LOAIKHACHHANG_FAILURE
    });
};
