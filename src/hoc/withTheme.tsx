import * as React from 'react';
import { useTheme } from '@react-navigation/native';
import { ColorTheme } from '@/constants/theme';

const withTheme = (Component: any) => {
  const WithTheme = (props: any) => {
    const { colors, sizes } = useTheme() as ColorTheme;
    return <Component {...props} colors={colors} sizes={sizes} />;
  };
  return WithTheme;
};
export default withTheme;
