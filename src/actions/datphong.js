import axios from "axios";
import keys from "../configs/keys";
import { message } from "antd";
import {
  GET_DATPHONG_REQUEST,
  GET_DATPHONG_SUCCESS,
  GET_DATPHONG_FAILURE,
  GET_DATPHONG_ONLINE_REQUEST,
  GET_DATPHONG_ONLINE_SUCCESS,
  GET_DATPHONG_ONLINE_FAILURE,
  GET_DATPHONG_BY_PHONG_REQUEST,
  GET_DATPHONG_BY_PHONG_SUCCESS,
  GET_DATPHONG_BY_PHONG_FAILURE,
  GET_THANHTOAN_BY_DATPHONG_REQUEST,
  GET_THANHTOAN_BY_DATPHONG_SUCCESS,
  GET_THANHTOAN_BY_DATPHONG_FAILURE,
  ADD_DATPHONG_REQUEST,
  ADD_DATPHONG_SUCCESS,
  ADD_DATPHONG_FAILURE,
  ADD_DICHVU_BY_PHONG_REQUEST,
  ADD_DICHVU_BY_PHONG_SUCCESS,
  ADD_DICHVU_BY_PHONG_FAILURE,
  ADD_THANHTOAN_REQUEST,
  ADD_THANHTOAN_SUCCESS,
  ADD_THANHTOAN_FAILURE,
  CHECKOUT_DATPHONG_REQUEST,
  CHECKOUT_DATPHONG_SUCCESS,
  CHECKOUT_DATPHONG_FAILURE,
  CHECKIN_DATPHONG_REQUEST,
  CHECKIN_DATPHONG_SUCCESS,
  CHECKIN_DATPHONG_FAILURE,
  CONFIRM_BOOKING_REQUEST,
  CONFIRM_BOOKING_SUCCESS,
  CONFIRM_BOOKING_FAILURE
} from "./contstants";

export const comfirmBookingRequest = (id, DatCoc,onCancel,getDatPhongOnlineRequest,getDatPhongRequest) => async dispatch => {
  dispatch({ type: CONFIRM_BOOKING_REQUEST });
  const Step =2;
  const res = await axios.post(keys.backend + "/online2/" + id, {
    DatCoc,Step
  });

  if ((res.status = 201)) {
    dispatch({
      type: CONFIRM_BOOKING_SUCCESS
    });
    message.success("Xác nhận book online thành công");
    getDatPhongOnlineRequest();
    getDatPhongRequest();
    onCancel();
  } else
    dispatch({
      type: CONFIRM_BOOKING_FAILURE
    });
};

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

export const getDatPhongOnlineRequest = () => async dispatch => {
  dispatch({ type: GET_DATPHONG_ONLINE_REQUEST });
  const res = await axios.get(keys.backend + "/online");

  if ((res.status = 200)) {
    dispatch({
      type: GET_DATPHONG_ONLINE_SUCCESS,
      listdatphongonline: res.data
    });
  } else
    dispatch({
      type: GET_DATPHONG_ONLINE_FAILURE
    });
};

export const addDichVuByPhongRequest = (
  MaDatPhong,
  DichVu,
  SoLuong,
  onCancelDichVu,
  datphongbyphong,
  getDatPhongByPhongRequest
) => async dispatch => {
  dispatch({ type: ADD_DICHVU_BY_PHONG_REQUEST });
  const res = await axios.post(
    keys.backend + "/datphong/" + MaDatPhong + "/dichvu/",
    { DichVu, SoLuong }
  );

  if ((res.status = 201)) {
    dispatch({
      type: ADD_DICHVU_BY_PHONG_SUCCESS
    });
    message.success("Thêm dịch vụ thành công");
    getDatPhongByPhongRequest(datphongbyphong.data.Phong._id);
    onCancelDichVu();
  } else
    dispatch({
      type: ADD_DICHVU_BY_PHONG_FAILURE
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

export const checkinDatPhongRequest = (
  MaDatPhong,
  onCancel,
  getListPhongRequest,
  dataPhong,
) => async dispatch => {
  dispatch({ type: CHECKIN_DATPHONG_REQUEST });
  const res = await axios.post(
    keys.backend + "/datphong/" + MaDatPhong + "/checkin"
  );

  if ((res.status = 200)) {
    dispatch({
      type: CHECKIN_DATPHONG_SUCCESS
    });
    message.success("Phòng " + dataPhong.SoPhong + " check in thành công");
    // getListPhongRequest();
    onCancel();
  } else
    dispatch({
      type: CHECKIN_DATPHONG_FAILURE
    });
};

export const addThanhToanRequest = (
  MaDatPhong,
  TongTienThu,
  TienDichVu,
  TienPhong,
  TienDaTra,
  onCancelThanhToan,
  getListPhongRequest,
  onCancel,
  dataPhong
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
    message.success("Phòng " + dataPhong.SoPhong + " thanh toán thành công");
    // getListPhongRequest();
    onCancelThanhToan();
    onCancel();
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
    dispatch({
      type: ADD_DATPHONG_FAILURE
    });
    message.error(res.data.message);
  }
};
