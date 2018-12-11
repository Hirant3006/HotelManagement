import axios from "axios";
import keys from "../configs/keys";
import {
  GET_DATPHONG_BY_PHONG_REQUEST,
  GET_DATPHONG_BY_PHONG_SUCCESS,
  GET_DATPHONG_BY_PHONG_FAILURE
} from "./contstants";

export const getDatPhongByPhongRequest = MaPhong => async dispatch => {
  dispatch({ type: GET_DATPHONG_BY_PHONG_REQUEST });
  const res = await axios.get(keys.backend + "/datphong/phong/" + MaPhong);

  if ((res.status = 200))
    dispatch({
      type: GET_DATPHONG_BY_PHONG_SUCCESS,
      listdatphong: res.data
    });
  else
    dispatch({
      type: GET_DATPHONG_BY_PHONG_FAILURE
    });
};

// export const addDatPhongRequest = (NgayDen,NgayDi,DatCoc,KhachHang,) => async dispatch => {
//   dispatch({ type: GET_DATPHONG_BY_PHONG_REQUEST });
//   const res = await axios.get(keys.backend + "/datphong/phong/" + MaPhong);

//   if ((res.status = 200))
//     dispatch({
//       type: GET_DATPHONG_BY_PHONG_SUCCESS,
//       listdatphong: res.data
//     });
//   else
//     dispatch({
//       type: GET_DATPHONG_BY_PHONG_FAILURE
//     });
// };
