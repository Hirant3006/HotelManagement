import update from "immutability-helper";

import {
  GET_LIST_HUHONG_REQUEST,
  GET_LIST_HUHONG_SUCCESS,
  GET_LIST_HUHONG_FAILURE,
  
} from "../actions/contstants";

const initialState = {
  huhong: {
    listHuHong: [],
    isFetching: false
  },
 
  error: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_HUHONG_REQUEST:
      return update(state, {
        huhong: {
          isFetching: { $set: true }
        }
      });
    case GET_LIST_HUHONG_SUCCESS:
      return update(state, {
        huhong: {
          listHuHong: { $set: action.listHuHong },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case GET_LIST_HUHONG_FAILURE:
      return update(state, {
        listHuHong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    
    default:
      return state;
  }
}
