import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const AppBar = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Button btnType="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    // ubah direction dari column ke row
    flexDirection: 'row',
    // set rata tengah di dalam container arrow dan text
    alignItems: 'center',
  },
  text: {
    // flex untuk set ukurannnya sewidthnya
    flex: 1,
    textAlign: 'center',
    color: colors.text.primary,
    fontSize: 20,
    fontFamily: fonts.primary[600],
  },
});
