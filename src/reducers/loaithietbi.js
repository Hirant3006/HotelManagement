import update from "immutability-helper";

import {
    GET_LIST_LOAITHIETBI_REQUEST,
    GET_LIST_LOAITHIETBI_SUCCESS,
    GET_LIST_LOAITHIETBI_FAILURE,
    ADD_LOAITHIETBI_REQUEST,
    ADD_LOAITHIETBI_SUCCESS,
    ADD_LOAITHIETBI_FAILURE,
    FIND_LOAITHIETBI_THEO_ID_REQUEST,
    FIND_LOAITHIETBI_THEO_ID_SUCCESS,
    FIND_LOAITHIETBI_THEO_ID_FAILURE,
    DELETE_LOAITHIETBI_REQUEST,
    DELETE_LOAITHIETBI_SUCCESS,
    DELETE_LOAITHIETBI_FAILURE,
    UPDATE_LOAITHIETBI_REQUEST,
    UPDATE_LOAITHIETBI_SUCCESS,
    UPDATE_LOAITHIETBI_FAILURE
} from "../actions/contstants";

const initialState = {
  loaithietbi: {
    listLoaiTB_act: [],
    isFetching: false
  },
  addloaiTB: {
    isFetching: false
  },
  loaiTBtheoid: {
    loaiTB: null,
    isFetching: false
  },
  deleteloaiTB: {
    isFetching: false
  },
  updateloaiTB: {
    isFetching: false
  },
  error: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_LOAITHIETBI_REQUEST:
      return update(state, {
        loaithietbi: {
          isFetching: { $set: true }
        }
      });
    case GET_LIST_LOAITHIETBI_SUCCESS:
      return update(state, {
        loaithietbi: {
          listLoaiTB_act: { $set: action.listLoaiTB_act },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case GET_LIST_LOAITHIETBI_FAILURE:
      return update(state, {
        loaithietbi: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case ADD_LOAITHIETBI_REQUEST:
      return update(state, {
        addloaiTB: {
          isFetching: { $set: true }
        }
      });
    case ADD_LOAITHIETBI_SUCCESS:
      return update(state, {
        addloaiTB: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case ADD_LOAITHIETBI_FAILURE:
      return update(state, {
        addloaiTB: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case FIND_LOAITHIETBI_THEO_ID_REQUEST:
      return update(state, {
        loaiTBtheoid: {
          isFetching: { $set: true }
        }
      });
    case FIND_LOAITHIETBI_THEO_ID_SUCCESS:
      return update(state, {
        loaiTBtheoid: {
          loaiTB: { $set: action.loaiTBtheoid },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case FIND_LOAITHIETBI_THEO_ID_FAILURE:
      return update(state, {
        loaiTBtheoid: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case DELETE_LOAITHIETBI_REQUEST:
      return update(state, {
        deleteloaiTB: {
          isFetching: { $set: true }
        }
      });
    case DELETE_LOAITHIETBI_SUCCESS:
      return update(state, {
        deleteloaiTB: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case DELETE_LOAITHIETBI_FAILURE:
      return update(state, {
        deleteloaiTB: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
      case UPDATE_LOAITHIETBI_REQUEST:
      return update(state, {
        updateloaiTB: {
          isFetching: { $set: true }
        }
      });
    case UPDATE_LOAITHIETBI_SUCCESS:
      return update(state, {
        updateloaiTB: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case UPDATE_LOAITHIETBI_FAILURE:
      return update(state, {
        updateloaiTB: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    default:
      return state;
  }
}
