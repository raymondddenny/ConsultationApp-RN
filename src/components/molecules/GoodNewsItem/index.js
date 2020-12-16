import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NewsImage1} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const GoodNewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.newsInfoWrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Gap height={4} />
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={NewsImage1} style={styles.newsImage} />
    </View>
  );
};

export default GoodNewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  newsInfoWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.normal,
    color: colors.text.secondary,
  },
  newsImage: {
    height: 60,
    width: 80,
    borderRadius: 12,
  },
});
