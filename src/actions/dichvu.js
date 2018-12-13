import axios from "axios";
import keys from "../configs/keys";
import {
  GET_LIST_DICHVU_REQUEST,
  GET_LIST_DICHVU_SUCCESS,
  GET_LIST_DICHVU_FAILURE,
  ADD_DICHVU_REQUEST,
  ADD_DICHVU_SUCCESS,
  ADD_DICHVU_FAILURE,
} from "./contstants";

export const getListDVRequest = () => async dispatch => {
  dispatch({ type: GET_LIST_DICHVU_REQUEST });
  const res = await axios.get(keys.backend + "/dichvu");

  if ((res.status = 200))
    dispatch({
      type: GET_LIST_DICHVU_SUCCESS,
      listKhachhang: res.data
    });
  else
    dispatch({
      type: GET_LIST_DICHVU_FAILURE
    });
};

export const addDichVuRequest = ( GioiTinh,HoTen,CMND,NgaySinh,DiaChi,QuocTich,Email,onCancel,getListKhachHangRequest ) => async (dispatch,getState) => {
  dispatch({ type: ADD_DICHVU_REQUEST });
  // const { phong } = getState();
  // listloaiphong = phong.listloaiPhong;
  // listloaiphong.put({TenLoai:})
  const res = await axios.post(keys.backend + "/dichvu", {
    GioiTinh,HoTen,CMND,NgaySinh,DiaChi,QuocTich,Email
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
