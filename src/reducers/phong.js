import update from "immutability-helper";

import {
  GET_LIST_LOAI_PHONG_REQUEST,
  GET_LIST_LOAI_PHONG_SUCCESS,
  GET_LIST_LOAI_PHONG_FAILURE,
  ADD_LOAI_PHONG_REQUEST,
  ADD_LOAI_PHONG_SUCCESS,
  ADD_LOAI_PHONG_FAILURE,
  FIND_LOAI_PHONG_THEO_ID_REQUEST,
  FIND_LOAI_PHONG_THEO_ID_SUCCESS,
  FIND_LOAI_PHONG_THEO_ID_FAILURE,
  DELETE_LOAI_PHONG_THEO_ID_REQUEST,
  DELETE_LOAI_PHONG_THEO_ID_SUCCESS,
  DELETE_LOAI_PHONG_THEO_ID_FAILURE,
  UPDATE_LOAI_PHONG_THEO_ID_REQUEST,
  UPDATE_LOAI_PHONG_THEO_ID_SUCCESS,
  UPDATE_LOAI_PHONG_THEO_ID_FAILURE
} from "../actions/contstants";

const initialState = {
  phong: {
    listPhong: [],
    isFetching: false
  },
 
  error: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_LOAI_PHONG_REQUEST:
      return update(state, {
        phong: {
          isFetching: { $set: true }
        }
      });
    case GET_LIST_LOAI_PHONG_SUCCESS:
      return update(state, {
        phong: {
          listPhong: { $set: action.listPhong },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case GET_LIST_LOAI_PHONG_FAILURE:
      return update(state, {
        phong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    
    default:
      return state;
  }
}
