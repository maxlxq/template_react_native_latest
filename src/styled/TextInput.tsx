import React from 'react';
import { OnePixel } from '@/utils/base';
import { StyleSheet, TextInput } from 'react-native';
import { CommonITF } from '@/interface/common';
import withTheme from '@/hoc/withTheme';

// 文本输入
export const BaseTextInput = withTheme((props: CommonITF) => {
  const { colors, ...rest } = props;
  const selfStyle = StyleSheet.create({
    textinput: {
      backgroundColor: colors.card,
      color: colors.text,
      borderWidth: OnePixel,
      borderColor: colors.border,
      borderStyle: 'solid',
      borderRadius: 4,
      paddingVertical: 16,
      paddingHorizontal: 20,
      width: 300,
      fontSize: 18,
      alignSelf: 'center',
      marginBottom: 20,
    },
  });
  return (
    <TextInput
      style={selfStyle.textinput}
      placeholderTextColor={colors.placeholder}
      {...rest}
    />
  );
});
