import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// test
import test from 'reducers/Test';

export default combineReducers({
  form: formReducer,
  test
})
