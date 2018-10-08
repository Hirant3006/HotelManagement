import axios from "axios";
import keys from "../configs/keys";
import {
  GET_LIST_HUHONG_REQUEST,
  GET_LIST_HUHONG_SUCCESS,
  GET_LIST_HUHONG_FAILURE,
 
} from "./contstants";

export const getListHuHongRequest = () => async dispatch => {
  dispatch({ type: GET_LIST_HUHONG_REQUEST });
  const res = await axios.get(keys.backend + "/huhongs");

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


