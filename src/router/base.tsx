import * as React from 'react';
import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '@/pages/detail';
import BottomTab from '@/pages/tabs';
import { useSelector } from 'react-redux';
import Modal from '@/pages/modal';
import Login from '@/pages/login';
import { NavigationContainer } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@/constants/theme';

const { Navigator, Screen, Group } = createNativeStackNavigator();

const Router = () => {
  const systemColorScheme = useColorScheme();
  const isLogin = useSelector((state: any) => state.login.get('isLogin'));
  const customColorScheme = useSelector((state: any) => state.device.get('colorScheme'));
  const isSystemTheme = useSelector((state: any) => state.device.get('isSystemTheme'));

  const currentColorScheme = useMemo(() => isSystemTheme ? systemColorScheme : customColorScheme, [systemColorScheme, customColorScheme, isSystemTheme]);

  return (
    <NavigationContainer
      theme={currentColorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Navigator>
        {/* <Group>
          <Screen
            name="Tab"
            component={BottomTab}
            options={{ headerShown: false }}
          />
        </Group> */}
        {/* 是否登陆 */}
        {isLogin ? (
          // 已登陆页面配置
          <Group>
            <Screen
              name="Tab"
              component={BottomTab}
              options={{ headerShown: false }}
            />
          </Group>
        ) : (
          // 未登录页面配置
          <Group screenOptions={{ headerShown: false }}>
            <Screen name="Login" component={Login} />
          </Group>
        )}
        {/* 通用页面路由 */}
        <Group>
          <Screen name="Detail" component={Detail} />
        </Group>
        {/* 通用弹窗路由 */}
        <Group
          screenOptions={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}>
          <Screen name="Modal" component={Modal} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
