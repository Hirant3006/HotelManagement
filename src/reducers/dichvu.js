import update from 'immutability-helper'

import {
  GET_LIST_DV_REQUEST,
  GET_LIST_DV_SUCCESS,
  GET_LIST_DV_FAILURE
} from "../actions/contstants";

const initialState = {
  dichvu: {
    listDV: [],
    isFetching: false
  },
  error: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_DV_REQUEST:
      return update(state, {
        dichvu: {
          isFetching: { $set: true }
        }
      });
    case GET_LIST_DV_SUCCESS:
      return update(state, {
        dichvu: {
          listDV: { $set: action.listDV },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case GET_LIST_DV_FAILURE:
      return update(state, {
        dichvu: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    default:
      return state;
  }
}
