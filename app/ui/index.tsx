import { Container } from '~/components/Container';
import { Link } from 'expo-router';
import { Button, YGroup } from 'tamagui';

const routes = {
  home: '/',
  ui: {
    button: '/ui/Button',
  },
} as const;

type AppRoute = typeof routes.home | typeof routes.ui.button;

interface ComponentDemo {
  href: AppRoute;
  title: string;
}

export default function TamauiComponentsDemo() {
  const uiData: ComponentDemo[] = [{ href: routes.ui.button, title: 'Button' }];

  return (
    <Container>
      <YGroup>
        {uiData.map((item, id) => (
          <Link key={id} href={item.href} asChild>
            <Button theme="purple_alt1">{item.title}</Button>
          </Link>
        ))}
      </YGroup>
    </Container>
  );
}
