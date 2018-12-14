import update from "immutability-helper";

import {
    GET_LIST_DICHVU_REQUEST,
    GET_LIST_DICHVU_SUCCESS,
    GET_LIST_DICHVU_FAILURE,
    ADD_DICHVU_REQUEST,
    ADD_DICHVU_SUCCESS,
    ADD_DICHVU_FAILURE,
} from "../actions/contstants";

const initialState = {
  dichvu: {
    listDV: [],
    isFetching: false
  },
  adddichvu: {
    isFetching: false
  },
  
  error: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_DICHVU_REQUEST:
      return update(state, {
       dichvu: {
          isFetching: { $set: true }
        }
      });
    case GET_LIST_DICHVU_SUCCESS:
      return update(state, {
        dichvu: {
          listDV: { $set: action.listDV },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case GET_LIST_DICHVU_FAILURE:
      return update(state, {
        dichvu: {
           isFetching: { $set: false }
          },
        error: { $set: action.error }
      });
    case ADD_DICHVU_REQUEST:
      return update(state, {
        adddichvu: {
          isFetching: { $set: true }
        }
      });
    case ADD_DICHVU_SUCCESS:
      return update(state, {
        adddichvu: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case ADD_DICHVU_FAILURE:
      return update(state, {
        adddichvu: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    
    default:
      return state;
  }
}
