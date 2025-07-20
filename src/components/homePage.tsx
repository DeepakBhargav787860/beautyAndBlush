import {
  Box,
  Button,
  Center,
  Container,
  Stack,
  Text,
  Title,
  Image,
  Grid,
  Group,
} from "@mantine/core";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://images.unsplash.com/photo-1582719478185-43861d2fbfa4?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        paddingTop: "5rem",
        color: "white",
      }}
    >
      <Container>
        <Grid gutter="xl">
          <Grid.Col span={12} md={6}>
            <Stack spacing="md">
              <Title order={1} style={{ fontWeight: 800, fontSize: "3rem" }}>
                Welcome to Glamify Parlor
              </Title>
              <Text size="lg">
                Elevate your beauty experience with our luxurious services
                tailored just for you.
              </Text>
              <Group>
                <Button
                  component={Link}
                  to="/services"
                  color="pink"
                  size="md"
                  radius="xl"
                >
                  Our Services
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  variant="white"
                  size="md"
                  radius="xl"
                >
                  Book Appointment
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={12} md={6}>
            <Image
              radius="xl"
              src="https://images.unsplash.com/photo-1629567415806-c37cb8f1e229?auto=format&fit=crop&w=800&q=80"
              alt="Parlor Look"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
