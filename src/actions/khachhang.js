import axios from "axios";
import keys from "../configs/keys";
import {
  GET_LIST_KHACHHANG_REQUEST,
  GET_LIST_KHACHHANG_SUCCESS,
  GET_LIST_KHACHHANG_FAILURE,
  ADD_KHACHHANG_REQUEST,
  ADD_KHACHHANG_SUCCESS,
  ADD_KHACHHANG_FAILURE,
} from "./contstants";

export const getListKhachHangRequest = () => async dispatch => {
  dispatch({ type: GET_LIST_KHACHHANG_REQUEST });
  const res = await axios.get(keys.backend + "/khachhangs");

  if ((res.status = 200))
    dispatch({
      type: GET_LIST_KHACHHANG_SUCCESS,
      listKhachhang: res.data
    });
  else
    dispatch({
      type: GET_LIST_KHACHHANG_FAILURE
    });
};

export const addKhachHangRequest = ( GioiTinh,HoTen,NgaySinh,DiaChi,QuocTich,SDT,Email,CMND,onCancel,getListKhachHangRequest) => async (dispatch,getState) => {
  dispatch({ type: ADD_KHACHHANG_REQUEST });
  // const { phong } = getState();
  // listloaiphong = phong.listloaiPhong;
  // listloaiphong.put({TenLoai:})
  const res = await axios.post(keys.backend + "/khachhangs", {
    GioiTinh,HoTen,NgaySinh,DiaChi,QuocTich,SDT,Email,CMND
  });
  if ((res.status = 200)){
    dispatch({
      type: ADD_KHACHHANG_SUCCESS
    });
    getListKhachHangRequest();
    onCancel();
  }
  else
    dispatch({
      type: ADD_KHACHHANG_FAILURE
    });
};
