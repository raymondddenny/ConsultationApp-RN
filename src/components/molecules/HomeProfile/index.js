import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {UserDummyPic} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={UserDummyPic} style={styles.avatar} />
      <View>
        <Text style={styles.title}>Shayna Melinda</Text>
        <Text style={styles.subtitle}>Product Designer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    borderRadius: 46 / 2,
    height: 46,
    width: 46,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
