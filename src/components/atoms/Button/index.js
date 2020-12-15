import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';
import IconOnly from './iconOnly';

const Button = ({title, btnType, onPress, icon}) => {
  if (btnType === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableNativeFeedback
      style={styles.container(btnType)}
      onPress={onPress}>
      <Text style={styles.text(btnType)}>{title}</Text>
    </TouchableNativeFeedback>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (btnType) => ({
    backgroundColor:
      btnType === 'primary'
        ? colors.button.primary.background
        : colors.button.secondary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (btnType) => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color:
      btnType === 'primary'
        ? colors.button.primary.text
        : colors.button.secondary.text,
  }),
});
