import { CommonITF } from '@/interface/common';
import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissCard = (props: CommonITF) => {
  const onKeyboardDismiss = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={onKeyboardDismiss}>
      {props.children}
    </TouchableWithoutFeedback>
  );
};

export default DismissCard;
