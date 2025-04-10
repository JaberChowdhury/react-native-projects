import { View, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
// import { Button } from '../../components/Button';
import { XGroup, XStack, YStack, Button } from 'tamagui';
const Buttoncomp = () => {
  return (
    <View>
      <YStack padding="20" gap="3">
        <Button>Plain</Button>
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
    </View>
  );
};

export default Buttoncomp;
