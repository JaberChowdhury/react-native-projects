import { StatusBar } from 'expo-status-bar';
import { Platform, Text } from 'react-native';
import '../global.css';
import GlobalModel from '~/components/GlobalModel';

import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <>
      <GlobalModel />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </>
  );
}
