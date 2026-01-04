'use client';

import { useState } from 'react';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
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
  Textarea,
  TextInput,
  ThemeIcon,
  Title,
} from '@mantine/core';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Implement actual form submission (email service, API, etc.)
    // For now, just simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="deepBlue.6" c="white" py={60}>
        <Container size="lg">
          <Stack gap="md" align="center" ta="center">
            <Title order={1} size={42}>
              Get in Touch
            </Title>
            <Text size="xl" maw={700}>
              Let's discuss how we can help your business grow online
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container size="lg" py={80}>
        <Grid gutter="xl">
          {/* Contact Form */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Card shadow="md" padding="xl" radius="md" withBorder>
              <Stack gap="lg">
                <Stack gap="xs">
                  <Title order={2}>Send a Message</Title>
                  <Text c="dimmed">
                    Fill out the form below and I'll get back to you within 24 hours
                  </Text>
                </Stack>

                {submitted && (
                  <Card bg="green.0" padding="md" radius="md">
                    <Text c="green.9" fw={500}>
                      ✓ Message sent successfully! I'll be in touch soon.
                    </Text>
                  </Card>
                )}

                <form onSubmit={handleSubmit}>
                  <Stack gap="md">
                    <TextInput
                      label="Name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.currentTarget.value)}
                      size="md"
                    />

                    <TextInput
                      label="Email"
                      placeholder="your.email@example.com"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.currentTarget.value)}
                      size="md"
                    />

                    <TextInput
                      label="Phone (optional)"
                      placeholder="(555) 123-4567"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.currentTarget.value)}
                      size="md"
                    />

                    <TextInput
                      label="Business Name (optional)"
                      placeholder="Your business name"
                      value={formData.businessName}
                      onChange={(e) => handleChange('businessName', e.currentTarget.value)}
                      size="md"
                    />

                    <Textarea
                      label="Message"
                      placeholder="Tell me about your project..."
                      required
                      minRows={5}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.currentTarget.value)}
                      size="md"
                    />

                    <Button
                      type="submit"
                      size="lg"
                      leftSection={<IconSend size={18} />}
                      loading={loading}
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Contact Info Sidebar */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="lg">
              {/* Contact Details */}
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Stack gap="lg">
                  <Title order={3}>Contact Information</Title>

                  <Stack gap="md">
                    <Group wrap="nowrap">
                      <ThemeIcon size={40} radius="md" variant="light" color="deepBlue">
                        <IconMail size={20} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Text size="sm" c="dimmed">
                          Email
                        </Text>
                        <Text fw={500}>hello@nocosoft.com</Text>
                      </Stack>
                    </Group>

                    <Group wrap="nowrap">
                      <ThemeIcon size={40} radius="md" variant="light" color="deepBlue">
                        <IconPhone size={20} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Text size="sm" c="dimmed">
                          Phone
                        </Text>
                        <Text fw={500}>(970) 555-0123</Text>
                      </Stack>
                    </Group>

                    <Group wrap="nowrap">
                      <ThemeIcon size={40} radius="md" variant="light" color="deepBlue">
                        <IconMapPin size={20} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Text size="sm" c="dimmed">
                          Location
                        </Text>
                        <Text fw={500}>Northern Colorado</Text>
                        <Text size="sm" c="dimmed">
                          Serving Fort Collins, Loveland, Greeley, and surrounding areas
                        </Text>
                      </Stack>
                    </Group>

                    <Group wrap="nowrap">
                      <ThemeIcon size={40} radius="md" variant="light" color="deepBlue">
                        <IconClock size={20} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Text size="sm" c="dimmed">
                          Response Time
                        </Text>
                        <Text fw={500}>Within 24 hours</Text>
                        <Text size="sm" c="dimmed">
                          Monday - Friday, 9am - 6pm MST
                        </Text>
                      </Stack>
                    </Group>
                  </Stack>
                </Stack>
              </Card>

              {/* Social Links */}
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Stack gap="md">
                  <Title order={4}>Connect Online</Title>

                  <Group>
                    <Button
                      component="a"
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="light"
                      leftSection={<IconBrandLinkedin size={18} />}
                    >
                      LinkedIn
                    </Button>
                    <Button
                      component="a"
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="light"
                      leftSection={<IconBrandGithub size={18} />}
                    >
                      GitHub
                    </Button>
                  </Group>
                </Stack>
              </Card>

              {/* Quick Info */}
              <Card shadow="sm" padding="lg" radius="md" bg="gray.0">
                <Stack gap="sm">
                  <Title order={4}>What to Expect</Title>
                  <Text size="sm">
                    When you reach out, I'll respond within 24 hours to schedule a free
                    consultation. We'll discuss your business needs, goals, and how I can help you
                    succeed online.
                  </Text>
                  <Text size="sm" c="dimmed">
                    No pressure, no sales pitches—just a friendly conversation about your project.
                  </Text>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {/* FAQ Section */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <Stack gap="xl">
            <Stack gap="md" align="center" ta="center" maw={700} mx="auto">
              <Title order={2}>Frequently Asked Questions</Title>
            </Stack>

            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="sm">
                    <Text fw={600} size="lg">
                      How much does a website cost?
                    </Text>
                    <Text size="sm" c="dimmed">
                      Pricing varies based on your needs. Basic sites start at $1,500, while more
                      complex projects range from $3,500-$6,000+. I offer free consultations to
                      provide accurate quotes.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="sm">
                    <Text fw={600} size="lg">
                      How long does it take to build a website?
                    </Text>
                    <Text size="sm" c="dimmed">
                      Most projects take 2-4 weeks from start to launch, depending on complexity and
                      how quickly you can provide content and feedback.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="sm">
                    <Text fw={600} size="lg">
                      Do you offer ongoing maintenance?
                    </Text>
                    <Text size="sm" c="dimmed">
                      Yes! I offer monthly maintenance packages starting at $100/month for updates,
                      backups, security, and support.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" h="100%">
                  <Stack gap="sm">
                    <Text fw={600} size="lg">
                      Will I be able to update my website myself?
                    </Text>
                    <Text size="sm" c="dimmed">
                      Absolutely! I'll train you on how to make basic updates, or you can have me
                      handle updates for you—your choice.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="deepBlue.6" c="white" py={80}>
        <Container size="lg">
          <Stack gap="xl" align="center" ta="center">
            <Title order={2}>Ready to Get Started?</Title>
            <Text size="lg" maw={600}>
              Schedule a free consultation to discuss your project—no commitment required
            </Text>
            <Button
              component="a"
              href="mailto:hello@nocosoft.com"
              size="lg"
              variant="white"
              color="deepBlue"
              leftSection={<IconMail size={18} />}
            >
              Email Me Now
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
