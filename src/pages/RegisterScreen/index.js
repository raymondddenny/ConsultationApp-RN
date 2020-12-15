import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppBar, Button, Gap, Input} from '../../components';
import {colors} from '../../utils';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <AppBar onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Perkerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          btnType="primary"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {padding: 40, paddingTop: 0},
});
