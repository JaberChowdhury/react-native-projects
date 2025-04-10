import { Stack, Link } from 'expo-router';
import { YStack } from 'tamagui';

import { Button } from 'tamagui';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      {/* <Stack.Screen options={{ title: 'Home' }} /> */}
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <YStack
          style={{
            gap: 8,
          }}>
          <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
            <Button themeInverse>Show Detasil</Button>
          </Link>
          <Link href="/ProgressDemo" asChild>
            <Button themeInverse>Progress Demo</Button>
          </Link>
          <Link href="/Bearscounter" asChild>
            <Button themeInverse>Bears counter</Button>
          </Link>
          <Link href="/TamauiComponentsDemo" asChild>
            <Button themeInverse>All demo</Button>
          </Link>
        </YStack>
      </Container>
    </>
  );
}
