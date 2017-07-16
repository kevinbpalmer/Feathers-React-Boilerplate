// store magic stuff here
import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

//const middleware = applyMiddleware(promise(), thunk);

const middleware = applyMiddleware(createLogger({
  // this will ignore a given reducer in the logger
  predicate: (getState, action) => action.type !== 'PAGE_SCROLLED'
}), promise(), thunk);

export default createStore(reducer,middleware);
