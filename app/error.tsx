'use client';

import Link from 'next/link';
import { IconAlertTriangle, IconHome, IconMail, IconRefresh } from '@tabler/icons-react';
import { Box, Button, Code, Container, Group, Stack, Text, Title } from '@mantine/core';

export default function Error500() {
  const handleRefresh = () => {
    window.location.reload();
  };

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
          {/* 500 Number */}
          <Text
            size="120px"
            fw={900}
            lh={1}
            style={{
              background:
                'linear-gradient(135deg, var(--mantine-color-warmRed-6) 0%, var(--mantine-color-warmRed-8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.05em',
            }}
          >
            500
          </Text>

          {/* Title and Description */}
          <Stack gap="md" align="center">
            <Title order={1} size={36}>
              Server Error
            </Title>
            <Text size="lg" c="dimmed" maw={500}>
              Oops! Something went wrong on our end. We've been notified and are working to fix it.
              Please try again in a few moments.
            </Text>
          </Stack>

          {/* Icon */}
          <Box
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'var(--mantine-color-warmRed-0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconAlertTriangle size={40} color="var(--mantine-color-warmRed-6)" />
          </Box>

          {/* Action Buttons */}
          <Group justify="center">
            <Button size="lg" leftSection={<IconRefresh size={20} />} onClick={handleRefresh}>
              Try Again
            </Button>
            <Button
              component={Link}
              href="/"
              size="lg"
              variant="light"
              leftSection={<IconHome size={20} />}
            >
              Go to Homepage
            </Button>
          </Group>

          {/* Contact Support */}
          <Box
            mt="lg"
            p="lg"
            style={{
              backgroundColor: 'var(--mantine-color-gray-0)',
              borderRadius: 'var(--mantine-radius-md)',
            }}
          >
            <Stack gap="sm" align="center">
              <Group gap="xs">
                <IconMail size={20} color="var(--mantine-color-deepBlue-6)" />
                <Text fw={600} size="sm">
                  Need immediate assistance?
                </Text>
              </Group>
              <Text size="sm" c="dimmed">
                If this problem persists, please contact us at{' '}
                <Text
                  component="a"
                  href="mailto:hello@nocosoft.com"
                  c="deepBlue"
                  style={{ textDecoration: 'underline' }}
                >
                  hello@nocosoft.com
                </Text>
              </Text>
            </Stack>
          </Box>

          {/* Error Code (optional, for debugging) */}
          <Box mt="md">
            <Code color="gray" style={{ fontSize: '0.75rem' }}>
              Error Code: 500 - Internal Server Error
            </Code>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
