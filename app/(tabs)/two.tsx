import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { AlertDialog, YStack, XStack, Text, Image } from 'tamagui';
import { Button } from '~/components/Button';
export default function Home() {
  const IMAGE_URL =
    'https://images.unsplash.com/photo-1612176894219-8493bf9b9b1c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />
      <View style={styles.container}>
        return (
        <AlertDialog native>
          <AlertDialog.Trigger asChild>
            <Button title="Show Alert">
              {' '}
              {/* <LinearGradient
                width="$6"
                height="$6"
                borderRadius="$4"
                colors={['$red10', '$yellow10']}
                start={[0, 1]}
                end={[0, 0]}
              /> */}
            </Button>
          </AlertDialog.Trigger>

          <AlertDialog.Portal>
            <AlertDialog.Overlay
              key="overlay"
              animation="quick"
              opacity={0.5}
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
            <AlertDialog.Content
              bordered
              elevate
              key="content"
              animation={[
                'quick',
                {
                  opacity: {
                    overshootClamping: true,
                  },
                },
              ]}
              enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
              exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
              x={0}
              scale={1}
              opacity={1}
              y={0}>
              <YStack gap="$4">
                <AlertDialog.Title>
                  <Text>Accept</Text>
                </AlertDialog.Title>
                <AlertDialog.Description>
                  <Text> By pressing yes, you accept our terms and conditions.</Text>
                </AlertDialog.Description>

                <XStack gap="$3" justifyContent="flex-end">
                  <AlertDialog.Cancel asChild>
                    <Button>
                      <Text>Cancel</Text>
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action asChild>
                    <Button>
                      <Text>Accept</Text>
                    </Button>
                  </AlertDialog.Action>
                </XStack>
              </YStack>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog>
        )
        <XStack>
          <Image
            source={{
              uri: IMAGE_URL,
              width: 200,
              height: 300,
            }}
          />
          <Image
            source={{
              uri: IMAGE_URL,
              width: 200,
              height: 300,
            }}
          />
          <Image
            source={{
              uri: IMAGE_URL,
              width: 200,
              height: 300,
            }}
          />
          <Image
            source={{
              uri: IMAGE_URL,
              width: 200,
              height: 300,
            }}
          />
        </XStack>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
