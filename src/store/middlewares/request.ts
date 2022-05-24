// const needsAccessToken = (url: string) => !url.startsWith('/Auth/Login');

export default ({getState}: any) =>
  (next: (arg0: {payload?: any; type: any}) => void) =>
  async ({payload = {}, type}: any) => {
    const {
      body = null,
      headers = {},
      label,
      method = 'GET',
      transformData = (data: any) => data,
      callBack,
      errorHandler,
      url,
    } = payload;

    next({payload, type});

    if (type !== 'HTTP_REQUEST') {
      return;
    }

    // const {isAuthenticated} = getState().auth;

    // if (isAuthenticated && needsAccessToken(url)) {
    //   const userData = getState().auth.token;
    //   headers.Authorization = `Bearer ${userData}`;
    // }

    next({
      type: `${label}_REQUEST`,
    });

    try {
      const res = await fetch('https://api.op1001.com/' + url, {
        method,
        headers: {
          ...headers,
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body,
      });
      const contentType = res.headers.get('content-type');
      const data = contentType?.includes('application/json')
        ? await res.json()
        : {};

      if (res.status >= 400) {
        throw {...data, response: {status: res.status}};
      }

      next({
        type: `${label}_SUCCESS`,
        payload: transformData(data),
      });

      // if (!data?.status) {
      //   throw {...data, response: {status: res.status}};
      // }

      if (typeof callBack === 'function') {
        callBack(data);
      }
    } catch (error) {
      const enhancedError = {};

      if (typeof errorHandler === 'function') {
        errorHandler(enhancedError);
      }

      return next({
        type: `${label}_FAILURE`,
        payload: enhancedError,
      });
    }
  };
