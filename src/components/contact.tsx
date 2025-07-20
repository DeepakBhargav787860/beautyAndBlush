import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconPhoneCall,
  IconMail,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export default function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) => (value.length < 2 ? "Name is too short" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box py="xl">
      <Container>
        <Title order={2} align="center" mb="xl" style={{ color: "#cc3366" }}>
          Contact Us
        </Title>

        <Grid gutter="xl">
          {/* Contact Form */}
          <Grid.Col span={12} md={6}>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <Stack spacing="md">
                <TextInput
                  label="Your Name"
                  placeholder="Enter your name"
                  {...form.getInputProps("name")}
                  required
                />
                <TextInput
                  label="Email"
                  placeholder="you@example.com"
                  {...form.getInputProps("email")}
                  required
                />
                <Textarea
                  label="Message"
                  placeholder="Write your message..."
                  minRows={4}
                  {...form.getInputProps("message")}
                  required
                />
                <Button type="submit" color="pink" radius="xl">
                  Send Message
                </Button>
              </Stack>
            </form>
          </Grid.Col>

          {/* Contact Info + Map */}
          <Grid.Col span={12} md={6}>
            <Stack spacing="lg">
              <Group>
                <IconPhoneCall color="#cc3366" />
                <Text>+91 98765 43210</Text>
              </Group>

              <Group>
                <IconMail color="#cc3366" />
                <Text>glamifyparlor@gmail.com</Text>
              </Group>

              <Group>
                <IconBrandWhatsapp color="#25D366" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#25D366" }}
                >
                  Chat on WhatsApp
                </a>
              </Group>

              <Box style={{ borderRadius: 12, overflow: "hidden" }}>
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2167637817534!2d73.85043641489217!3d18.520430687408934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0867d6c1d5b%3A0x10d1670d5e1c61b!2sSalon%20XYZ!5e0!3m2!1sen!2sin!4v1631541125215!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
