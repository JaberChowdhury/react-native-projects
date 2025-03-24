import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { Icon } from '~/components/TabBarIcon';
import useCounter from '~/store/counter';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <View className="flex items-center justify-center gap-x-3 py-12">
      <View>
        <Text className=" rounded-md border-2 px-16 py-3 text-center text-4xl font-bold">
          {count}
        </Text>
      </View>
      <View className="flex flex-row items-center justify-center gap-x-3 py-12">
        <Button onPress={decrement} className="rounded px-12">
          <Icon name="minus" />
        </Button>
        <Button onPress={increment} className="rounded px-12">
          <Icon name="plus" />
        </Button>
        <Button onPress={reset} className="rounded px-12">
          <Icon name="circle" />
        </Button>
      </View>
    </View>
  );
};

export default Counter;
