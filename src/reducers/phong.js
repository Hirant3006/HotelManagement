import update from "immutability-helper";

import {
  GET_LIST_LOAI_PHONG_REQUEST,
  GET_LIST_LOAI_PHONG_SUCCESS,
  GET_LIST_LOAI_PHONG_FAILURE,
  GET_PHONG_REQUEST,
  GET_PHONG_SUCCESS,
  GET_PHONG_FAILURE,
  GET_LIST_PHONG_REQUEST,
  GET_LIST_PHONG_SUCCESS,
  GET_LIST_PHONG_FAILURE,
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
  UPDATE_LOAI_PHONG_THEO_ID_FAILURE,
  ADD_PHONG_REQUEST,
  ADD_PHONG_SUCCESS,
  ADD_PHONG_FAILURE,
  FIND_PHONG_THEO_ID_REQUEST,
  FIND_PHONG_THEO_ID_SUCCESS,
  FIND_PHONG_THEO_ID_FAILURE,
  DELETE_PHONG_THEO_ID_REQUEST,
  DELETE_PHONG_THEO_ID_SUCCESS,
  DELETE_PHONG_THEO_ID_FAILURE,
  UPDATE_PHONG_THEO_ID_REQUEST,
  UPDATE_PHONG_THEO_ID_SUCCESS,
  UPDATE_PHONG_THEO_ID_FAILURE,
  PICK_CARD_PHONG
} from "../actions/contstants";

const initialState = {
  loaiphong: {
    listloaiPhong: [],
    isFetching: false
  },
  phongbyid: {
    phong: null,
    isFetching: false
  },
  phong: {
    listPhong: [],
    isFetching: false
  },
  addloaiphong: {
    isFetching: false
  },
  loaiphongtheoid: {
    loaiphong: null,
    isFetching: false
  },
  deleteloaiphong: {
    isFetching: false
  },
  updateloaiphong: {
    isFetching: false
  },
  addphong: {
    isFetching: false
  },
  phongtheoid: {
    phong: null,
    isFetching: false
  },
  deletephong: {
    isFetching: false
  },
  updatephong: {
    isFetching: false
  },
  dataPhong: null,
  error: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_LOAI_PHONG_REQUEST:
      return update(state, {
        loaiphong: {
          isFetching: { $set: true }
        }
      });
    case GET_LIST_LOAI_PHONG_SUCCESS:
      return update(state, {
        loaiphong: {
          listloaiPhong: { $set: action.listLoaiPhong },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case GET_LIST_LOAI_PHONG_FAILURE:
      return update(state, {
        loaiphong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case GET_PHONG_REQUEST:
      return update(state, {
        phongbyid: {
          isFetching: { $set: true }
        }
      });
    case GET_PHONG_SUCCESS:
      return update(state, {
        phongbyid: {
          phong: { $set: action.dataPhong },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case GET_PHONG_FAILURE:
      return update(state, {
        phongbyid: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case GET_LIST_PHONG_REQUEST: {
      console.log("Reducer");
      return update(state, {
        phong: {
          isFetching: { $set: true }
        }
      });
    }
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
    case ADD_LOAI_PHONG_REQUEST:
      return update(state, {
        addloaiphong: {
          isFetching: { $set: true }
        }
      });
    case ADD_LOAI_PHONG_SUCCESS:
      return update(state, {
        addloaiphong: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case ADD_LOAI_PHONG_FAILURE:
      return update(state, {
        addloaiphong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case FIND_LOAI_PHONG_THEO_ID_REQUEST:
      return update(state, {
        loaiphongtheoid: {
          isFetching: { $set: true }
        }
      });
    case FIND_LOAI_PHONG_THEO_ID_SUCCESS:
      return update(state, {
        loaiphongtheoid: {
          loaiphong: { $set: action.loaiphongtheoid },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case FIND_LOAI_PHONG_THEO_ID_FAILURE:
      return update(state, {
        loaiphongtheoid: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case DELETE_LOAI_PHONG_THEO_ID_REQUEST:
      return update(state, {
        deleteloaiphong: {
          isFetching: { $set: true }
        }
      });
    case DELETE_LOAI_PHONG_THEO_ID_SUCCESS:
      return update(state, {
        deleteloaiphong: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case DELETE_LOAI_PHONG_THEO_ID_FAILURE:
      return update(state, {
        deleteloaiphong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case UPDATE_LOAI_PHONG_THEO_ID_REQUEST:
      return update(state, {
        updateloaiphong: {
          isFetching: { $set: true }
        }
      });
    case UPDATE_LOAI_PHONG_THEO_ID_SUCCESS:
      return update(state, {
        updateloaiphong: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case UPDATE_LOAI_PHONG_THEO_ID_FAILURE:
      return update(state, {
        updateloaiphong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    //=========================================================//
    case ADD_PHONG_REQUEST:
      return update(state, {
        addphong: {
          isFetching: { $set: true }
        }
      });
    case ADD_PHONG_SUCCESS:
      return update(state, {
        addphong: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case ADD_PHONG_FAILURE:
      return update(state, {
        addphong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case FIND_PHONG_THEO_ID_REQUEST:
      return update(state, {
        phongtheoid: {
          isFetching: { $set: true }
        }
      });
    case FIND_PHONG_THEO_ID_SUCCESS:
      return update(state, {
        phongtheoid: {
          phong: { $set: action.loaiphongtheoid },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case FIND_PHONG_THEO_ID_FAILURE:
      return update(state, {
        phongtheoid: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case DELETE_PHONG_THEO_ID_REQUEST:
      return update(state, {
        deletephong: {
          isFetching: { $set: true }
        }
      });
    case DELETE_PHONG_THEO_ID_SUCCESS:
      return update(state, {
        deletephong: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case DELETE_PHONG_THEO_ID_FAILURE:
      return update(state, {
        deletephong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case UPDATE_PHONG_THEO_ID_REQUEST:
      return update(state, {
        updatephong: {
          isFetching: { $set: true }
        }
      });
    case UPDATE_PHONG_THEO_ID_SUCCESS:
      return update(state, {
        updatephong: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case UPDATE_PHONG_THEO_ID_FAILURE:
      return update(state, {
        updatephong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });

    case PICK_CARD_PHONG: {
      return update(state, {
        dataPhong: { $set: action.dataPhong }
      });
    }
    default:
      return state;
  }
}
