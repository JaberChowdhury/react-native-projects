import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { Icon } from '~/components/TabBarIcon';
import useCounter from '~/store/counter';

const Counter = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <View className="flex flex-row items-center justify-center gap-x-3 py-12">
      <Button onPress={decrement} className="rounded px-12">
        <Icon name="minus" />
      </Button>
      <Text className="w-28 text-center text-4xl font-bold">{count}</Text>
      <Button onPress={increment} className="rounded px-12">
        <Icon name="plus" />
      </Button>
    </View>
  );
};

export default Counter;
