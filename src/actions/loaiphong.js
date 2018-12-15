import axios from "axios";
import keys from "../configs/keys";
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
  UPDATE_LOAI_PHONG_THEO_ID_FAILURE
} from "./contstants";

export const getListLoaiPhongRequest = () => async dispatch => {
  dispatch({ type: GET_LIST_LOAI_PHONG_REQUEST });
  const res = await axios.get(keys.backend + "/loaiphong");

  if ((res.status = 200))
    dispatch({
      type: GET_LIST_LOAI_PHONG_SUCCESS,
      listPhong: res.data
    });
  else
    dispatch({
      type: GET_LIST_LOAI_PHONG_FAILURE
    });
};

export const addLoaiPhongRequest = (TenLoai, DonGia,onCancel,getListLoaiPhongRequest) => async (dispatch,getState) => {
  dispatch({ type: ADD_LOAI_PHONG_REQUEST });
  const res = await axios.post(keys.backend + "/loaiphong", {
    TenLoai,
    DonGia
  });
  if ((res.status = 200)){
    dispatch({
      type: ADD_LOAI_PHONG_SUCCESS
    });
    getListLoaiPhongRequest();
    onCancel();
  }
  else
    dispatch({
      type: ADD_LOAI_PHONG_FAILURE
    });
};

export const findLoaiPhongTheoIdRequest = id => async dispatch => {
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

export const deleteLoaiPhongTheoIdRequest = id => async dispatch => {
  dispatch({ type: DELETE_LOAI_PHONG_THEO_ID_REQUEST });
  const res = await axios.delete(keys.backend + "/loaiphong/" + id);

  if ((res.status = 200))
    dispatch({
      type: DELETE_LOAI_PHONG_THEO_ID_SUCCESS
    });
  else
    dispatch({
      type: DELETE_LOAI_PHONG_THEO_ID_FAILURE
    });
};

export const updateLoaiPhongTheoIdRequest = (_id,TenLoai,DonGia) => async dispatch => {
  dispatch({ type: UPDATE_LOAI_PHONG_THEO_ID_REQUEST });
  const res = await axios.put(keys.backend + "/loaiphong", {
    _id,
    TenLoai,
    DonGia
  });

  if ((res.status = 200)){
    dispatch({
      type: UPDATE_LOAI_PHONG_THEO_ID_SUCCESS
    });
    dispatch({
      type: GET_LIST_LOAI_PHONG_SUCCESS,
      listPhong: res.data
    })
  }
  else
    dispatch({
      type: UPDATE_LOAI_PHONG_THEO_ID_FAILURE
    });
};
