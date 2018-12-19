import axios from "axios";
import keys from "../configs/keys";
import { message } from "antd";
import {
  GET_DATPHONG_REQUEST,
  GET_DATPHONG_SUCCESS,
  GET_DATPHONG_FAILURE,
  GET_DATPHONG_BY_PHONG_REQUEST,
  GET_DATPHONG_BY_PHONG_SUCCESS,
  GET_DATPHONG_BY_PHONG_FAILURE,
  GET_THANHTOAN_BY_DATPHONG_REQUEST,
  GET_THANHTOAN_BY_DATPHONG_SUCCESS,
  GET_THANHTOAN_BY_DATPHONG_FAILURE,
  ADD_DATPHONG_REQUEST,
  ADD_DATPHONG_SUCCESS,
  ADD_DATPHONG_FAILURE,
  ADD_THANHTOAN_REQUEST,
  ADD_THANHTOAN_SUCCESS,
  ADD_THANHTOAN_FAILURE,
  CHECKOUT_DATPHONG_REQUEST,
  CHECKOUT_DATPHONG_SUCCESS,
  CHECKOUT_DATPHONG_FAILURE
} from "./contstants";

export const getDatPhongRequest = () => async dispatch => {
  dispatch({ type: GET_DATPHONG_REQUEST });
  const res = await axios.get(keys.backend + "/datphong");

  if ((res.status = 200)) {
    dispatch({
      type: GET_DATPHONG_SUCCESS,
      listdatphong: res.data
    });
  } else
    dispatch({
      type: GET_DATPHONG_FAILURE
    });
};

export const getThanhToanByDatPhongRequest = MaDatPhong => async dispatch => {
  dispatch({ type: GET_THANHTOAN_BY_DATPHONG_REQUEST });
  const res = await axios.get(
    keys.backend + "/datphong/" + MaDatPhong + "/thongtinthanhtoan"
  );

  if ((res.status = 200)) {
    dispatch({
      type: GET_THANHTOAN_BY_DATPHONG_SUCCESS,
      data: res.data
    });
  } else
    dispatch({
      type: GET_THANHTOAN_BY_DATPHONG_FAILURE
    });
};

export const checkoutDatPhongRequest = (
  MaDatPhong,
  onCancel,
  getListPhongRequest
) => async dispatch => {
  dispatch({ type: CHECKOUT_DATPHONG_REQUEST });
  const res = await axios.post(
    keys.backend + "/datphong/" + MaDatPhong + "/checkout"
  );

  if ((res.status = 200)) {
    dispatch({
      type: CHECKOUT_DATPHONG_SUCCESS
    });
    message.success("Checkout thành công");
    getListPhongRequest();
    onCancel();
  } else
    dispatch({
      type: CHECKOUT_DATPHONG_FAILURE
    });
};

export const addThanhToanRequest = (
  MaDatPhong,
  TongTienThu,
  TienDichVu,
  TienPhong,
  TienDaTra,
  onCancelThanhToan,
  getListPhongRequest
) => async dispatch => {
  dispatch({ type: ADD_THANHTOAN_REQUEST });
  const res = await axios.post(
    keys.backend + "/datphong/" + MaDatPhong + "/phieuthanhtoan",
    {
      TongTienThu,
      TienDichVu,
      TienPhong,
      TienDaTra
    }
  );

  if ((res.status = 200)) {
    dispatch({
      type: ADD_THANHTOAN_SUCCESS
    });
    message.success("Thanh toán thành công");
    getListPhongRequest();
    onCancelThanhToan();
  } else
    dispatch({
      type: ADD_THANHTOAN_FAILURE
    });
};

export const getDatPhongByPhongRequest = (
  MaPhong,
  getListPhongRequest
) => async dispatch => {
  dispatch({ type: GET_DATPHONG_BY_PHONG_REQUEST });
  const res = await axios.get(keys.backend + "/datphong/phong/" + MaPhong);

  if ((res.status = 200)) {
    dispatch({
      type: GET_DATPHONG_BY_PHONG_SUCCESS,
      listdatphong: res.data
    });
  } else
    dispatch({
      type: GET_DATPHONG_BY_PHONG_FAILURE
    });
};

export const addDatPhongRequest = (
  NgayDen,
  NgayDi,
  DatCoc,
  KhachHang,
  Phong,
  onCancel,
  getListPhongRequest
) => async dispatch => {
  dispatch({ type: ADD_DATPHONG_REQUEST });
  const res = await axios.post(keys.backend + "/datphong", {
    NgayDen,
    NgayDi,
    DatCoc,
    KhachHang,
    Phong
  });
  const MaPhong = Phong;
  console.log(typeof res.status);
  console.log(res);

  if (res.status === 200) {
    dispatch({
      type: ADD_DATPHONG_SUCCESS
    });
    message.success("Đặt phòng thành công");
    getListPhongRequest();
    getDatPhongByPhongRequest(MaPhong);
    onCancel();
  }
  // else if(res.status = 404) {
  //   console.log('Failed')
  //   console.log(res.data);
  //   dispatch({
  //     type: ADD_DATPHONG_FAILURE
  //   });
  //   message.error(res.data.message)
  // }
  else if (res.status === 201) {
    console.log("Failed 2");
    dispatch({
      type: ADD_DATPHONG_FAILURE
    });
    message.error(res.data.message);
  }
};
