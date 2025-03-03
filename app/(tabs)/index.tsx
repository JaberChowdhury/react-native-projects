import { Link, router, Stack } from 'expo-router';
import { Button, Text, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <View className="container px-4 py-10">
        <Text className="my-2 text-2xl font-bold">Navigation</Text>
        <View className="flex gap-y-2 ">
          <Button title="counter" onPress={() => router.push('/(screens)/counter')} />
          <Button title="Colors" onPress={() => router.push('/(screens)/colors')} />
        </View>{' '}
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One haha" />
        <Link href="/modal">Open modal</Link>
      </View>
    </>
  );
}
