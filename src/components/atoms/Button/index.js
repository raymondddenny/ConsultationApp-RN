import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({title, btnType}) => {
  return (
    <View style={styles.container(btnType)}>
      <Text style={styles.text(btnType)}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (btnType) => ({
    backgroundColor: btnType === 'primary' ? '#0BCAD4' : 'white',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (btnType) => ({
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: btnType === 'primary' ? 'white' : 'black',
  }),
});
