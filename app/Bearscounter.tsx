import { useBearStore } from '~/store/bearstore';
import { XStack, YStack, Text } from 'tamagui';
import { Button } from 'tamagui';
import { Container } from '~/components/Container';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Bearhistory from '~/components/Bearhistory';
const Bearscounter = () => {
  const { bears, increasePopulation, decreasePopulation, removeAllBears, addHistory } =
    useBearStore();

  return (
    <Container>
      <YStack
        style={{
          gap: 8,
        }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>{bears}</Text>
        <XStack style={{ margin: 'auto', columnGap: 8 }}>
          <Button
            theme="red_active"
            disabled={bears == 0 ? true : false}
            onPress={() => {
              decreasePopulation();
              addHistory({
                action: 'decreasePopulation',
                time: new Date().toLocaleTimeString(),
              });
            }}>
            <AntDesign name="minus" size={24} color="black" />
          </Button>
          <Button
            theme="yellow_active"
            disabled={bears == 0 ? true : false}
            onPress={() => {
              removeAllBears();
              addHistory({
                action: 'removeAllBears',
                time: new Date().toLocaleTimeString(),
              });
            }}>
            <FontAwesome6 name="creative-commons-zero" size={24} color="black" />
          </Button>
          <Button
            theme="green_active"
            onPress={() => {
              increasePopulation();
              addHistory({
                action: 'increasePopulation',
                time: new Date().toLocaleTimeString(),
              });
            }}>
            <AntDesign name="plus" size={24} color="black" />
          </Button>
        </XStack>
      </YStack>
      <Bearhistory />
    </Container>
  );
};

export default Bearscounter;
