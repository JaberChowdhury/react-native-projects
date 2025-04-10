import { Text, Button, View } from 'tamagui';
import { XStack } from 'tamagui';
import { useBearStore } from '~/store/bearstore';
import { FlatList } from 'react-native';

const Bearhistory = () => {
  const { history } = useBearStore();

  const actionbuttontheme = (action: string) => {
    switch (action) {
      case 'increasePopulation':
        return 'green_active';
      case 'decreasePopulation':
        return 'red_active';
      default:
        return 'yellow_active';
    }
  };

  return (
    <View style={{ marginTop: 50 }}>
      <FlatList
        contentContainerStyle={{ paddingVertical: 38, gap: 9 }}
        data={[...history].reverse()} // clone to prevent mutation
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <XStack justifyContent="space-between" role="separator">
            <Button disabled theme={actionbuttontheme(item.action)}>
              <Text>{item.action}</Text>
            </Button>
            <Button disabled theme="green_alt2">
              <Text>{item.time}</Text>
            </Button>
          </XStack>
        )}
      />
    </View>
  );
};

export default Bearhistory;
