/*
 * @Author: shizhi
 * @Date: 2022-09-30 11:25:44
 * @LastEditors: shizhi
 * @LastEditTime: 2024-11-19 15:31:00
 * @Description: Second
 */
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import Animated from 'react-native-reanimated';

const Second = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <Text>Second</Text>
      <Button title="返回" onPress={() => navigation.goBack()} />
      <Animated.View
        sharedTransitionTag="sharedTag"
        style={{ width: 200, height: 200, backgroundColor: 'green' }}
      />
    </View>
  );
};

export default Second;
