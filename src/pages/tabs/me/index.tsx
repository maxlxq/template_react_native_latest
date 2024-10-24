/*
 * @Author: shizhi
 * @Date: 2023-03-14 13:26:19
 * @LastEditors: shizhi
 * @LastEditTime: 2024-10-24 18:29:28
 * @Description: Tab - 我的页面
 */
import React, { useCallback } from 'react';
import { Button, Switch, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import homeAction from '@/redux/action/home';
import { Container, Span } from '@/styled/base';
import deviceAction from '@/redux/action/device';
import { appearanceEnum } from '@/interface/device';
import { BaseText } from '@/styled/Text';

const Me = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.home.get('count'));
  const colorScheme = useSelector((state: any) => state.device.get('colorScheme'));
  const isSystemTheme = useSelector((state: any) => state.device.get('isSystemTheme'));

  const onSetCount = useCallback(
    (c: number) => dispatch(homeAction.setCount(c)),
    [dispatch],
  );

  const onIncrease = useCallback(
    () => dispatch(homeAction.increase()),
    [dispatch],
  );
  const onDecrease = useCallback(
    () => dispatch(homeAction.decrease()),
    [dispatch],
  );

  const onUseSystemTheme = useCallback(
    () => {
      dispatch(deviceAction.useSystemChange());
    },
    [dispatch],
  );

  const onChangeThemeColor = () => {
    const isLight = colorScheme === appearanceEnum.light;
    dispatch(deviceAction.appearanceChange(isLight ? appearanceEnum.dark : appearanceEnum.light));
  };

  return (
    <Container>
      <Span>Me: {count}</Span>
      <Button onPress={() => onSetCount(99)} title="set 99" testID="me_btn_set99" />
      <Button onPress={onIncrease} title="+1" testID="me_btn_plus" />
      <Button onPress={onDecrease} title="-1" testID="me_btn_minus" />
      <Button onPress={onChangeThemeColor} title="改变主题" testID="me_btn_change_theme" />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <BaseText>使用系统主题: </BaseText>
        <Switch value={isSystemTheme} onValueChange={onUseSystemTheme} />
      </View>
    </Container>
  );
};

export default Me;
