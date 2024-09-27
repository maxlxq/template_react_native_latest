import React from 'react';
import { StyleSheet, Text } from 'react-native';
import withTheme from '@/hoc/withTheme';
import { CommonITF } from '@/interface/common';

// 基础文本
export const BaseText = withTheme((props: CommonITF) => {
  const { colors, size, lineHeight, children, ...rest } = props;
  const selfStyle = StyleSheet.create({
    text: {
      fontSize: size || 14,
      lineHeight: lineHeight || 20,
      color: colors.text,
    },
  });
  return (
    <Text style={selfStyle.text} {...rest}>
      {children}
    </Text>
  );
});
