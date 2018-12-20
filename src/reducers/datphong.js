import update from "immutability-helper";

import {
  GET_DATPHONG_REQUEST,
  GET_DATPHONG_SUCCESS,
  GET_DATPHONG_FAILURE,
  GET_DATPHONG_BY_PHONG_REQUEST,
  GET_DATPHONG_BY_PHONG_SUCCESS,
  GET_DATPHONG_BY_PHONG_FAILURE,
  ADD_DATPHONG_REQUEST,
  ADD_DATPHONG_SUCCESS,
  ADD_DATPHONG_FAILURE,
  GET_THANHTOAN_BY_DATPHONG_REQUEST,
  GET_THANHTOAN_BY_DATPHONG_SUCCESS,
  GET_THANHTOAN_BY_DATPHONG_FAILURE,
  ADD_THANHTOAN_REQUEST,
  ADD_THANHTOAN_SUCCESS,
  ADD_THANHTOAN_FAILURE,
  ADD_DICHVU_BY_PHONG_REQUEST,
  ADD_DICHVU_BY_PHONG_SUCCESS,
  ADD_DICHVU_BY_PHONG_FAILURE,
  CHECKOUT_DATPHONG_REQUEST,
  CHECKOUT_DATPHONG_SUCCESS,
  CHECKOUT_DATPHONG_FAILURE,
  CHECKIN_DATPHONG_REQUEST,
  CHECKIN_DATPHONG_SUCCESS,
  CHECKIN_DATPHONG_FAILURE
} from "../actions/contstants";

const initialState = {
  datphong: {
    data: null,
    isFetching: false
  },
  thanhtoanbydatphong: {
    data: null,
    isFetching: false
  },
  datphongbyphong: {
    data: null,
    isFetching: false
  },
  adddatphong: {
    isFetching: false
  },
  addthanhtoan: {
    isFetching: false
  },
  checkoutdatphong: {
    isFetching: false
  },
  checkindatphong: {
    isFetching: false
  },
  adddichvubyphong: {
    isFetching: false
  },
  error: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATPHONG_REQUEST:
      return update(state, {
        datphong: {
          isFetching: { $set: true }
        }
      });
    case GET_DATPHONG_SUCCESS:
      return update(state, {
        datphong: {
          data: { $set: action.listdatphong },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case GET_DATPHONG_FAILURE:
      return update(state, {
        datphong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
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
    case GET_THANHTOAN_BY_DATPHONG_REQUEST:
      return update(state, {
        thanhtoanbydatphong: {
          isFetching: { $set: true }
        }
      });
    case GET_THANHTOAN_BY_DATPHONG_SUCCESS:
      return update(state, {
        thanhtoanbydatphong: {
          data: { $set: action.data },
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case GET_THANHTOAN_BY_DATPHONG_FAILURE:
      return update(state, {
        thanhtoanbydatphong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case ADD_THANHTOAN_REQUEST:
      return update(state, {
        addthanhtoan: {
          isFetching: { $set: true }
        }
      });
    case ADD_THANHTOAN_SUCCESS:
      return update(state, {
        addthanhtoan: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case ADD_THANHTOAN_FAILURE:
      return update(state, {
        addthanhtoan: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case ADD_DICHVU_BY_PHONG_REQUEST:
      return update(state, {
        adddichvubyphong: {
          isFetching: { $set: true }
        }
      });
    case ADD_DICHVU_BY_PHONG_SUCCESS:
      return update(state, {
        adddichvubyphong: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case ADD_DICHVU_BY_PHONG_FAILURE:
      return update(state, {
        adddichvubyphong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case CHECKOUT_DATPHONG_REQUEST:
      return update(state, {
        checkoutdatphong: {
          isFetching: { $set: true }
        }
      });
    case CHECKOUT_DATPHONG_SUCCESS:
      return update(state, {
        checkoutdatphong: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case CHECKOUT_DATPHONG_FAILURE:
      return update(state, {
        checkoutdatphong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    case CHECKIN_DATPHONG_REQUEST:
      return update(state, {
        checkindatphong: {
          isFetching: { $set: true }
        }
      });
    case CHECKIN_DATPHONG_SUCCESS:
      return update(state, {
        checkindatphong: {
          isFetching: { $set: false }
        },
        error: { $set: null }
      });
    case CHECKIN_DATPHONG_FAILURE:
      return update(state, {
        checkindatphong: {
          isFetching: { $set: false }
        },
        error: { $set: action.error }
      });
    default:
      return state;
  }
}
