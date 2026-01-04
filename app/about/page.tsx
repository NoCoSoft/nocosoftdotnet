'use client';

import Link from 'next/link';
import {
  IconBulb,
  IconCheck,
  IconCode,
  IconHeart,
  IconRocket,
  IconTool,
  IconUsers,
} from '@tabler/icons-react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

export default function AboutPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.8" c="white" py={60}>
        <Container size="lg">
          <Stack gap="md" align="center" ta="center">
            <Title order={1} size={42}>
              About NoCoSoft
            </Title>
            <Text size="xl" maw={700}>
              Building better websites for Northern Colorado businesses
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Main About Section */}
      <Container size="lg" py={80}>
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="lg" align="center">
              {/* Placeholder for profile photo */}
              <Avatar
                size={200}
                radius={100}
                color="blue"
                variant="filled"
                styles={{
                  placeholder: {
                    fontSize: 60,
                  },
                }}
              >
                H
              </Avatar>
              <Stack gap="xs" align="center">
                <Title order={3}>Hunter</Title>
                <Text c="dimmed">Founder & Developer</Text>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap="lg">
              <Title order={2}>Hi, I'm Hunter</Title>

              <Text>
                I'm a software developer based in Northern Colorado, passionate about helping local
                businesses establish their online presence with modern, effective websites.
              </Text>

              <Text>
                After years of building complex web applications like MagicSAK—a comprehensive
                platform for Magic: The Gathering players—I realized many local businesses struggle
                with outdated websites or no online presence at all. I started NoCoSoft to bridge
                that gap.
              </Text>

              <Text>
                I believe every business deserves a professional website that works for them, not
                against them. Whether you're a restaurant needing to showcase your menu, a
                landscaper wanting to display your portfolio, or any local business looking to grow,
                I'm here to help you succeed online.
              </Text>

              <Text>
                When I'm not coding, you'll find me exploring Colorado's outdoors, playing Magic:
                The Gathering, or continuously learning about the latest web technologies to deliver
                the best solutions for my clients.
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Why Choose NoCoSoft */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <Stack gap="xl">
            <Stack gap="md" align="center" ta="center" maw={700} mx="auto">
              <Title order={2}>Why Choose NoCoSoft?</Title>
              <Text size="lg" c="dimmed">
                What sets us apart from other web developers
              </Text>
            </Stack>

            <Grid>
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="xl" radius="md" h="100%">
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={60} radius="md" variant="light" color="blue">
                      <IconUsers size={30} />
                    </ThemeIcon>
                    <Title order={4}>Local & Accessible</Title>
                    <Text size="sm" c="dimmed">
                      Based right here in Northern Colorado. We understand local businesses and are
                      available for in-person meetings when needed.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="xl" radius="md" h="100%">
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={60} radius="md" variant="light" color="green">
                      <IconCode size={30} />
                    </ThemeIcon>
                    <Title order={4}>Modern Technology</Title>
                    <Text size="sm" c="dimmed">
                      We use the latest web technologies to build fast, secure, and scalable
                      websites that will serve you for years to come.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="xl" radius="md" h="100%">
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={60} radius="md" variant="light" color="orange">
                      <IconHeart size={30} />
                    </ThemeIcon>
                    <Title order={4}>Personalized Service</Title>
                    <Text size="sm" c="dimmed">
                      You work directly with me from start to finish. No middlemen, no
                      outsourcing—just dedicated, personal attention to your project.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="xl" radius="md" h="100%">
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={60} radius="md" variant="light" color="violet">
                      <IconBulb size={30} />
                    </ThemeIcon>
                    <Title order={4}>Clear Communication</Title>
                    <Text size="sm" c="dimmed">
                      No confusing jargon or technical speak. I explain everything in plain language
                      so you understand exactly what you're getting.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="xl" radius="md" h="100%">
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={60} radius="md" variant="light" color="pink">
                      <IconRocket size={30} />
                    </ThemeIcon>
                    <Title order={4}>Results-Focused</Title>
                    <Text size="sm" c="dimmed">
                      Your website should help your business grow. We focus on creating sites that
                      convert visitors into customers.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="xl" radius="md" h="100%">
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={60} radius="md" variant="light" color="cyan">
                      <IconTool size={30} />
                    </ThemeIcon>
                    <Title order={4}>Ongoing Support</Title>
                    <Text size="sm" c="dimmed">
                      I'm here after launch too. Whether you need updates, have questions, or want
                      to add features, I've got you covered.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* My Approach */}
      <Container size="lg" py={80}>
        <Stack gap="xl">
          <Stack gap="md" align="center" ta="center" maw={700} mx="auto">
            <Title order={2}>My Approach</Title>
            <Text size="lg" c="dimmed">
              How I work with clients to create successful websites
            </Text>
          </Stack>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="md" h="100%">
                <Stack gap="md">
                  <ThemeIcon size={50} radius="md" variant="light" color="blue">
                    <IconUsers size={25} />
                  </ThemeIcon>
                  <Title order={4}>Understanding Your Business</Title>
                  <Text size="sm">
                    Before writing a single line of code, I take time to understand your business,
                    your customers, and your goals. Your website should reflect what makes your
                    business unique.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="md" h="100%">
                <Stack gap="md">
                  <ThemeIcon size={50} radius="md" variant="light" color="blue">
                    <IconBulb size={25} />
                  </ThemeIcon>
                  <Title order={4}>Thoughtful Design</Title>
                  <Text size="sm">
                    I prioritize clean, functional design over flashy gimmicks. Every element serves
                    a purpose—helping your customers find what they need and take action.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="md" h="100%">
                <Stack gap="md">
                  <ThemeIcon size={50} radius="md" variant="light" color="blue">
                    <IconCode size={25} />
                  </ThemeIcon>
                  <Title order={4}>Quality Development</Title>
                  <Text size="sm">
                    I build websites with modern, maintainable code. This means your site will be
                    fast, secure, and easy to update or expand as your business grows.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="md" h="100%">
                <Stack gap="md">
                  <ThemeIcon size={50} radius="md" variant="light" color="blue">
                    <IconRocket size={25} />
                  </ThemeIcon>
                  <Title order={4}>Launch & Beyond</Title>
                  <Text size="sm">
                    I don't disappear after launch. I'll train you on managing your content, provide
                    documentation, and remain available for questions or future updates.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>

      {/* What I Value */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <Stack gap="xl">
            <Stack gap="md" align="center" ta="center" maw={700} mx="auto">
              <Title order={2}>What I Value</Title>
            </Stack>

            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <List
                  spacing="md"
                  size="md"
                  icon={
                    <ThemeIcon color="blue" size={24} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text>
                      <strong>Honesty:</strong> I'll tell you what you actually need, not what costs
                      the most
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      <strong>Quality:</strong> I take pride in my work and deliver professional
                      results
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      <strong>Simplicity:</strong> Technology should solve problems, not create them
                    </Text>
                  </List.Item>
                </List>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <List
                  spacing="md"
                  size="md"
                  icon={
                    <ThemeIcon color="blue" size={24} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text>
                      <strong>Accessibility:</strong> Websites should work for everyone, on any
                      device
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      <strong>Responsiveness:</strong> Quick replies, clear updates, respectful of
                      your time
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      <strong>Community:</strong> Supporting local businesses strengthens our whole
                      community
                    </Text>
                  </List.Item>
                </List>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.8" c="white" py={80}>
        <Container size="lg">
          <Stack gap="xl" align="center" ta="center">
            <Title order={2}>Let's Work Together</Title>
            <Text size="lg" maw={600}>
              Ready to give your business the online presence it deserves? I'd love to hear about
              your project.
            </Text>
            <Button component={Link} href="/contact" size="lg" variant="white" color="blue">
              Get in Touch
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
