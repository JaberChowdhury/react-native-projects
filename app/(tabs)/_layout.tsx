import { Link, Stack, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton';
import { Icon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <Icon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Icon name="code" color={color} />,
        }}
      />{' '}
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
        }}
      />
    </Tabs>
  );
}
