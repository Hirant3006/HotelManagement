import axios from "axios";
import {
  GET_LIST_PHONG_REQUEST,
  GET_LIST_PHONG_SUCCESS,
  GET_LIST_PHONG_FAILURE
} from "./contstants";

export const getListPhongRequest = () => async dispatch => {

  console.log("Start request");
  dispatch({ type: GET_LIST_PHONG_REQUEST });
  const res = await axios.get(
    "https://mighty-coast-18749.herokuapp.com/loaiphongs"
  );

    if (res.status=200)
  dispatch({
    type: GET_LIST_PHONG_SUCCESS,
    listPhong: res.data
  });
  else dispatch({
    type: GET_LIST_PHONG_FAILURE,
  });

};
