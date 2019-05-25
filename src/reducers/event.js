import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILURE
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  events: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    case GET_EVENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return { ...state };
  }
};
