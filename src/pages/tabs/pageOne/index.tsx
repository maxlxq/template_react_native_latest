/*
 * @Author: shizhi
 * @Date: 2023-03-13 18:41:09
 * @LastEditors: shizhi
 * @LastEditTime: 2023-10-31 15:58:29
 * @Description: Tab 第一页
 */
import React from 'react';
import { Button } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import loginAction from '@/redux/action/login';
import { Container, Span } from '@/styled/base';

const PageOne = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const onJump = () => navigation.navigate('Detail');
  const onOpenModal = () => navigation.navigate('Modal');

  const onLogout = () => dispatch(loginAction.logout());

  return (
    <Container>
      <Span>PageOne</Span>
      <Button title="onOpenModal" onPress={onOpenModal} />
      <Button title="go to detail" onPress={onJump} />
      <Button title="退出登录" onPress={onLogout} />
    </Container>
  );
};

export default PageOne;
