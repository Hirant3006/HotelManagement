import axios from "axios";
import {
  GET_LIST_DV_REQUEST,
  GET_LIST_DV_SUCCESS,
  GET_LIST_DV_FAILURE
} from "./contstants";

export const getListDVRequest = () => async dispatch => {
  // const res = await axios.get("/api/current_user")
  // axios
  //   .get("https://mighty-coast-18749.herokuapp.com/phongs")
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(err => console.log(err));

  console.log("Start request");
  dispatch({ type: GET_LIST_DV_REQUEST });
  const res = await axios.get(
    "https://mighty-coast-18749.herokuapp.com/dichvus"
  );

    if (res.status=200)
  dispatch({
    type: GET_LIST_DV_SUCCESS,
    listDV: res.data
  });
  else dispatch({
    type: GET_LIST_DV_FAILURE,
  });

};
