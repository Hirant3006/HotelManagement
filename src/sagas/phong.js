import { put, call, takeLatest, select } from "redux-saga/effects";
import { message } from "antd";
import { phong } from "../actions/contstants";
import { getListLoaiPhong } from "../apis/phong";

function* getListLoaiPhongSaga(action) {
  try {
    const response = yield call(getListLoaiPhong);
    if (response && response.status === 200) {
      const result = response.data.result;
      yield put({
        type: phong.GET_LIST_LOAI_PHONG_SUCCESS,
        payload: {
          result
        }
      });
    } else
      yield put({
        type: phong.GET_LIST_LOAI_PHONG_FAILURE
      });
  } catch (error) {
    console.error("Saga", error);
  }
}

export default function* watchPhong() {
  yield takeLatest(phong.GET_LIST_LOAI_PHONG_REQUEST, getListLoaiPhongSaga);
}
