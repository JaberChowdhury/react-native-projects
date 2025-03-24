import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Colorinfo from '~/components/Colorinfo';
import useColor from '~/store/colors';
import useModel from '~/store/model';

const colors = () => {
  const { toggelOpen, setChildren } = useModel();

  const handlePress = (color: string) => {
    toggelOpen();
    setChildren(<Colorinfo color={color} />);
  };

  const { color } = useColor();
  return (
    <View className="container px-3">
      {/* <Text>colors</Text> */}
      <ScrollView>
        <View className="flex w-full flex-row flex-wrap items-center justify-between gap-y-3">
          {color.map((color: string) => {
            return (
              <Text
                onPress={() => handlePress(color)}
                className="size-32 rounded border"
                style={{
                  backgroundColor: color,
                }}
                key={color}>
                {/* {color} */}
              </Text>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default colors;
