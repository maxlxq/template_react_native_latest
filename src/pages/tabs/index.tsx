/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import PageOne from '@/pages/tabs/pageOne';
import PageTwo from '@/pages/tabs/pageTwo';
import PageThree from '@/pages/tabs/pageThree';
import PageFour from '@/pages/tabs/pageFour';
import Me from '@/pages/tabs/me';
import Ionicons from 'react-native-vector-icons/AntDesign';
import {
  ICON_ROUTE_NAME,
  ICON_ROUTE_NAME_TEST_ID,
  ROUTE_LABEL,
  ROUTE_PATH,
} from '@/constants/router';
import TabBarAdvancedButton from '@/pages/tabs/components/TabBarAdvancedButton';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import withTheme from '@/hoc/withTheme';
import { CommonITF } from '@/interface/common';

const { Navigator, Screen } = createBottomTabNavigator();

const onGetOptions = ({
  route,
  navigation,
}: {
  route: RouteProp<ParamListBase>;
  navigation: any;
}) => {
  const { name } = route;
  const isFocused = navigation.isFocused();
  const options: BottomTabNavigationOptions = {
    title: ROUTE_LABEL[route.name] || '首页',
    tabBarTestID: ICON_ROUTE_NAME_TEST_ID[name],
    tabBarButton: ({ onPress }) => (
      <TabBarAdvancedButton
        isFocused={isFocused}
        iconName={ICON_ROUTE_NAME[name]}
        onPress={onPress}
      />
    ),
  };
  return options;
};
const onBaseOptions = ({ route }: { route: RouteProp<ParamListBase> }) => ({
  tabBarTestID: ICON_ROUTE_NAME_TEST_ID[route.name],
  title: ROUTE_LABEL[route.name] || '首页',
});

/**
 * 底部 TabBar 区域配置
 * Navigator.screenOptions 配置基本样式
 * Screen.options 配置每个Tab特定行为：onBaseOptions 为基本埋点；onGetOptions 为扩展的自定义样式
 */
const BottomTab = (props: CommonITF) => {
  const { colors, sizes } = props;
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName =
            ICON_ROUTE_NAME[route.name] || ICON_ROUTE_NAME.PageOne;
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ROUTE_LABEL[route.name] || '首页',
        tabBarActiveTintColor: '#ff6347',
        tabBarInactiveTintColor: colors.tabBarIconUnfocused,
        tabBarStyle: {
          borderTopColor: colors.background,
          borderTopWidth: sizes.borderWidth,
        },
      })}>
      <Screen
        name={ROUTE_PATH.PageOne}
        component={PageOne}
        options={onBaseOptions}
      />
      <Screen
        name={ROUTE_PATH.PageTwo}
        component={PageTwo}
        options={onBaseOptions}
      />
      <Screen
        name={ROUTE_PATH.PageThree}
        component={PageThree}
        options={onGetOptions}
      />
      <Screen
        name={ROUTE_PATH.PageFour}
        component={PageFour}
        options={onBaseOptions}
      />
      <Screen name={ROUTE_PATH.Me} component={Me} options={onBaseOptions} />
    </Navigator>
  );
};

export default withTheme(BottomTab);
