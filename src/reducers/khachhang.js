import update from "immutability-helper";

import {
  GET_LIST_KHACHHANG_REQUEST,
  GET_LIST_KHACHHANG_SUCCESS,
  GET_LIST_KHACHHANG_FAILURE,

  ADD_KHACHHANG_REQUEST ,
  ADD_KHACHHANG_SUCCESS ,
  ADD_KHACHHANG_FAILURE ,
  
} from "../actions/contstants";

const initialState = {
  khachhang: {
    listKhachhang: [],
    isFetching: false
  },
  addkhachhang: {
    isFetching: false
  },
  error: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_KHACHHANG_REQUEST:
      return update(state, {
        khachhang: {
          isFetching: { $set: true }
        }
      });
    case GET_LIST_KHACHHANG_SUCCESS:
      return update(state, {
        khachhang: {
          listKhachhang: { $set: action.listKhachhang },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case GET_LIST_KHACHHANG_FAILURE:
      return update(state, {
        listKhachhang: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    
      case ADD_KHACHHANG_REQUEST:
      return update(state, {
        addkhachhang: {
          isFetching: { $set: true }
        }
      });
    case ADD_KHACHHANG_SUCCESS:
      return update(state, {
        addkhachhang: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case ADD_KHACHHANG_FAILURE:
      return update(state, {
        addkhachhang: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });

    default:
      return state;
  }
}
