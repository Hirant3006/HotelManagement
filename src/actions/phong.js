import axios from "axios";
import {
  GET_LIST_PHONG_REQUEST,
  GET_LIST_PHONG_SUCCESS,
  GET_LIST_PHONG_FAILURE
} from "./contstants";

export const getListPhongRequest = () => async dispatch => {
  // const res = await axios.get("/api/current_user")
  // axios
  //   .get("https://mighty-coast-18749.herokuapp.com/phongs")
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(err => console.log(err));

  console.log("Start request");
  dispatch({ type: GET_LIST_PHONG_REQUEST });
  const res = await axios.get(
    "https://mighty-coast-18749.herokuapp.com/loaiphongs"
  );

  dispatch({
    type: GET_LIST_PHONG_SUCCESS,
    listPhong: res.data
  });
};
