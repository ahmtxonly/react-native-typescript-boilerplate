import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../constants';

interface Action {
  type: string;
  payload: any;
}
export interface State {
  data: {
    token: string;
    refreshToken: string;
  };
  loading: boolean;
  error: any;
}

const intialState = {
  data: {
    token: '',
    refreshToken: '',
  },
  loading: false,
  error: null,
};

export default (state: State = intialState, action: Action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
