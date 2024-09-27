import { Theme } from '@react-navigation/native';
import { ColorValue } from 'react-native';

/** 类型定义 */
export type ColorTheme = Theme & {
  dark: boolean;
  colors: {
    [key: string]: ColorValue | undefined;
  };
  sizes: {
    [key: string]: number | undefined;
  };
};

// 常规主题
const DefaultTheme: ColorTheme = {
  dark: false,
  colors: {
    primary: '#ff6347', // 主题色
    background: '#f2f2f2', // 背景色
    card: '#ffffff', // 卡片色
    text: '#1c1c1e', // 文字色
    border: '#d8d8d8', // 边框色
    notification: '#ff3b30', // 通知色
    placeholder: '#595959', // 占位色
    btnBg: '#c6e6f3', // 按钮背景色
    title: '#000000', // 标题文本色
    tabBarIconFocused: '#ffffff', // 选中状态 TabBar 图标颜色
    tabBarIconUnfocused: '#808080', // 未选中状态 TabBar 图标颜色
    tabBarBackgroundColor: '#FFFFFF', // TabBar 背景色
    tabBarCustomBackgroundColor: '#f2f2f2', // TabBar 自定义背景色
  },
  sizes: {
    borderWidth: 1,
  },
};

// 深色模式主题
const DarkTheme: ColorTheme = {
  dark: true,
  colors: {
    primary: '#ff6347',
    background: '#000000',
    card: '#121212',
    text: '#e5e5e7',
    border: '#272729',
    notification: '#ff453a',
    placeholder: '#eeeeee',
    btnBg: '#063940',
    title: '#ffffff', // 标题文本色
    tabBarIconFocused: '#eeeeee', // 选中状态 TabBar 图标颜色
    tabBarIconUnfocused: '#FFFFFF', // 未选中状态 TabBar 图标颜色
    tabBarBackgroundColor: '#111111', // TabBar 背景色
    tabBarCustomBackgroundColor: '#000000', // TabBar 自定义背景色
  },
  sizes: {
    borderWidth: 0,
  },
};

export { DefaultTheme, DarkTheme };
