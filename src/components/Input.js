import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import { spacing } from '../constants/Common';

const Input = ({value, setValue }) => {
  return <TextInput style={st.input}
  value={value}
  onChangeText={(e) => setValue(e)}
   />;
};

export default Input;

const st = StyleSheet.create({
  input: {
    padding: spacing.sm,

  },
});
