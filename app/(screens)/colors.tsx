import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const colors = () => {
  const getColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const color = `rgb(${red},${green},${blue})`;
    return color;
  };
  const colordata = Array.from({ length: 201 }, () => getColor());

  return (
    <View className="container px-3">
      <Text>colors</Text>
      <ScrollView>
        <View className="flex w-full flex-row flex-wrap items-center justify-between gap-y-3 ">
          {colordata.map((color: string) => {
            return (
              <Text
                className="size-32 rounded "
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
