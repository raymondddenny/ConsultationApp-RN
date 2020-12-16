import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DoctorPic3} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={DoctorPic3} style={styles.avatar} />
      <View>
        <Text style={styles.contact}>Alexandra Christy</Text>
        <Text style={styles.message}>
          Baik ibu, terima kasih banyak atas waktunya dadwadadadawdawda
        </Text>
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  contact: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  message: {
    fontSize: 12,
    fontFamily: fonts.primary[200],
    color: colors.text.secondary,
  },
});
