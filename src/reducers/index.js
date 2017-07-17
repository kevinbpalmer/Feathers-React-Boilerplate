import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Messages from './Messages';

export default combineReducers({
  form: formReducer,
  Messages
})
