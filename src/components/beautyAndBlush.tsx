// BeautyAndBlush.tsx
import {
  AppShell,
  Burger,
  Button,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
  rem,
  Anchor,
  Divider,
  useMantineTheme,
  Drawer,
  Box,
  Flex,
  MediaQuery,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import { useRef } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

export default function BeautyAndBlush() {
  const theme = useMantineTheme();
  const [opened, { toggle, close }] = useDisclosure(false);

  const refs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollTo = (section: keyof typeof refs) => {
    refs[section].current?.scrollIntoView({ behavior: "smooth" });
    close();
  };

  return (
    <AppShell
      style={{
        borderBottom: "1px solid #eee",
        height: rem(60),
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 999,
      }}
      padding="md"
      styles={{
        main: {
          paddingTop: rem(60),
          backgroundColor: theme.colors.gray[0],
        },
      }}
    >
      {/* Navbar */}
      <Box
        px="md"
        py="sm"
        bg="white"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 999,
          borderBottom: "1px solid #eee",
        }}
      >
        <Flex justify="space-between" align="center">
          <Title order={3} c="pink">
            Beauty & Blush
          </Title>

          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Group spacing="md">
              {navItems.map((item) => (
                <Anchor
                  key={item.id}
                  onClick={() => scrollTo(item.id as keyof typeof refs)}
                  style={{ cursor: "pointer", fontWeight: 500, color: "#555" }}
                >
                  {item.label}
                </Anchor>
              ))}
            </Group>
          </MediaQuery>

          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger opened={opened} onClick={toggle} />
          </MediaQuery>
        </Flex>
      </Box>

      <Drawer opened={opened} onClose={close} title="Menu" padding="md">
        <Stack>
          {navItems.map((item) => (
            <Anchor
              key={item.id}
              onClick={() => scrollTo(item.id as keyof typeof refs)}
              style={{ fontWeight: 600, fontSize: 18, cursor: "pointer" }}
            >
              {item.label}
            </Anchor>
          ))}
        </Stack>
      </Drawer>

      {/* Sections */}
      <Box ref={refs.home}>
        <Container size="lg" py={80}>
          <Flex gap="lg" align="center" justify="space-between" wrap="wrap">
            <Stack spacing="md" maw={500}>
              <Title order={1}>Welcome to Beauty & Blush</Title>
              <Text size="lg" c="gray.7">
                Discover a new you. Our salon offers premium beauty services
                with a personal touch.
              </Text>
              <Button size="md" color="pink">
                Book Appointment
              </Button>
            </Stack>
            <Image
              src="https://images.unsplash.com/photo-1613284018155-0ed8d3492d6a?auto=format&q=80&w=800"
              radius="xl"
              w={{ base: "100%", md: 400 }}
              alt="Parlor"
            />
          </Flex>
        </Container>
        <Divider />
      </Box>

      <Box ref={refs.about}>
        <Container size="lg" py={60}>
          <Title order={2} align="center" mb="md">
            About Us
          </Title>
          <Text size="md" c="gray.7" align="center" maw={700} mx="auto">
            Beauty & Blush is your go-to beauty parlor for luxury treatments and
            styling. We blend tradition with modern techniques to make you feel
            confident and radiant.
          </Text>
        </Container>
        <Divider />
      </Box>

      <Box ref={refs.services}>
        <Container size="lg" py={60}>
          <Title order={2} align="center" mb="md">
            Our Services
          </Title>
          <Flex justify="center" gap="lg" wrap="wrap">
            {[
              {
                title: "Hair Styling",
                image:
                  "https://images.unsplash.com/photo-1603415526960-f7e0328a118b",
              },
              {
                title: "Bridal Makeup",
                image:
                  "https://images.unsplash.com/photo-1620641707890-49f6ba8659f9",
              },
              {
                title: "Facials",
                image:
                  "https://images.unsplash.com/photo-1556228720-195a672e7d79",
              },
              {
                title: "Manicure & Pedicure",
                image:
                  "https://images.unsplash.com/photo-1612817159947-573b0424c2b2",
              },
            ].map((service) => (
              <Stack
                w={250}
                bg="white"
                p="md"
                style={{
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  borderRadius: "1rem", // ≈ Mantine's 'xl' (16px or 1rem)
                }}
              >
                <Image
                  src={`${service.image}?auto=format&q=80&w=400`}
                  radius="lg"
                  alt={service.title}
                />
                <Title order={4}>{service.title}</Title>
              </Stack>
            ))}
          </Flex>
        </Container>
        <Divider />
      </Box>

      <Box ref={refs.contact}>
        <Container size="sm" py={60}>
          <Title order={2} align="center" mb="md">
            Contact Us
          </Title>
          <Stack spacing="md" align="center">
            <Group spacing="xs">
              <IconPhone size={20} />
              <Text>+91 98765 43210</Text>
            </Group>
            <Group spacing="xs">
              <IconMail size={20} />
              <Text>beautyandblush@email.com</Text>
            </Group>
            <Group spacing="xs">
              <IconMapPin size={20} />
              <Text>123 Beauty Lane, Glam City</Text>
            </Group>
          </Stack>
        </Container>
      </Box>

      <Divider />
      <Container
        size="lg"
        py="sm"
        style={{ textAlign: "center", color: theme.colors.gray[6] }}
      >
        © 2025 Beauty & Blush. All rights reserved.
      </Container>
    </AppShell>
  );
}
