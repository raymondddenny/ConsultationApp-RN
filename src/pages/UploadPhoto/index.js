import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {AppBar, Button, Gap, Link} from '../../components';
import {colors, fonts} from '../../utils';

const UploadPhoto = (navigation) => {
  return (
    <View style={styles.page}>
      <AppBar title="Upload Photo" />
      {/* content here */}
      <View style={styles.content}>
        {/* photo profile and title group */}
        <View style={styles.profile}>
          <View style={styles.imageAvatarWrapper}>
            <Image source={ILNullPhoto} style={styles.imageAvatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}> Shayna Melinda</Text>
          <Text style={styles.job}> Patient</Text>
        </View>
        {/* button and link group */}
        <View>
          <Button title="Upload and Continue" btnType="primary" />
          <Gap height={24} />
          <Link title="Skip for this" align="center" size={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  imageAvatar: {
    height: 110,
    width: 110,
  },
  imageAvatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  job: {
    fontSize: 16,
    fontFamily: fonts.primary[200],
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
