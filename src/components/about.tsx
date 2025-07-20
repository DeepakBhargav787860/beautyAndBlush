import { Container, Grid, Image, Stack, Text, Title, Box } from "@mantine/core";

export default function About() {
  return (
    <Box py="xl">
      <Container>
        <Grid gutter="xl" align="center">
          <Grid.Col span={12} md={6}>
            <Image
              radius="xl"
              src="https://images.unsplash.com/photo-1589987601901-2f38e2b27d0f?auto=format&fit=crop&w=800&q=80"
              alt="Our Studio"
            />
          </Grid.Col>

          <Grid.Col span={12} md={6}>
            <Stack spacing="sm">
              <Title order={2} style={{ color: "#cc3366", fontWeight: 700 }}>
                About Glamify Parlor
              </Title>

              <Text size="md">
                Welcome to <strong>Glamify Parlor</strong>, where beauty meets
                elegance. We’re passionate about making every client feel
                confident and radiant through personalized beauty treatments.
              </Text>

              <Text size="md">
                Founded in 2022, Glamify has grown into a trusted name in beauty
                and self-care. Our talented stylists, beauticians, and skincare
                experts ensure a premium salon experience every time you visit.
              </Text>

              <Text size="md">
                <strong>Our Mission:</strong> To empower confidence through
                professional beauty services in a relaxing, welcoming
                environment.
              </Text>

              <Text size="md">
                <strong>Core Values:</strong> Luxury | Cleanliness | Innovation
                | Warmth
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
