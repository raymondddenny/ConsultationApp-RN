import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILBackgroundGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILBackgroundGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          btnType="primary"
          onPress={() => navigation.navigate('RegisterScreen')}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          onPress={() => navigation.replace('LoginScreen')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 28,
    // fontWeight: '600',
    color: colors.white,
    marginTop: 91,
    fontFamily: fonts.primary[600],
  },
});
