import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { colors } from '../constants/Colors';

const Button = ({content, width, onPress}) => {
  return (
    <TouchableOpacity style={[styles.touch, {width: width}]} onPress={onPress}>
      <Text style={styles.content}>{content}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  touch: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: colors.colorButton
  },
  content: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#d9d9d9',
  },
});
