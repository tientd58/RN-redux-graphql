import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  authToken: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        authToken: action.payload,
        loading: false
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return { ...state };
  }
};
