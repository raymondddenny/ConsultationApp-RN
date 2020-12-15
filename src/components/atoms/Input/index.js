import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {colors, fonts} from '../../../utils';
const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.textLabel}> {label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
  },
  textLabel: {
    marginBottom: 6,
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
