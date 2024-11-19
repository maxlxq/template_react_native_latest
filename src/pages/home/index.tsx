/*
 * @Author: shizhi
 * @Date: 2022-09-30 10:50:16
 * @LastEditors: shizhi
 * @LastEditTime: 2024-11-19 10:52:56
 * @Description: 首页
 */
import React from 'react';
import { View, Text, Button } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #e8e8e8;
`;

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const onJump = () => navigation.navigate('Detail');

  return (
    <Container>
      <Text>Home Hello</Text>
      <Button title="go to detail" onPress={onJump} />
    </Container>
  );
};

export default Home;
