import axios from "axios";
import keys from "../configs/keys";
import { message } from "antd";
import {
  GET_LIST_LOAI_PHONG_REQUEST,
  GET_LIST_LOAI_PHONG_SUCCESS,
  GET_LIST_LOAI_PHONG_FAILURE,
  ADD_LOAI_PHONG_REQUEST,
  ADD_LOAI_PHONG_SUCCESS,
  ADD_LOAI_PHONG_FAILURE,
  FIND_LOAI_PHONG_THEO_ID_REQUEST,
  FIND_LOAI_PHONG_THEO_ID_SUCCESS,
  FIND_LOAI_PHONG_THEO_ID_FAILURE,
  DELETE_LOAI_PHONG_THEO_ID_REQUEST,
  DELETE_LOAI_PHONG_THEO_ID_SUCCESS,
  DELETE_LOAI_PHONG_THEO_ID_FAILURE,
  UPDATE_LOAI_PHONG_THEO_ID_REQUEST,
  UPDATE_LOAI_PHONG_THEO_ID_SUCCESS,
  UPDATE_LOAI_PHONG_THEO_ID_FAILURE,
  GET_LIST_PHONG_REQUEST,
  GET_LIST_PHONG_SUCCESS,
  GET_LIST_PHONG_FAILURE,
  ADD_PHONG_REQUEST,
  ADD_PHONG_SUCCESS,
  ADD_PHONG_FAILURE,
  FIND_PHONG_THEO_ID_REQUEST,
  FIND_PHONG_THEO_ID_SUCCESS,
  FIND_PHONG_THEO_ID_FAILURE,
  DELETE_PHONG_THEO_ID_REQUEST,
  DELETE_PHONG_THEO_ID_SUCCESS,
  DELETE_PHONG_THEO_ID_FAILURE,
  UPDATE_PHONG_THEO_ID_REQUEST,
  UPDATE_PHONG_THEO_ID_SUCCESS,
  UPDATE_PHONG_THEO_ID_FAILURE,
  PICK_CARD_PHONG
} from "./contstants";

export const getListLoaiPhongRequest = () => async dispatch => {
  dispatch({ type: GET_LIST_LOAI_PHONG_REQUEST });
  const res = await axios.get(keys.backend + "/loaiphong");

  if ((res.status = 200))
    dispatch({
      type: GET_LIST_LOAI_PHONG_SUCCESS,
      listLoaiPhong: res.data
    });
  else {
    dispatch({
      type: GET_LIST_LOAI_PHONG_FAILURE
    });
  }
};

export const getListPhongRequest = () => async dispatch => {
  dispatch({ type: GET_LIST_PHONG_REQUEST });
  const res = await axios.get(keys.backend + "/phong");

  if ((res.status = 200))
    dispatch({
      type: GET_LIST_PHONG_SUCCESS,
      listPhong: res.data
    });
  else {
    dispatch({
      type: GET_LIST_PHONG_FAILURE
    });
  }
};

export const addLoaiPhongRequest = (
  TenLoai,
  DonGia,
  onCancel,
  getListLoaiPhongRequest
) => async (dispatch, getState) => {
  dispatch({ type: ADD_LOAI_PHONG_REQUEST });
  const res = await axios.post(keys.backend + "/loaiphong", {
    TenLoai,
    DonGia
  });
  if ((res.status = 200)) {
    dispatch({
      type: ADD_LOAI_PHONG_SUCCESS
    });
    getListLoaiPhongRequest();
    message.success("Thêm loại phòng thành công");
    onCancel();
  } else {
    dispatch({
      type: ADD_LOAI_PHONG_FAILURE
    });
    message.error("Thêm loại phòng thất bại");
  }
};

export const findLoaiPhongTheoIdRequest = id => async (dispatch, getState) => {
  dispatch({ type: FIND_LOAI_PHONG_THEO_ID_REQUEST });
  const res = await axios.get(keys.backend + "/loaiphong/" + id);

  if ((res.status = 200))
    dispatch({
      type: FIND_LOAI_PHONG_THEO_ID_SUCCESS,
      loaiphongtheoid: res.data
    });
  else
    dispatch({
      type: FIND_LOAI_PHONG_THEO_ID_FAILURE
    });
};

export const deleteLoaiPhongTheoIdRequest = (
  id,
  getListLoaiPhongRequest
) => async (dispatch, getState) => {
  dispatch({ type: DELETE_LOAI_PHONG_THEO_ID_REQUEST });
  const res = await axios.delete(keys.backend + "/loaiphong/" + id);

  if ((res.status = 200)) {
    dispatch({
      type: DELETE_LOAI_PHONG_THEO_ID_SUCCESS
    });
    message.success("Xóa loại phòng thành công");
    getListLoaiPhongRequest();
  } else
    dispatch({
      type: DELETE_LOAI_PHONG_THEO_ID_FAILURE
    });
};

export const updateLoaiPhongTheoIdRequest = (
  _id,
  TenLoai,
  DonGia,
  onCancel
) => async dispatch => {
  dispatch({ type: UPDATE_LOAI_PHONG_THEO_ID_REQUEST });
  const res = await axios.put(keys.backend + "/loaiphong", {
    _id,
    TenLoai,
    DonGia
  });

  if ((res.status = 200)) {
    dispatch({
      type: UPDATE_LOAI_PHONG_THEO_ID_SUCCESS
    });
    dispatch({
      type: GET_LIST_LOAI_PHONG_SUCCESS,
      listLoaiPhong: res.data
    });
    message.success("SỬA loại phòng thành công");
    onCancel();
  } else
    dispatch({
      type: UPDATE_LOAI_PHONG_THEO_ID_FAILURE
    });
};

export function pickCardPhong(data) {
  return (dispatch, getState) => {
    const { phong } = getState();
    if (phong.dataPhong === data) {
      dispatch({
        type: PICK_CARD_PHONG,
        dataPhong: null
      });
    } else
      dispatch({
        type: PICK_CARD_PHONG,
        dataPhong: data
      });
  };
}
//============================================================================//
export const addPhongRequest = (
  Tang,
  TrangThai,
  SoPhong,
  LoaiPhong,
  ChiTietThietBi,
  onCancel,
  getListPhongRequest
) => async (dispatch, getState) => {
  dispatch({ type: ADD_PHONG_REQUEST });
  const res = await axios.post(keys.backend + "/phong", {
    Tang,
  TrangThai,
  SoPhong,
  LoaiPhong,
  ChiTietThietBi
  });
  if ((res.status = 200)) {
    dispatch({
      type: ADD_PHONG_SUCCESS
    });
    getListPhongRequest();
    message.success("Thêm  phòng thành công");
    onCancel();
  } else {
    dispatch({
      type: ADD_PHONG_FAILURE
    });
    message.error("Thêm  phòng thất bại");
  }
};

export const findPhongTheoIdRequest = id => async (dispatch, getState) => {
  dispatch({ type: FIND_PHONG_THEO_ID_REQUEST });
  const res = await axios.get(keys.backend + "/phong/" + id);

  if ((res.status = 200))
    dispatch({
      type: FIND_PHONG_THEO_ID_SUCCESS,
      phongtheoid: res.data
    });
  else
    dispatch({
      type: FIND_PHONG_THEO_ID_FAILURE
    });
};

export const deletePhongTheoIdRequest = (
  id,
  getListPhongRequest
) => async (dispatch, getState) => {
  dispatch({ type: DELETE_PHONG_THEO_ID_REQUEST });
  const res = await axios.delete(keys.backend + "/phong/" + id);

  if ((res.status = 200)) {
    dispatch({
      type: DELETE_PHONG_THEO_ID_SUCCESS
    });
    message.success("Xóa phòng thành công");
    getListPhongRequest();
  } else
    dispatch({
      type: DELETE_PHONG_THEO_ID_FAILURE
    });
};

export const updatePhongTheoIdRequest = (
  _id,
  Tang,
  TrangThai,
  SoPhong,
  LoaiPhong,
  ChiTietThietBi,
  onCancel
) => async dispatch => {
  dispatch({ type: UPDATE_PHONG_THEO_ID_REQUEST });
  const res = await axios.put(keys.backend + "/phong", {
    _id,
    Tang,
  TrangThai,
  SoPhong,
  LoaiPhong,
  ChiTietThietBi
  });

  if ((res.status = 200)) {
    dispatch({
      type: UPDATE_PHONG_THEO_ID_SUCCESS
    });
    dispatch({
      type: GET_LIST_PHONG_SUCCESS,
      listPhong: res.data
    });
    message.success("SỬA  phòng thành công");
    onCancel();
  } else
    dispatch({
      type: UPDATE_PHONG_THEO_ID_FAILURE
    });
};
