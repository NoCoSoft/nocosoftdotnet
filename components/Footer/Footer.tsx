'use client';

import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPhone,
} from '@tabler/icons-react';
import { Anchor, Box, Container, Divider, Grid, Group, Stack, Text } from '@mantine/core';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" bg="goldenYellow.9" c="white">
      <Container size="lg" py={60}>
        <Grid gutter="xl">
          {/* Company Info */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="md">
              <Text
                size="xl"
                fw={700}
                style={{
                  background:
                    'linear-gradient(135deg, var(--mantine-color-deepBlue-4) 0%, var(--mantine-color-deepBlue-6) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                NoCoSoft
              </Text>
              <Text size="sm" c="dimmed">
                Professional web solutions for Northern Colorado businesses.
              </Text>
            </Stack>
          </Grid.Col>

          {/* Quick Links */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="sm">
              <Text fw={600} size="sm">
                Quick Links
              </Text>
              <Stack gap="xs">
                <Anchor component={Link} href="/" size="sm" c="dimmed">
                  Home
                </Anchor>
                <Anchor component={Link} href="/services" size="sm" c="dimmed">
                  Services
                </Anchor>
                <Anchor component={Link} href="/work" size="sm" c="dimmed">
                  Work
                </Anchor>
                <Anchor component={Link} href="/about" size="sm" c="dimmed">
                  About
                </Anchor>
                <Anchor component={Link} href="/contact" size="sm" c="dimmed">
                  Contact
                </Anchor>
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Services */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="sm">
              <Text fw={600} size="sm">
                Services
              </Text>
              <Stack gap="xs">
                <Text size="sm" c="dimmed">
                  Website Design
                </Text>
                <Text size="sm" c="dimmed">
                  Web Development
                </Text>
                <Text size="sm" c="dimmed">
                  SEO Optimization
                </Text>
                <Text size="sm" c="dimmed">
                  Maintenance & Support
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Contact Info */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="sm">
              <Text fw={600} size="sm">
                Get in Touch
              </Text>
              <Stack gap="xs">
                <Group gap="xs">
                  <IconMail size={16} />
                  <Anchor href="mailto:hello@nocosoft.com" size="sm" c="dimmed">
                    hello@nocosoft.com
                  </Anchor>
                </Group>
                <Group gap="xs">
                  <IconPhone size={16} />
                  <Text size="sm" c="dimmed">
                    (970) 555-0123
                  </Text>
                </Group>
                <Group gap="xs">
                  <IconMapPin size={16} />
                  <Text size="sm" c="dimmed">
                    Northern Colorado
                  </Text>
                </Group>
              </Stack>

              {/* Social Links */}
              <Group gap="sm" mt="sm">
                <Anchor
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  c="dimmed"
                  style={{ display: 'flex' }}
                >
                  <IconBrandLinkedin size={20} />
                </Anchor>
                <Anchor
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  c="dimmed"
                  style={{ display: 'flex' }}
                >
                  <IconBrandGithub size={20} />
                </Anchor>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my="lg" color="gray.8" />

        {/* Bottom Bar */}
        <Group justify="space-between" align="center">
          <Text size="sm" c="dimmed">
            © {currentYear} NoCoSoft. All rights reserved.
          </Text>
          <Group gap="md">
            <Anchor component={Link} href="/privacy" size="sm" c="dimmed">
              Privacy Policy
            </Anchor>
            <Anchor component={Link} href="/terms" size="sm" c="dimmed">
              Terms of Service
            </Anchor>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
