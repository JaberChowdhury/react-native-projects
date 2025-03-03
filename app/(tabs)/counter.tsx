import { Stack } from 'expo-router';
import { func } from 'prop-types';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text } from 'tamagui';
import { Button } from '~/components/Button';
import { TabBarIcon } from '~/components/TabBarIcon';
import { useCounter } from '~/store/counter';

function Counter() {
  const { count, increaseCount, decreaseCount } = useCounter();
  console.log(count);
  return (
    <View style={styles.counterContainer}>
      <Button
        title={<TabBarIcon name="minus" color="white" />}
        onPress={decreaseCount}
        style={styles.button}></Button>
      <Text style={styles.countText}>{count}</Text>
      <Button
        title={<TabBarIcon name="plus" color="white" />}
        onPress={increaseCount}
        style={styles.button}></Button>
    </View>
  );
}

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Counter' }} />
      <SafeAreaView style={styles.container}>
        <Counter />
        <Counter />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    gap: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    width: '30%',
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
