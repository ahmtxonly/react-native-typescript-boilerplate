import React from 'react';
import {Text} from 'react-native';
import {createNavigationContainerRef} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

import {useSelector} from 'react-redux';

import {IRootReducers} from '../reducers';

const navigationRef = createNavigationContainerRef();

import GuestNavigation from './GuestNavigation';
import UserNavigation from './UserNavigation';

const RouteContainer = () => {
  const {isAuthenticated}: any = useSelector<IRootReducers>(
    state => state.auth,
  );
  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <UserNavigation /> : <GuestNavigation />}
    </NavigationContainer>
  );
};

export default RouteContainer;
