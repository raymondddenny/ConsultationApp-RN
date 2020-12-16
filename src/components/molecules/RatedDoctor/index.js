import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DoctorPic1, IconStars} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={DoctorPic1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.speciality}>Pediatrician</Text>
      </View>

      <View style={styles.rating}>
        <IconStars />
        <IconStars />
        <IconStars />
        <IconStars />
        <IconStars />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  profile: {
    flex: 1,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  speciality: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2,
  },
  rating: {
    flexDirection: 'row',
  },
});
