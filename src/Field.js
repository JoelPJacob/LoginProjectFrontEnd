import React from 'react';
import { TextInput } from 'react-native';
import { black } from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{ borderRadius: 10, color: black, paddingHorizontal: 10, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10, borderWidth: 1, borderColor: { black } }}
      placeholderTextColor={black}></TextInput>
  );
};

export default Field;
