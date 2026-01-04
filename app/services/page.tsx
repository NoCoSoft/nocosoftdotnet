'use client';

import Link from 'next/link';
import {
  IconBrandGoogle,
  IconCalendar,
  IconChartBar,
  IconCheck,
  IconDeviceMobile,
  IconHeadset,
  IconMail,
  IconSeo,
  IconShoppingCart,
} from '@tabler/icons-react';
import {
  Badge,
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

export default function ServicesPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.8" c="white" py={60}>
        <Container size="lg">
          <Stack gap="md" align="center" ta="center">
            <Title order={1} size={42}>
              Services
            </Title>
            <Text size="xl" maw={700}>
              Comprehensive web solutions tailored to your business needs
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Pricing Tiers */}
      <Container size="lg" py={80}>
        <Stack gap="xl">
          <Stack gap="md" align="center" ta="center" maw={700} mx="auto">
            <Title order={2}>Website Packages</Title>
            <Text size="lg" c="dimmed">
              Choose the package that fits your business best
            </Text>
          </Stack>

          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card shadow="md" padding="xl" radius="md" h="100%" withBorder>
                <Stack gap="lg">
                  <Stack gap="xs">
                    <Badge size="lg" variant="light" color="blue">
                      Basic
                    </Badge>
                    <Title order={3}>Starter Site</Title>
                    <Text c="dimmed">Perfect for getting online quickly</Text>
                  </Stack>

                  <Box>
                    <Text size="sm" c="dimmed">
                      Starting at
                    </Text>
                    <Title order={2}>$1,500</Title>
                  </Box>

                  <List
                    spacing="sm"
                    size="sm"
                    icon={
                      <ThemeIcon color="blue" size={20} radius="xl">
                        <IconCheck size={12} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>Single-page responsive website</List.Item>
                    <List.Item>Mobile-optimized design</List.Item>
                    <List.Item>Contact form</List.Item>
                    <List.Item>Google Maps integration</List.Item>
                    <List.Item>Basic SEO setup</List.Item>
                    <List.Item>1 round of revisions</List.Item>
                    <List.Item>2-week turnaround</List.Item>
                  </List>

                  <Button component={Link} href="/contact" variant="light" fullWidth>
                    Get Started
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card shadow="md" padding="xl" radius="md" h="100%" withBorder>
                <Stack gap="lg">
                  <Stack gap="xs">
                    <Badge size="lg" variant="filled" color="blue">
                      Popular
                    </Badge>
                    <Title order={3}>Professional Site</Title>
                    <Text c="dimmed">Everything you need to shine online</Text>
                  </Stack>

                  <Box>
                    <Text size="sm" c="dimmed">
                      Starting at
                    </Text>
                    <Title order={2}>$3,500</Title>
                  </Box>

                  <List
                    spacing="sm"
                    size="sm"
                    icon={
                      <ThemeIcon color="blue" size={20} radius="xl">
                        <IconCheck size={12} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>Multi-page custom website (up to 5 pages)</List.Item>
                    <List.Item>Professional photography integration</List.Item>
                    <List.Item>Photo gallery/portfolio section</List.Item>
                    <List.Item>Advanced contact forms</List.Item>
                    <List.Item>Google Business Profile optimization</List.Item>
                    <List.Item>Comprehensive SEO</List.Item>
                    <List.Item>Blog/news section (optional)</List.Item>
                    <List.Item>2 rounds of revisions</List.Item>
                    <List.Item>3-4 week turnaround</List.Item>
                  </List>

                  <Button component={Link} href="/contact" fullWidth>
                    Get Started
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card shadow="md" padding="xl" radius="md" h="100%" withBorder>
                <Stack gap="lg">
                  <Stack gap="xs">
                    <Badge size="lg" variant="light" color="blue">
                      Premium
                    </Badge>
                    <Title order={3}>Complete Solution</Title>
                    <Text c="dimmed">Full-featured business website</Text>
                  </Stack>

                  <Box>
                    <Text size="sm" c="dimmed">
                      Starting at
                    </Text>
                    <Title order={2}>$6,000</Title>
                  </Box>

                  <List
                    spacing="sm"
                    size="sm"
                    icon={
                      <ThemeIcon color="blue" size={20} radius="xl">
                        <IconCheck size={12} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>Unlimited pages</List.Item>
                    <List.Item>Custom functionality & integrations</List.Item>
                    <List.Item>Advanced photo galleries</List.Item>
                    <List.Item>Third-party integrations (booking, ordering, etc.)</List.Item>
                    <List.Item>Email marketing setup</List.Item>
                    <List.Item>Analytics & reporting dashboard</List.Item>
                    <List.Item>Content management training</List.Item>
                    <List.Item>3 months maintenance included</List.Item>
                    <List.Item>Priority support</List.Item>
                  </List>

                  <Button component={Link} href="/contact" fullWidth>
                    Get Started
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>

      {/* Additional Services */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <Stack gap="xl">
            <Stack gap="md" align="center" ta="center" maw={700} mx="auto">
              <Title order={2}>Additional Services</Title>
              <Text size="lg" c="dimmed">
                Enhance your website with these add-ons
              </Text>
            </Stack>

            <Grid>
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md">
                    <ThemeIcon size={50} radius="md" variant="light" color="blue">
                      <IconSeo size={25} />
                    </ThemeIcon>
                    <Title order={4}>SEO Optimization</Title>
                    <Text size="sm" c="dimmed">
                      Improve your search rankings and get found by local customers searching for
                      your services.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md">
                    <ThemeIcon size={50} radius="md" variant="light" color="green">
                      <IconBrandGoogle size={25} />
                    </ThemeIcon>
                    <Title order={4}>Google Business Setup</Title>
                    <Text size="sm" c="dimmed">
                      Optimize your Google Business Profile to appear in local searches and Google
                      Maps.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md">
                    <ThemeIcon size={50} radius="md" variant="light" color="orange">
                      <IconShoppingCart size={25} />
                    </ThemeIcon>
                    <Title order={4}>Online Ordering</Title>
                    <Text size="sm" c="dimmed">
                      Integrate with platforms like Square, Toast, or custom ordering solutions for
                      restaurants.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md">
                    <ThemeIcon size={50} radius="md" variant="light" color="violet">
                      <IconCalendar size={25} />
                    </ThemeIcon>
                    <Title order={4}>Booking & Scheduling</Title>
                    <Text size="sm" c="dimmed">
                      Let customers book appointments or reservations directly from your website.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md">
                    <ThemeIcon size={50} radius="md" variant="light" color="pink">
                      <IconMail size={25} />
                    </ThemeIcon>
                    <Title order={4}>Email Marketing</Title>
                    <Text size="sm" c="dimmed">
                      Build your email list and send newsletters to keep customers engaged with your
                      business.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md">
                    <ThemeIcon size={50} radius="md" variant="light" color="cyan">
                      <IconChartBar size={25} />
                    </ThemeIcon>
                    <Title order={4}>Analytics Setup</Title>
                    <Text size="sm" c="dimmed">
                      Track your website visitors and understand how customers find and use your
                      site.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Ongoing Support */}
      <Container size="lg" py={80}>
        <Stack gap="xl">
          <Stack gap="md" align="center" ta="center" maw={700} mx="auto">
            <Title order={2}>Ongoing Support & Maintenance</Title>
            <Text size="lg" c="dimmed">
              Keep your website running smoothly
            </Text>
          </Stack>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="md" padding="xl" radius="md" h="100%" withBorder>
                <Stack gap="lg">
                  <Stack gap="xs">
                    <ThemeIcon size={50} radius="md" variant="light" color="blue">
                      <IconHeadset size={25} />
                    </ThemeIcon>
                    <Title order={3}>Monthly Maintenance</Title>
                  </Stack>

                  <Box>
                    <Title order={2}>$100/month</Title>
                  </Box>

                  <List
                    spacing="sm"
                    size="sm"
                    icon={
                      <ThemeIcon color="blue" size={20} radius="xl">
                        <IconCheck size={12} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>Regular software updates</List.Item>
                    <List.Item>Security monitoring</List.Item>
                    <List.Item>Backup management</List.Item>
                    <List.Item>Up to 2 hours of content updates</List.Item>
                    <List.Item>Email support</List.Item>
                  </List>

                  <Button component={Link} href="/contact" variant="light" fullWidth>
                    Learn More
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="md" padding="xl" radius="md" h="100%" withBorder>
                <Stack gap="lg">
                  <Stack gap="xs">
                    <ThemeIcon size={50} radius="md" variant="light" color="blue">
                      <IconDeviceMobile size={25} />
                    </ThemeIcon>
                    <Title order={3}>Hosting & Domain</Title>
                  </Stack>

                  <Box>
                    <Title order={2}>Custom Quote</Title>
                  </Box>

                  <List
                    spacing="sm"
                    size="sm"
                    icon={
                      <ThemeIcon color="blue" size={20} radius="xl">
                        <IconCheck size={12} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>Fast, reliable hosting</List.Item>
                    <List.Item>Domain registration & management</List.Item>
                    <List.Item>SSL certificate included</List.Item>
                    <List.Item>Professional email setup</List.Item>
                    <List.Item>99.9% uptime guarantee</List.Item>
                  </List>

                  <Button component={Link} href="/contact" variant="light" fullWidth>
                    Get a Quote
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>

      {/* CTA Section */}
      <Box bg="blue.8" c="white" py={80}>
        <Container size="lg">
          <Stack gap="xl" align="center" ta="center">
            <Title order={2}>Not sure which package is right for you?</Title>
            <Text size="lg" maw={600}>
              Schedule a free consultation and we'll help you choose the best solution for your
              business goals and budget.
            </Text>
            <Button component={Link} href="/contact" size="lg" variant="white" color="blue">
              Schedule Free Consultation
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
