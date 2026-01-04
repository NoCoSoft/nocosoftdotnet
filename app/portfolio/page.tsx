'use client';

import Link from 'next/link';
import {
  IconBrandGithub,
  IconCheck,
  IconCode,
  IconDeviceMobile,
  IconExternalLink,
  IconUsers,
} from '@tabler/icons-react';
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

export default function WorkPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.8" c="white" py={60}>
        <Container size="lg">
          <Stack gap="md" align="center" ta="center">
            <Title order={1} size={42}>
              Our Work
            </Title>
            <Text size="xl" maw={700}>
              Building modern, functional web applications that solve real problems
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Portfolio Items */}
      <Container size="lg" py={80}>
        <Stack gap={60}>
          {/* MagicSAK Project */}
          <Card shadow="lg" padding="xl" radius="md" withBorder>
            <Grid gutter="xl">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack gap="lg" h="100%" justify="space-between">
                  <Stack gap="md">
                    <Group gap="sm">
                      <Badge size="lg" variant="filled" color="blue">
                        Featured Project
                      </Badge>
                      <Badge size="lg" variant="light" color="green">
                        Live
                      </Badge>
                    </Group>

                    <Title order={2}>MagicSAK</Title>

                    <Text size="lg" c="dimmed">
                      A comprehensive web application for Magic: The Gathering players
                    </Text>

                    <Text>
                      MagicSAK started as a deck builder for the Archenemy format and evolved into a
                      full-featured MTG utilities platform. The app provides tools for multiple game
                      formats, life tracking, deck building, and community features.
                    </Text>

                    <Stack gap="xs">
                      <Text fw={600}>Key Features:</Text>
                      <List
                        spacing="xs"
                        size="sm"
                        icon={
                          <ThemeIcon color="blue" size={20} radius="xl">
                            <IconCheck size={12} />
                          </ThemeIcon>
                        }
                      >
                        <List.Item>
                          Multi-format support (Archenemy, Planechase, Commander)
                        </List.Item>
                        <List.Item>Advanced deck builder with public/private sharing</List.Item>
                        <List.Item>Life tracker with commander damage tracking</List.Item>
                        <List.Item>User authentication and profiles</List.Item>
                        <List.Item>Community features (likes, cloning, analytics)</List.Item>
                        <List.Item>Content management system with strategy articles</List.Item>
                        <List.Item>Progressive Web App with offline capabilities</List.Item>
                        <List.Item>Mobile-optimized responsive design</List.Item>
                      </List>
                    </Stack>

                    <Stack gap="xs">
                      <Text fw={600}>Technology Stack:</Text>
                      <Group gap="xs">
                        <Badge variant="light">Next.js</Badge>
                        <Badge variant="light">TypeScript</Badge>
                        <Badge variant="light">React</Badge>
                        <Badge variant="light">Mantine UI</Badge>
                        <Badge variant="light">Redux</Badge>
                        <Badge variant="light">Supabase</Badge>
                        <Badge variant="light">Vercel</Badge>
                      </Group>
                    </Stack>
                  </Stack>

                  <Group>
                    <Button
                      component="a"
                      href="https://magicsak.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      leftSection={<IconExternalLink size={18} />}
                    >
                      Visit Site
                    </Button>
                    <Button
                      component="a"
                      href="https://github.com/yourusername/magicsak"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="light"
                      leftSection={<IconBrandGithub size={18} />}
                    >
                      View Code
                    </Button>
                  </Group>
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack gap="md" h="100%">
                  {/* Placeholder for screenshot - replace with actual image */}
                  <Box
                    style={{
                      width: '100%',
                      height: 400,
                      backgroundColor: 'var(--mantine-color-gray-1)',
                      borderRadius: 'var(--mantine-radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid var(--mantine-color-gray-3)',
                    }}
                  >
                    <Stack gap="sm" align="center">
                      <IconCode size={48} color="var(--mantine-color-gray-5)" />
                      <Text c="dimmed">MagicSAK Screenshot</Text>
                      <Text size="sm" c="dimmed">
                        (Add screenshot here)
                      </Text>
                    </Stack>
                  </Box>

                  {/* Project Highlights */}
                  <Grid>
                    <Grid.Col span={6}>
                      <Card shadow="sm" padding="md" radius="md" bg="blue.0">
                        <Stack gap="xs" align="center" ta="center">
                          <ThemeIcon size={40} radius="md" variant="light" color="blue">
                            <IconUsers size={20} />
                          </ThemeIcon>
                          <Text size="sm" fw={600}>
                            User Authentication
                          </Text>
                          <Text size="xs" c="dimmed">
                            Secure login & profiles
                          </Text>
                        </Stack>
                      </Card>
                    </Grid.Col>

                    <Grid.Col span={6}>
                      <Card shadow="sm" padding="md" radius="md" bg="green.0">
                        <Stack gap="xs" align="center" ta="center">
                          <ThemeIcon size={40} radius="md" variant="light" color="green">
                            <IconDeviceMobile size={20} />
                          </ThemeIcon>
                          <Text size="sm" fw={600}>
                            PWA Ready
                          </Text>
                          <Text size="xs" c="dimmed">
                            Install as mobile app
                          </Text>
                        </Stack>
                      </Card>
                    </Grid.Col>
                  </Grid>
                </Stack>
              </Grid.Col>
            </Grid>
          </Card>

          {/* Upcoming Project Placeholder */}
          <Card shadow="md" padding="xl" radius="md" withBorder>
            <Grid gutter="xl">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack gap="lg" h="100%" justify="space-between">
                  <Stack gap="md">
                    <Group gap="sm">
                      <Badge size="lg" variant="light" color="orange">
                        In Progress
                      </Badge>
                    </Group>

                    <Title order={2}>Client Website Modernization</Title>

                    <Text size="lg" c="dimmed">
                      Converting a legacy Wix site to modern tech stack
                    </Text>

                    <Text>
                      Rebuilding an existing client website using modern web technologies for
                      improved performance, maintainability, and user experience.
                    </Text>

                    <Stack gap="xs">
                      <Text fw={600}>Planned Improvements:</Text>
                      <List
                        spacing="xs"
                        size="sm"
                        icon={
                          <ThemeIcon color="orange" size={20} radius="xl">
                            <IconCheck size={12} />
                          </ThemeIcon>
                        }
                      >
                        <List.Item>Faster load times and better performance</List.Item>
                        <List.Item>Improved mobile responsiveness</List.Item>
                        <List.Item>Modern design with better UX</List.Item>
                        <List.Item>Enhanced SEO capabilities</List.Item>
                        <List.Item>Easier content management</List.Item>
                      </List>
                    </Stack>

                    <Text size="sm" c="dimmed" fs="italic">
                      Coming soon - check back for updates!
                    </Text>
                  </Stack>
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Box
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: 300,
                    backgroundColor: 'var(--mantine-color-gray-1)',
                    borderRadius: 'var(--mantine-radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px dashed var(--mantine-color-gray-4)',
                  }}
                >
                  <Stack gap="sm" align="center">
                    <IconCode size={48} color="var(--mantine-color-gray-5)" />
                    <Text c="dimmed">Project In Development</Text>
                  </Stack>
                </Box>
              </Grid.Col>
            </Grid>
          </Card>
        </Stack>
      </Container>

      {/* Skills/Capabilities Section */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <Stack gap="xl">
            <Stack gap="md" align="center" ta="center" maw={700} mx="auto">
              <Title order={2}>Technical Capabilities</Title>
              <Text size="lg" c="dimmed">
                Building with modern, battle-tested technologies
              </Text>
            </Stack>

            <Grid>
              <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md">
                    <Text fw={600}>Frontend</Text>
                    <Stack gap="xs">
                      <Badge variant="light" fullWidth>
                        React / Next.js
                      </Badge>
                      <Badge variant="light" fullWidth>
                        TypeScript
                      </Badge>
                      <Badge variant="light" fullWidth>
                        Mantine / Tailwind
                      </Badge>
                      <Badge variant="light" fullWidth>
                        Responsive Design
                      </Badge>
                    </Stack>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md">
                    <Text fw={600}>Backend</Text>
                    <Stack gap="xs">
                      <Badge variant="light" fullWidth>
                        Node.js
                      </Badge>
                      <Badge variant="light" fullWidth>
                        Supabase
                      </Badge>
                      <Badge variant="light" fullWidth>
                        PostgreSQL
                      </Badge>
                      <Badge variant="light" fullWidth>
                        RESTful APIs
                      </Badge>
                    </Stack>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md">
                    <Text fw={600}>Tools & Platform</Text>
                    <Stack gap="xs">
                      <Badge variant="light" fullWidth>
                        Git / GitHub
                      </Badge>
                      <Badge variant="light" fullWidth>
                        Vercel
                      </Badge>
                      <Badge variant="light" fullWidth>
                        PWA Development
                      </Badge>
                      <Badge variant="light" fullWidth>
                        SEO Optimization
                      </Badge>
                    </Stack>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md">
                    <Text fw={600}>Specialties</Text>
                    <Stack gap="xs">
                      <Badge variant="light" fullWidth>
                        Mobile-First Design
                      </Badge>
                      <Badge variant="light" fullWidth>
                        User Experience
                      </Badge>
                      <Badge variant="light" fullWidth>
                        Performance
                      </Badge>
                      <Badge variant="light" fullWidth>
                        Accessibility
                      </Badge>
                    </Stack>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.8" c="white" py={80}>
        <Container size="lg">
          <Stack gap="xl" align="center" ta="center">
            <Title order={2}>Ready to start your project?</Title>
            <Text size="lg" maw={600}>
              Let's discuss how we can build a website that helps your business grow
            </Text>
            <Group>
              <Button component={Link} href="/contact" size="lg" variant="white" color="blue">
                Get in Touch
              </Button>
              <Button component={Link} href="/services" size="lg" variant="outline" c="white">
                View Services
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
