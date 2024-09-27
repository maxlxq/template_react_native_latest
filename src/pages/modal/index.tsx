/*
 * @Author: shizhi
 * @Date: 2022-09-30 11:25:44
 * @LastEditors: shizhi
 * @LastEditTime: 2023-06-02 16:23:35
 * @Description: Modal
 */
import ReactLogo from '@/assets/Logo';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

const Modal = () => {
  return (
    <View>
      <Text>Modal</Text>
      <ReactLogo />
      <Lottie
        source={require('./142434-moody-giraffe.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 400,
    height: 400,
  },
});

export default Modal;
