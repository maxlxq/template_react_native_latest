import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import TabBg from './TabBg';
import withTheme from '@/hoc/withTheme';

// 底部 TabBar 中间浮动的按钮
const TabBarAdvancedButton = ({
  isFocused,
  iconName,
  onPress,
  colors,
}: {
  isFocused: boolean;
  iconName: string;
  onPress?: (props: any) => void;
  colors: any;
}) => {
  const color = isFocused
    ? colors.tabBarIconFocused
    : colors.tabBarIconUnfocused;
  const buttonStyle = StyleSheet.compose(styles.button, {
    backgroundColor: isFocused ? colors.primary : colors.tabBarBackgroundColor,
  });

  const containerStyle = StyleSheet.compose(styles.container, {
    backgroundColor: colors.tabBarCustomBackgroundColor,
  });

  return (
    <View style={containerStyle} pointerEvents="box-none">
      <TabBg color={colors.tabBarBackgroundColor} style={styles.background} />
      <TouchableOpacity
        activeOpacity={isFocused ? 1 : 0.2}
        style={buttonStyle}
        onPress={onPress}>
        <Ionicons name={iconName} size={28} color={color} />
      </TouchableOpacity>
    </View>
  );
};

export default withTheme(TabBarAdvancedButton);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
  },
});
