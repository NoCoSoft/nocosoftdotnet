'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconMoon, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Stack,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure, useMounted } from '@mantine/hooks';

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const pathname = usePathname();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Must use useMounted to avoid hydration issues for the color scheme toggle
  const isMounted = useMounted();

  return (
    <Box component="header" style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
      <Container size="lg" py="md">
        <Group justify="space-between" align="center">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Group gap="xs">
              <Text
                size="xl"
                fw={700}
                style={{
                  background:
                    'linear-gradient(135deg, var(--mantine-color-deepBlue-6) 0%, var(--mantine-color-deepBlue-8) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                NoCoSoft
              </Text>
            </Group>
          </Link>

          {/* Desktop Navigation */}
          <Group gap="xs" visibleFrom="sm">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                component={Link}
                href={link.href}
                variant={isActive(link.href) ? 'light' : 'subtle'}
                color={isActive(link.href) ? 'deepBlue' : 'gray'}
              >
                {link.label}
              </Button>
            ))}

            {/* Dark mode toggle */}
            {isMounted && (
              <ActionIcon
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                variant="subtle"
                color="gray"
                size="lg"
                aria-label="Toggle color scheme"
              >
                {computedColorScheme === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />}
              </ActionIcon>
            )}
          </Group>

          {/* Mobile Menu Button */}
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" size="sm" />
        </Group>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={
          <Text
            size="xl"
            fw={700}
            style={{
              background:
                'linear-gradient(135deg, var(--mantine-color-deepBlue-6) 0%, var(--mantine-color-deepBlue-8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            NoCoSoft
          </Text>
        }
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Stack gap="sm">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component={Link}
              href={link.href}
              variant={isActive(link.href) ? 'light' : 'subtle'}
              color={isActive(link.href) ? 'deepBlue' : 'gray'}
              fullWidth
              onClick={closeDrawer}
              size="lg"
            >
              {link.label}
            </Button>
          ))}

          {/* Dark mode toggle for mobile */}
          {isMounted && (
            <Button
              onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
              variant="subtle"
              color="gray"
              fullWidth
              size="lg"
              leftSection={
                computedColorScheme === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />
              }
            >
              {computedColorScheme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          )}
        </Stack>
      </Drawer>
    </Box>
  );
}
