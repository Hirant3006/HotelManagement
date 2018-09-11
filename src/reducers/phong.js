import update from 'immutability-helper'

import {
  GET_LIST_PHONG_REQUEST,
  GET_LIST_PHONG_SUCCESS,
  GET_LIST_PHONG_FAILURE
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
    case GET_LIST_PHONG_REQUEST:
      return update(state, {
        phong: {
          isFetching: { $set: true }
        }
      });
    case GET_LIST_PHONG_SUCCESS:
      return update(state, {
        phong: {
          listPhong: { $set: action.listPhong },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case GET_LIST_PHONG_FAILURE:
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

