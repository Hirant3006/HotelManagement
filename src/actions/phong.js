import axios from "axios";
import keys from "../configs/keys";
import {
  GET_LIST_PHONG_REQUEST,
  GET_LIST_PHONG_SUCCESS,
  GET_LIST_PHONG_FAILURE,
  ADD_LOAI_PHONG_REQUEST,
  ADD_LOAI_PHONG_SUCCESS,
  ADD_LOAI_PHONG_FAILURE,
} from "./contstants";

export const getListPhongRequest = () => async dispatch => {

  dispatch({ type: GET_LIST_PHONG_REQUEST });
  const res = await axios.get(keys.backend+"/loaiphongs");

  if ((res.status = 200))
    dispatch({
      type: GET_LIST_PHONG_SUCCESS,
      listPhong: res.data
    });
  else
    dispatch({
      type: GET_LIST_PHONG_FAILURE
    });
};

export const addLoaiPhongRequest = () => async dispatch => {

  dispatch({ type: ADD_LOAI_PHONG_REQUEST });
  const res = await axios.post(keys.backend+"/loaiphong");

  if ((res.status = 200))
    dispatch({
      type: ADD_LOAI_PHONG_SUCCESS,
      listPhong: res.data
    });
  else
    dispatch({
      type: ADD_LOAI_PHONG_FAILURE
    });
};
