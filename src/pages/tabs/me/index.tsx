/*
 * @Author: shizhi
 * @Date: 2023-03-14 13:26:19
 * @LastEditors: shizhi
 * @LastEditTime: 2023-10-31 15:58:56
 * @Description: Tab - 我的页面
 */
import React, { useCallback } from 'react';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import homeAction from '@/redux/action/home';
import { Container, Span } from '@/styled/base';

const Me = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.home.count);

  const onIncrease = useCallback(
    () => dispatch(homeAction.increase()),
    [dispatch],
  );
  const onDecrease = useCallback(
    () => dispatch(homeAction.decrease()),
    [dispatch],
  );

  return (
    <Container>
      <Span>Me: {count}</Span>
      <Button onPress={onIncrease} title="+1" testID="me_btn_plus" />
      <Button onPress={onDecrease} title="-1" testID="me_btn_minus" />
    </Container>
  );
};

export default Me;
