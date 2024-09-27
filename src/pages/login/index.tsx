/*
 * @Author: shizhi
 * @Date: 2022-09-30 10:50:16
 * @LastEditors: shizhi
 * @LastEditTime: 2023-10-31 16:51:47
 * @Description: 登录页面
 */
import React, { useCallback, useRef } from 'react';
import { Button, View } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import Logo from '@/assets/Logo';
import { useDispatch } from 'react-redux';
import loginAction from '@/redux/action/login';
import { Title, PageContainer, Flex } from '@/styled/base';
import TextInputBase from '@/components/TextInput/TextInputBase';
import { BaseButton } from '@/styled/Button';
import { BaseText } from '@/styled/Text';
import { CommonStyles, buttonsRowStyle, rowStyle } from '@/styled/baseStyle';
import DismissCard from '@/components/DismissCard';

const Login = () => {
  const dispatch = useDispatch();
  const loginRef = useRef<{ username: string; password: string } | undefined>({
    username: '',
    password: '',
  });
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const login = useCallback(() => dispatch(loginAction.login()), [dispatch]);

  const onJump = () => navigation.navigate('Detail');

  const onLogin = () => {
    console.log('login user:', loginRef.current);
    if (loginRef.current?.username && loginRef.current?.password) {
      login();
    }
  };

  return (
    <PageContainer>
      <DismissCard>
        <View style={rowStyle}>
          <Title>测试项目</Title>
          <Logo size="medium" />
        </View>
      </DismissCard>
      <DismissCard>
        <Flex flex={3}>
          <TextInputBase
            onChangeText={(t: string) => console.log('text:', t)}
            placeholder="请输入用户名"
            maxLength={80}
            onChange={(e: { nativeEvent: { text: any } }) => {
              loginRef.current = {
                username: e.nativeEvent.text,
                password: loginRef.current?.password || '',
              };
            }}
          />
          <TextInputBase
            onChangeText={(t: string) => console.log('text:', t)}
            placeholder="请输入密码"
            secureTextEntry
            maxLength={60}
            onChange={(e: { nativeEvent: { text: any } }) => {
              loginRef.current = {
                username: loginRef.current?.username || '',
                password: e.nativeEvent.text,
              };
            }}
          />
        </Flex>
      </DismissCard>
      <View style={buttonsRowStyle}>
        <View style={CommonStyles.center}>
          <Button title="注册" onPress={onJump} testID="home_btn_register" />
        </View>
        <BaseButton onPress={onLogin} testID="home_btn_login">
          <BaseText size={20} lineHeight={32}>
            登录
          </BaseText>
        </BaseButton>
      </View>
    </PageContainer>
  );
};

export default Login;
