import { View, ScrollView } from 'react-native'; // Added ScrollView
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import { XGroup, XStack, YStack, Button } from 'tamagui';

const Buttoncomp = () => {
  return (
    <View>
      <YStack padding="20" gap="3">
        <Button theme="active">Plain</Button>
        <Button
          alignSelf="center"
          icon={<Fontisto name="airplay" size={24} color="black" />}
          size="$6">
          Large
        </Button>
        <XStack gap="2" justifyContent="center">
          <Button size="$3" theme="yellow">
            Active
          </Button>
          <Button size="$3" variant="outlined">
            Outlined
          </Button>
        </XStack>
        <XStack gap="2">
          <Button themeInverse size="$3">
            Inverse
          </Button>
          <Button iconAfter={<Feather name="activity" size={24} color="black" />} size="$3">
            iconAfter
          </Button>
        </XStack>
        <XGroup>
          <XGroup.Item>
            <Button width="50%" size="$2" disabled opacity={0.5}>
              disabled
            </Button>
          </XGroup.Item>

          <XGroup.Item>
            <Button width="50%" size="$2" chromeless>
              chromeless
            </Button>
          </XGroup.Item>
        </XGroup>
      </YStack>
      <ScrollView style={{ padding: 20 }} contentContainerStyle={{ gap: 12 }}>
        <YStack gap="3">
          <Button theme="active">active</Button>
          <Button theme="alt1">alt1</Button>
          <Button theme="alt2">alt2</Button>
          <Button theme="blue">blue</Button>
          <Button theme="blue_active">blue_active</Button>
          <Button theme="blue_alt1">blue_alt1</Button>
          <Button theme="blue_alt2">blue_alt2</Button>
          <Button theme="dark">dark</Button>
          <Button theme="dark_active">dark_active</Button>
        </YStack>
      </ScrollView>
    </View>
  );
};

export default Buttoncomp;
