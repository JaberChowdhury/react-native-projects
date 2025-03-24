import React from 'react';
import { View, Text } from 'react-native';
import HexadecimalModifier from '~/utils/HexadecimalModifier';

type propsType = {
  color: string;
};
const Colorinfo = ({ color }: propsType) => {
  const data = HexadecimalModifier(color);
  const jsobndata = JSON.stringify(data, null, 2);
  return (
    <View>
      <Text>{jsobndata}</Text>
    </View>
  );
};

export default Colorinfo;
