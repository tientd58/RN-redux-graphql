import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILURE
} from './actionTypes';
import getEventsService from '../services/event';

const getAllEventSuccess = payload => ({
  type: GET_EVENTS_SUCCESS,
  payload
});

const getAllEventFailure = payload => ({
  type: GET_EVENTS_FAILURE,
  payload
});

const handleGetAllEvent = () => dispatch => {
  dispatch({ type: GET_EVENTS_REQUEST });
  return getEventsService()
    .then(response => {
      const { events } = response.data;
      return dispatch(getAllEventSuccess(events));
    })
    .catch(error => dispatch(getAllEventFailure(error)));
};

const getAllEvent = () => dispatch => dispatch(handleGetAllEvent());

export { getAllEvent as default };
