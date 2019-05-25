import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import logger from 'redux-logger';

import reducers from '../reducers';

const store = extra =>
  createStore(
    combineReducers({
      ...reducers
    }),
    extra,
    compose(applyMiddleware(thunk, logger))
  );

export default store;
