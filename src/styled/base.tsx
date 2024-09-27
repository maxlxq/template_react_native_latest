import React from 'react';
import withTheme from '@/hoc/withTheme';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { WithChildrenITF, CommonITF } from '@/interface/common';
import { CommonStyles } from './baseStyle';
import { FontWeightType } from '@/interface/font';

// 页面级 背景View
export const PageContainer = withTheme((props: WithChildrenITF) => {
  const { children, colors, ...rest } = props;
  const coantinerStyle = StyleSheet.compose(CommonStyles.center, {
    backgroundColor: colors.background,
  });
  return (
    <SafeAreaView style={coantinerStyle} {...rest}>
      {children}
    </SafeAreaView>
  );
});

// 卡片级 背景View
export const Container = withTheme((props: WithChildrenITF) => {
  const { children, ...rest } = props;
  const coantinerStyle = StyleSheet.compose(CommonStyles.center, {
    backgroundColor: props.colors.background,
  });
  return (
    <View style={coantinerStyle} {...rest}>
      {children}
    </View>
  );
});

// 粗体标题
export const Title = withTheme((props: WithChildrenITF & CommonITF) => {
  const { children, ...rest } = props;
  const fontWeight = `${props.fontWeight || 600}` as FontWeightType;
  const selfStyle = StyleSheet.create({
    title: {
      fontSize: props.size || 40,
      fontWeight: `${fontWeight}`,
      lineHeight: props.lineHeight || 72,
      color: props.colors.title,
    },
  });
  return (
    <Text style={selfStyle.title} {...rest}>
      {children}
    </Text>
  );
});

// 常规文本
export const Span = withTheme((props: WithChildrenITF & CommonITF) => {
  const { children, ...rest } = props;
  const selfStyle = StyleSheet.create({
    text: {
      fontSize: props.size || 14,
      lineHeight: props.lineHeight || 24,
      color: props.colors.text,
    },
  });
  return (
    <Text style={selfStyle.text} {...rest}>
      {children}
    </Text>
  );
});

export const Flex = (props: CommonITF) => {
  const { children, ...rest } = props;
  const selfStyle = StyleSheet.create({
    flex: {
      flex: props.flex || 1,
      alignItems: 'center',
      width: '100%',
    },
  });
  return (
    <View style={selfStyle.flex} {...rest}>
      {children}
    </View>
  );
};
