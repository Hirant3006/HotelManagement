import update from "immutability-helper";

import {
  GET_DATPHONG_BY_PHONG_REQUEST,
  GET_DATPHONG_BY_PHONG_SUCCESS,
  GET_DATPHONG_BY_PHONG_FAILURE,
  
} from "../actions/contstants";

const initialState = {
  datphongbyphong: {
    data: null,
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
    
    default:
      return state;
  }
}
