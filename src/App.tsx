import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Text} from 'react-native';
// import AppContainer from "./src/navigation/AppNavigation";
import configureStore from './store/store';
// import {PersistGate} from 'redux-persist/integration/react';

import RouteContainer from './routes/RouteContainer';

const App = () => {
  const store = configureStore({
    auth: {
      isAuthenticated: false,
    },
  });

  return (
    <Provider store={store}>
      <RouteContainer />
    </Provider>
  );
};

export default App;
