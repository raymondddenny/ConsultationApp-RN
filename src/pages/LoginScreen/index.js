import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ILLogo} from '../../assets';
import {Button, Link, Input, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const LoginScreen = () => {
  return (
    <ScrollView style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Masuk dan mulai konsultasi</Text>
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={12} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" btnType="primary" onPress={() => {}} />
        <Gap height={20} />
        <Link title="Create My Account" size={18} align="center" />
        <Gap height={100} />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
