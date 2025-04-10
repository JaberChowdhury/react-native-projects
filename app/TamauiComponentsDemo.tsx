import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import React from 'react';
import { Link } from 'expo-router';
import { Button } from 'tamagui';

export default function TamauiComponentsDemo() {
  return (
    <Container>
      <Link href="/ui/Button" asChild>
        <Button>Button</Button>
      </Link>
    </Container>
  );
}
