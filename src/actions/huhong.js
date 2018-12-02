import axios from "axios";
import keys from "../configs/keys";
import {
  GET_LIST_HUHONG_REQUEST,
  GET_LIST_HUHONG_SUCCESS,
  GET_LIST_HUHONG_FAILURE,
  ADD_HUHONG_REQUEST,
  ADD_HUHONG_SUCCESS,
  ADD_HUHONG_FAILURE,
} from "./contstants";

export const getListHuHongRequest = () => async dispatch => {
  dispatch({ type: GET_LIST_HUHONG_REQUEST });
  const res = await axios.get(keys.backend + "/huhong");

  if ((res.status = 200))
    dispatch({
      type: GET_LIST_HUHONG_SUCCESS,
      listHuHong: res.data
    });
  else
    dispatch({
      type: GET_LIST_HUHONG_FAILURE
    });
};


export const addHuHongRequest = (MaPhong, ChiTiet,DaSua,onCancel,getListLoaiPhongRequest) => async (dispatch,getState) => {
  dispatch({ type: ADD_HUHONG_REQUEST });
  // const { phong } = getState();
  // listloaiphong = phong.listloaiPhong;
  // listloaiphong.put({TenLoai:})
  const res = await axios.post(keys.backend + "/huhong", {
    MaPhong,
    ChiTiet,
    DaSua
  });
  if ((res.status = 200)){
    dispatch({
      type: ADD_HUHONG_SUCCESS
    });
    getListHuHongRequest();
    onCancel();
  }
  else
    dispatch({
      type: ADD_HUHONG_FAILURE
    });
};

