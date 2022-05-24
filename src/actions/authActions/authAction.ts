import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {HTTP_REQUEST, LOGIN} from '../../constants';

export const userLogin =
  (full: any): any =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = `api/Account/Login`;

    dispatch({
      type: HTTP_REQUEST,
      payload: {
        method: 'POST',
        url,
        label: LOGIN,
        reducer: 'test',
        body: JSON.stringify({
          email: 'ceren.oztunc@iotagraf.com',
          password: '123456',
        }),
      },
    });
  };
