import update from 'immutability-helper'

import ApiStatus from "../utils/apiStatus";
import { phong } from "../actions/constants";

const initialState = {
  data: {
    listLoaiPhong: []
  },
  getListLoaiPhong: {
    status: ApiStatus.default()
  }
};

export default function phongReducer(state = initialState, action) {
    switch (action.type) {
        case phong.GET_LIST_LOAI_PHONG_REQUEST: {
            return update(state, {
              getListLoaiPhong: {
                status: { $set: ApiStatus.fetching() }
              }
            })
          }
          case phong.GET_LIST_LOAI_PHONG_SUCCESS: {
            const { result } = action.payload
            return update(state, {
              getListLoaiPhong: {
                status: { $set: ApiStatus.success() }
              },
              data: {
                listLoaiPhong: { $set: result }
              }
            })
          }
          case phong.GET_LIST_LOAI_PHONG_FAILURE: {
            return update(state, {
              getListLoaiPhong: {
                status: { $set: ApiStatus.failure() }
              }
            })
          }
    }
}
