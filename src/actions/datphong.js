import axios from "axios";
import keys from "../configs/keys";
import { message } from "antd";
import {
  GET_DATPHONG_BY_PHONG_REQUEST,
  GET_DATPHONG_BY_PHONG_SUCCESS,
  GET_DATPHONG_BY_PHONG_FAILURE,
  ADD_DATPHONG_REQUEST,
  ADD_DATPHONG_SUCCESS,
  ADD_DATPHONG_FAILURE,
} from "./contstants";

export const getDatPhongByPhongRequest = MaPhong => async dispatch => {
  dispatch({ type: GET_DATPHONG_BY_PHONG_REQUEST });
  const res = await axios.get(keys.backend + "/datphong/phong/" + MaPhong);

  if ((res.status = 200))
    dispatch({
      type: GET_DATPHONG_BY_PHONG_SUCCESS,
      listdatphong: res.data
    });
  else
    dispatch({
      type: GET_DATPHONG_BY_PHONG_FAILURE
    });
};

export const addDatPhongRequest = (NgayDen,NgayDi,DatCoc,KhachHang,Phong,onCancel) => async dispatch => {
  dispatch({ type: ADD_DATPHONG_REQUEST });
  const res = await axios.post(keys.backend + "/datphong",{NgayDen,NgayDi,DatCoc,KhachHang,Phong});

  if ((res.status = 200)){
    dispatch({
      type: ADD_DATPHONG_SUCCESS,
    });
    message.success("Đặt phòng thành công");
    // onCancel();
  }
  else 
  {
    dispatch({
      type: ADD_DATPHONG_FAILURE
    });
    message.error("Đặt phòng thất bại");

  }
};
