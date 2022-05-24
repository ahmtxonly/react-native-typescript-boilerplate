import React from 'react';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import TestScreen from '../screens/TestScreen';
import HomeScreen from '../screens/HomeScreen';

const DrawerNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = 'ios-list';
          } else if (route.name === 'TestScreen') {
            iconName = 'ios-list';
          }

          return <Ionicons name={`${iconName}`} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      initialRouteName={'HomeScreen'}
      sceneContainerStyle={{
        backgroundColor: '#f0eef1',
      }}
      backBehavior={'initialRoute'}>
      <Tab.Screen
        name={'TestScreen'}
        component={TestScreen}
        options={{
          header: () => null,
          tabBarLabel: '1',
        }}
      />
      <Tab.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          header: () => null,
          tabBarLabel: '2',
        }}
      />
    </Tab.Navigator>
  );
};

export default DrawerNavigation;
