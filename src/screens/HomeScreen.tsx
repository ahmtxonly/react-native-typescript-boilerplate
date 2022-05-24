import React from 'react';
import {Text, Pressable, SafeAreaView} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {userLogin} from '../actions';

import {IRootReducers} from '../reducers';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const {token}: any = useSelector<IRootReducers>(state => state.test.data);

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Pressable
        onPress={() => {
          dispatch(userLogin('x'));
        }}>
        <Text>Tıkla bana</Text>
      </Pressable>
      <Text>{token}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
