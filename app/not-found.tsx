'use client';

import Link from 'next/link';
import { IconArrowLeft, IconHome, IconSearch } from '@tabler/icons-react';
import { Box, Button, Container, Group, Stack, Text, Title } from '@mantine/core';

export default function NotFound() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, var(--mantine-color-gray-0) 0%, var(--mantine-color-gray-1) 100%)',
      }}
    >
      <Container size="sm">
        <Stack gap="xl" align="center" ta="center">
          {/* 404 Number */}
          <Text
            size="120px"
            fw={900}
            lh={1}
            style={{
              background:
                'linear-gradient(135deg, var(--mantine-color-deepBlue-6) 0%, var(--mantine-color-deepBlue-8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.05em',
            }}
          >
            404
          </Text>

          {/* Title and Description */}
          <Stack gap="md" align="center">
            <Title order={1} size={36}>
              Page Not Found
            </Title>
            <Text size="lg" c="dimmed" maw={500}>
              Sorry, we couldn't find the page you're looking for. It might have been moved,
              deleted, or the URL might be incorrect.
            </Text>
          </Stack>

          {/* Icon */}
          <Box
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'var(--mantine-color-deepBlue-0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconSearch size={40} color="var(--mantine-color-deepBlue-6)" />
          </Box>

          {/* Action Buttons */}
          <Group justify="center">
            <Button component={Link} href="/" size="lg" leftSection={<IconHome size={20} />}>
              Go to Homepage
            </Button>
            <Button
              component={Link}
              href="/contact"
              size="lg"
              variant="light"
              leftSection={<IconArrowLeft size={20} />}
            >
              Contact Us
            </Button>
          </Group>

          {/* Helpful Links */}
          <Box mt="xl">
            <Text size="sm" c="dimmed" mb="sm">
              You might be looking for:
            </Text>
            <Group justify="center" gap="md">
              <Text
                component={Link}
                href="/services"
                size="sm"
                c="deepBlue"
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
              >
                Our Services
              </Text>
              <Text
                component={Link}
                href="/work"
                size="sm"
                c="deepBlue"
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
              >
                Our Work
              </Text>
              <Text
                component={Link}
                href="/about"
                size="sm"
                c="deepBlue"
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
              >
                About Us
              </Text>
            </Group>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
