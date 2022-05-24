import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import TestScreen from '../screens/TestScreen';
import DrawerNavigation from './DrawerNavigation';

const UserNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'DrawerNavigation'}
        component={DrawerNavigation}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name={'TestScreen'}
        component={TestScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigation;
