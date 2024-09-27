import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { CommonITF } from '@/interface/common';
import withTheme from '@/hoc/withTheme';

export const BaseButton = withTheme((props: CommonITF) => {
  const { colors, children, ...rest } = props;
  const selfStyles = StyleSheet.create({
    button: {
      backgroundColor: colors.btnBg,
      color: colors.title,
      borderRadius: 4,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
    },
  });
  return (
    <TouchableOpacity style={selfStyles.button} {...rest}>
      {children}
    </TouchableOpacity>
  );
});
