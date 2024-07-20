import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {spacing} from '../constants/Common';
import {colors} from '../constants/Colors';

const Input = ({value, setValue, placeholder}) => {
  return (
    <TextInput
      style={st.input}
      value={value}
      onChangeText={e => setValue(e)}
      placeholder={placeholder}
    />
  );
};

export default Input;

const st = StyleSheet.create({
  input: {
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.text_primary,
    width: '100%',
    borderRadius: 15,
    marginBottom: spacing.sm,
    paddingVertical: spacing.sm,
  },
});
