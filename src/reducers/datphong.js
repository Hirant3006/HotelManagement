import update from "immutability-helper";

import {
  GET_DATPHONG_BY_PHONG_REQUEST,
  GET_DATPHONG_BY_PHONG_SUCCESS,
  GET_DATPHONG_BY_PHONG_FAILURE,
  ADD_DATPHONG_REQUEST,
  ADD_DATPHONG_SUCCESS,
  ADD_DATPHONG_FAILURE
} from "../actions/contstants";

const initialState = {
  datphongbyphong: {
    data: null,
    isFetching: false
  },
  adddatphong: {
    isFetching: false
  },
  error: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATPHONG_BY_PHONG_REQUEST:
      return update(state, {
        datphongbyphong: {
          isFetching: { $set: true }
        }
      });
    case GET_DATPHONG_BY_PHONG_SUCCESS:
      return update(state, {
        datphongbyphong: {
          data: { $set: action.listdatphong },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case GET_DATPHONG_BY_PHONG_FAILURE:
      return update(state, {
        listdatphong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case ADD_DATPHONG_REQUEST:
      return update(state, {
         adddatphong: {
          isFetching: { $set: true }
        }
      });
    case ADD_DATPHONG_SUCCESS:
      return update(state, {
         adddatphong: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case ADD_DATPHONG_FAILURE:
      return update(state, {
         adddatphong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    default:
      return state;
  }
}