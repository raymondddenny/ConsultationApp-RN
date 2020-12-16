import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {
  IconDoctorActive,
  IconDoctorInactive,
  IconHospitalActive,
  IconHospitalInactive,
  IconMessageActive,
  IconMessageInactive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctorInactive />;
    }

    if (title === 'Message') {
      return active ? <IconMessageActive /> : <IconMessageInactive />;
    }
    if (title === 'Hospital') {
      return active ? <IconHospitalActive /> : <IconHospitalInactive />;
    }

    return <IconDoctorInactive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon active={active} />
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: (active) => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
