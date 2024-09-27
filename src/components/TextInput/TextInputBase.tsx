import React from 'react';
import { TextInputProps } from 'react-native/types';
import { BaseTextInput } from '@/styled/TextInput';

const TextInputBase = (props: TextInputProps) => {
  return (
    <BaseTextInput
      placeholder="请输入"
      clearButtonMode="always"
      clearTextOnFocus={false}
      {...props}
    />
  );
};

export default TextInputBase;
