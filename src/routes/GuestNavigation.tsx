import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import LoginScreen from '../screens/auth/LoginScreen';

const GuestNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default GuestNavigation;
