/*
 * @Author: shizhi
 * @Date: 2022-09-30 13:50:28
 * @LastEditors: shizhi
 * @LastEditTime: 2023-06-06 18:09:43
 * @Description: 自定义LOGO，可替换
 */
import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';

const SIZE_MAP = {
  small: 20,
  medium: 40,
  large: 80,
};
const CustomImage = styled(Image)`
  width: ${(props: { size: 'small' | 'medium' | 'large' | number }) =>
    typeof props.size === 'string'
      ? `${SIZE_MAP[props.size] || props.size}px`
      : `${props.size}px`};
  height: ${(props: { size: 'small' | 'medium' | 'large' | number }) =>
    typeof props.size === 'string'
      ? `${SIZE_MAP[props.size] || props.size}px`
      : `${props.size}px`};
`;

const Logo = ({
  size = 'small',
  ...rest
}: {
  size: 'small' | 'medium' | 'large' | number;
  [key: string]: any;
}): any => (
  <CustomImage size={size} {...rest} source={require('./touch.png')} />
);

export default Logo;
