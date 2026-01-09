'use client';

import Link from 'next/link';
import {
  IconBriefcase,
  IconChefHat,
  IconDeviceMobile,
  IconEdit,
  IconMapPin,
  IconShoppingCart,
  IconTrees,
} from '@tabler/icons-react';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

const StepIcon = ({ number }: { number: number }) => (
  <Box
    style={{
      width: 60,
      height: 60,
      borderRadius: '50%',
      backgroundColor: 'var(--mantine-color-deepBlue-6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'dark.0',
      fontSize: 24,
      fontWeight: 700,
    }}
  >
    {number}
  </Box>
);

const ValuePropositionCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Grid.Col span={{ base: 12, md: 4 }}>
    <Card shadow="sm" padding="lg" radius="md" h="100%">
      <Stack gap="md" align="center" ta="center">
        <ThemeIcon size={60} radius="md" variant="light" color="deepBlue">
          {icon}
        </ThemeIcon>
        <Title order={3} size="h4">
          {title}
        </Title>
        <Text>{description}</Text>
      </Stack>
    </Card>
  </Grid.Col>
);

export default function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="deepBlue.6" c="dark.0" py={80}>
        <Container size="lg">
          <Stack gap="xl" align="center" ta="center">
            <Title order={1} size={48} fw={700}>
              Software Solutions for Northern Colorado Businesses
            </Title>
            <Text size="xl" maw={700} c="white">
              Custom web solutions that help local businesses grow. From restaurants to landscapers,
              we build fast, mobile-friendly websites that turn visitors into customers.
            </Text>
            <Group>
              <Button component={Link} href="/work" size="lg" variant="white" color="deepBlue">
                View Our Work
              </Button>
              <Button component={Link} href="/contact" size="lg" variant="outline" c="white">
                Get a Free Consultation
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* Value Propositions */}
      <Container size="lg" py={80}>
        <Stack gap="xl" align="center">
          <Stack gap="md" align="center" ta="center" maw={700}>
            <Title order={2}>What We Offer</Title>
            <Text size="lg">
              We offer tailored web development services designed to meet the unique needs of your
              business
            </Text>
          </Stack>

          <Grid>
            <ValuePropositionCard
              icon={<IconDeviceMobile size={30} />}
              title="Modern & Mobile-First"
              description="Your customers are searching on their phones. We build websites that look great and load fast on any device."
            />

            <ValuePropositionCard
              icon={<IconEdit size={30} />}
              title="Beautifully Optimized"
              description="From design to SEO, we create websites that not only look great but also perform well in search engines."
            />

            <ValuePropositionCard
              icon={<IconMapPin size={30} />}
              title="Local Expertise"
              description="We understand Northern Colorado businesses and build websites that help you stand out in our community."
            />
          </Grid>
        </Stack>
      </Container>

      {/* Who We Serve */}
      <Box bg="deepBlue.6" py={80}>
        <Container size="lg">
          <Stack gap="xl" align="center">
            <Stack gap="md" align="center" ta="center" maw={700}>
              <Title order={2} c="dark.0">
                Who We Serve
              </Title>
              <Text size="lg" c="dark.0">
                We specialize in helping local businesses establish their online presence
              </Text>
            </Stack>

            <Grid w="100%">
              <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={50} radius="md" variant="light" color="warmRed">
                      <IconChefHat size={25} />
                    </ThemeIcon>
                    <Text fw={600}>Food Industry</Text>
                    <Text size="sm">
                      Showcase your menu, provide online ordering, and offer crucial information
                      about your business
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={50} radius="md" variant="light" color="green">
                      <IconTrees size={25} />
                    </ThemeIcon>
                    <Text fw={600}>Home Services</Text>
                    <Text size="sm">
                      Provide clients images of your work, information on your services, and
                      streamlined contact options
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={50} radius="md" variant="light" color="deepBlue">
                      <IconBriefcase size={25} />
                    </ThemeIcon>
                    <Text fw={600}>Professional Services</Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={50} radius="md" variant="light" color="goldenYellow">
                      <IconShoppingCart size={25} />
                    </ThemeIcon>
                    <Text fw={600}>Retail & Local Shops</Text>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* How It Works */}
      <Container size="lg" py={80}>
        <Stack gap="xl" align="center">
          <Stack gap="md" align="center" ta="center" maw={700}>
            <Title order={2}>How It Works</Title>
            <Text size="lg">Getting your business online is simple</Text>
          </Stack>

          <Grid w="100%">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="md" align="center" ta="center">
                <StepIcon number={1} />
                <Title order={3} size="h4">
                  Consultation
                </Title>
                <Text>We learn about your business and goals in a free consultation</Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="md" align="center" ta="center">
                <StepIcon number={2} />
                <Title order={3} size="h4">
                  Design & Build
                </Title>
                <Text>We create a custom website tailored to your needs and brand</Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="md" align="center" ta="center">
                <StepIcon number={3} />
                <Title order={3} size="h4">
                  Launch & Support
                </Title>
                <Text>Go live with ongoing support and professional advice</Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>

      {/* Social Proof Placeholder */}
      <Box bg="deepBlue.6" py={80}>
        <Container size="lg">
          <Stack gap="xl" align="center" ta="center">
            <Title order={2} c="dark.0">
              Trusted by Northern Colorado Businesses
            </Title>
            <Text size="lg" maw={600} c="dark.0">
              Currently building our portfolio with local businesses. Check back soon for
              testimonials and case studies.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box py={80}>
        <Container size="lg">
          <Stack gap="xl" align="center" ta="center">
            <Title order={2}>Ready to grow your online presence?</Title>
            <Text size="lg" maw={600}>
              Let's talk about how a professional website can help your business attract more
              customers
            </Text>
            <Group>
              <Button component={Link} href="/contact" size="lg" variant="white" color="deepBlue">
                Get Started
              </Button>
              <Button component={Link} href="/services" size="lg" variant="outline">
                Learn More About Our Services
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
