import axios from "axios";
import keys from "../configs/keys";
import {
  GET_LIST_KHACHHANG_REQUEST,
  GET_LIST_KHACHHANG_SUCCESS,
  GET_LIST_KHACHHANG_FAILURE,
 
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


