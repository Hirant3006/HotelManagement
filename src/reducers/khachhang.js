import update from "immutability-helper";

import {
  GET_LIST_KHACHHANG_REQUEST,
  GET_LIST_KHACHHANG_SUCCESS,
  GET_LIST_KHACHHANG_FAILURE,

  ADD_KHACHHANG_REQUEST ,
  ADD_KHACHHANG_SUCCESS ,
  ADD_KHACHHANG_FAILURE ,
  
  ADD_LOAIKHACHHANG_REQUEST,
  ADD_LOAIKHACHHANG_SUCCESS,
  ADD_LOAIKHACHHANG_FAILURE,

  FIND_LOAIKHACHHANG_REQUEST,
  FIND_LOAIKHACHHANG_SUCCESS,
  FIND_LOAIKHACHHANG_FAILURE ,

  DELETE_LOAIKHACHHANG_REQUEST ,
  DELETE_LOAIKHACHHANG_SUCCESS,
  DELETE_LOAIKHACHHANG_FAILURE ,

  UPDATE_LOAIKHACHHANG_REQUEST ,
  UPDATE_LOAIKHACHHANG_SUCCESS ,
  UPDATE_LOAIKHACHHANG_FAILURE ,
} from "../actions/contstants";

const initialState = {
  khachhang: {
    listKhachhang: [],
    isFetching: false
  },
  addkhachhang: {
    isFetching: false
  },
  addloaikhachhang: { 
    isFetching: false
  },
  
loaikhachhangtheoid: {
  loaikhachhang: null,
  isFetching: false
},
deleteloaikhachhang: {
  isFetching: false
},
updateloaikhachhang: {
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
          isFetching: { $set: true}
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

      case ADD_LOAIKHACHHANG_REQUEST:
      return update(state, {
        addloaikhachhang: {
          isFetching: { $set: true}
        }
      });
    case ADD_LOAIKHACHHANG_SUCCESS:
      return update(state, {
        addloaikhachhang: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case ADD_LOAIKHACHHANG_FAILURE:
      return update(state, {
        addloaikhachhang: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
   //================================//
   case FIND_LOAIKHACHHANG_REQUEST:
   return update(state, {
     loaikhachhangtheoid: {
       isFetching: { $set: true }
     }
   });
 case FIND_LOAIKHACHHANG_SUCCESS:
   return update(state, {
    loaikhachhangtheoid: {
      loaikhachhang: { $set: action.loaikhachhangtheoid },
       isFetching: { $set: false }
     },
     error: { $set: null }
   });
 case FIND_LOAIKHACHHANG_FAILURE:
   return update(state, {
    loaikhachhangtheoid: {
       isFetching: { $set: false }
     },
     error: { $set: action.error }
   });
 case DELETE_LOAIKHACHHANG_REQUEST:
   return update(state, {
     deleteloaikhachhang: {
       isFetching: { $set: true }
     }
   });
 case DELETE_LOAIKHACHHANG_SUCCESS:
   return update(state, {
     deleteloaikhachhang: {
       isFetching: { $set: false }
     },
     error: { $set: null }
   });
 case DELETE_LOAIKHACHHANG_FAILURE:
   return update(state, {
    deleteloaikhachhang: {
       isFetching: { $set: false }
     },
     error: { $set: action.error }
   });
   case UPDATE_LOAIKHACHHANG_REQUEST:
   return update(state, {
     updateloaikhachhang: {
       isFetching: { $set: true }
     }
   });
 case UPDATE_LOAIKHACHHANG_SUCCESS:
   return update(state, {
    updateloaikhachhang: {
       isFetching: { $set: false }
     },
     error: { $set: null }
   });
 case UPDATE_LOAIKHACHHANG_FAILURE:
   return update(state, {
    updateloaikhachhang: {
       isFetching: { $set: false }
     },
     error: { $set: action.error }
   });
    default:
      return state;
  }

 
}
