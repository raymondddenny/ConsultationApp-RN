import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';

const SplashScreen = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}> Consultation App🏥 </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#112340',
    marginTop: 12,
    fontFamily: 'Nunito-SemiBold',
  },
});
