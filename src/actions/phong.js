import axios from "axios";
import keys from "../configs/keys";
import {
  GET_LIST_PHONG_REQUEST,
  GET_LIST_PHONG_SUCCESS,
  GET_LIST_PHONG_FAILURE,
 
} from "./contstants";

export const getListPhongRequest = () => async dispatch => {
  dispatch({ type: GET_LIST_PHONG_REQUEST });
  const res = await axios.get(keys.backend + "/phongs");

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


