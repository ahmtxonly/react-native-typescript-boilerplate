import {compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import request from './middlewares/request';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState: any) {
  const middlewares = [thunk, request];

  if (process.env.NODE_ENV === `development`) {
    const {logger} = require(`redux-logger`);

    middlewares.push(logger);
  }

  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, initialState, enhancer);

  return store;
}
