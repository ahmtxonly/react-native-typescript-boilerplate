import {combineReducers} from 'redux';

import test from './testReducer';
import auth from './authReducer';

export default combineReducers({
  test,
  auth,
});

export interface IRootReducers {
  test: any;
  auth: any;
}
