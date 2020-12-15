import React from 'react';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {IconBackDark} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const IconType = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-light') {
      return <IconBackDark />;
    }
    return <IconBackDark />;
  };
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <IconType />
    </TouchableNativeFeedback>
  );
};

export default IconOnly;
