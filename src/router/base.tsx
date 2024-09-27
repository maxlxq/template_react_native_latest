import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '@/pages/detail';
import BottomTab from '@/pages/tabs';
// import { useSelector } from 'react-redux';
import Modal from '@/pages/modal';
// import Login from '@/pages/login';

const { Navigator, Screen, Group } = createNativeStackNavigator();

const Router = () => {
  // const isLogin = useSelector((state: any) => state.login.isLogin);

  return (
    <Navigator>
      <Group>
        <Screen
          name="Tab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
      </Group>
      {/* 是否登陆 */}
      {/* {isLogin ? (
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
      )} */}
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
  );
};

export default Router;
