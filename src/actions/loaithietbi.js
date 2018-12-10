import axios from "axios";
import keys from "../configs/keys";
import {
  GET_LIST_LOAITHIETBI_REQUEST,
  GET_LIST_LOAITHIETBI_SUCCESS,
  GET_LIST_LOAITHIETBI_FAILURE,
  ADD_LOAITHIETBI_REQUEST,
  ADD_LOAITHIETBI_SUCCESS,
  ADD_LOAITHIETBI_FAILURE,
  FIND_LOAITHIETBI_THEO_ID_REQUEST,
  FIND_LOAITHIETBI_THEO_ID_SUCCESS,
  FIND_LOAITHIETBI_THEO_ID_FAILURE,
  DELETE_LOAITHIETBI_REQUEST,
  DELETE_LOAITHIETBI_SUCCESS,
  DELETE_LOAITHIETBI_FAILURE,
  UPDATE_LOAITHIETBI_REQUEST,
  UPDATE_LOAITHIETBI_SUCCESS,
  UPDATE_LOAITHIETBI_FAILURE
} from "./contstants";

export const getListLoaiTBRequest = () => async dispatch => {
  dispatch({ type: GET_LIST_LOAITHIETBI_REQUEST });
  const res = await axios.get(keys.backend + "/loaithietbi");

  if ((res.status = 200))
    dispatch({
      type: GET_LIST_LOAITHIETBI_SUCCESS,
      listLoaiTB_act: res.data
    });
  else
    dispatch({
      type: GET_LIST_LOAITHIETBI_FAILURE
    });
};

export const addLoaiTBRequest = (TenLoaiTB,onCancel,getListLoaiTBRequest) => async (dispatch,getState) => {
  dispatch({ type: ADD_LOAITHIETBI_REQUEST });
  const res = await axios.post(keys.backend + "/loaithietbi", {
    TenLoaiTB
  });
  if ((res.status = 200)){
    dispatch({
      type: ADD_LOAITHIETBI_SUCCESS
    });
    getListLoaiTBRequest();
    onCancel();
  }
  else
    dispatch({
      type: ADD_LOAITHIETBI_FAILURE
    });
};

export const findLoaiTBTheoIdRequest = id => async dispatch => {
  dispatch({ type: FIND_LOAITHIETBI_THEO_ID_REQUEST });
  const res = await axios.get(keys.backend + "/loaithietbi/" + id);

  if ((res.status = 200))
    dispatch({
      type: FIND_LOAITHIETBI_THEO_ID_SUCCESS,
      loaiTBtheoid: res.data
    });
  else
    dispatch({
      type: FIND_LOAITHIETBI_THEO_ID_FAILURE
    });
};

export const deleteLoaiTBRequest = id => async dispatch => {
  dispatch({ type: DELETE_LOAITHIETBI_REQUEST });
  const res = await axios.delete(keys.backend + "/loaithietbi/" + id);

  if ((res.status = 200))
    dispatch({
      type: DELETE_LOAITHIETBI_SUCCESS
    });
  else
    dispatch({
      type: DELETE_LOAITHIETBI_FAILURE
    });
};

export const updateLoaiTBRequest = (_id,TenLoaiTB) => async dispatch => {
  dispatch({ type: UPDATE_LOAITHIETBI_REQUEST });
  const res = await axios.put(keys.backend + "/loaithietbi", {
    _id,
    TenLoaiTB
  });

  if ((res.status = 200)){
    dispatch({
      type: UPDATE_LOAITHIETBI_SUCCESS
    });
    dispatch({
      type: GET_LIST_LOAITHIETBI_SUCCESS,
      listLoaiTB: res.data
    })
  }
  else
    dispatch({
      type: UPDATE_LOAITHIETBI_FAILURE
    });
};
