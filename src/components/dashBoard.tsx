import {
  Container,
  Title,
  Text,
  Image,
  SimpleGrid,
  Card,
  Button,
  Stack,
  Center,
  Box,
} from "@mantine/core";
import image1 from "../../public/images/1.jpg"
import image2 from "../../public/images/2.jpg"
const DashBoard = () => {
  return (
    <Box bg="#fffaf8">
      {/* Hero Section */}
      <Box
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523413651479-597eb2da0ad6')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0",
          color: "white",
        }}
      >
        <Container>
          <Title order={1} size="3rem" align="center">
            The AJ Photography
          </Title>
          <Text size="lg" align="center" mt="sm">
            Capturing Timeless Wedding & Pre-Wedding Moments
          </Text>
        </Container>
      </Box>

      {/* About Section */}
      <Container my="xl">
        <SimpleGrid
          cols={2}
          spacing="lg"
          breakpoints={[{ maxWidth: "768px", cols: 1 }]}
        >
          <Image src={image1} radius="md" alt="About Wedding" />
          <Stack justify="center">
            <Title order={2}>About Us</Title>
            <Text>
              We are passionate storytellers who specialize in wedding and
              pre-wedding photography. From candid shots to cinematic memories,
              we preserve every heartfelt moment.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Services Section */}
      <Container my="xl">
        <Title align="center" order={2} mb="xl">
          Our Services
        </Title>
        <SimpleGrid
          cols={2}
          spacing="xl"
          breakpoints={[
            { maxWidth: "48em", cols: 1 }, // 768px and below
          ]}
        >
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image src={image2} height={200} alt="Wedding" />
            </Card.Section>
            <Title order={3} mt="md">
              Wedding Photography
            </Title>
            <Text mt="xs">
              Elegant, emotional, and unforgettable wedding moments captured
              with creativity.
            </Text>
          </Card>

          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image src={image1} height={200} alt="Pre-Wedding" />
            </Card.Section>
            <Title order={3} mt="md">
              Pre-Wedding Shoots
            </Title>
            <Text mt="xs">
              Beautiful outdoor or studio pre-wedding concepts tailored just for
              you.
            </Text>
          </Card>
        </SimpleGrid>
      </Container>

      {/* CTA Section */}
      <Box bg="pink.1" py="xl">
        <Container>
          <Center>
            <Stack align="center">
              <Title order={2}>Ready to Capture Your Story?</Title>
              <Text align="center">
                Contact us today and let us make your wedding memories eternal.
              </Text>
              <Button size="md" color="pink">
                Book Your Shoot
              </Button>
            </Stack>
          </Center>
        </Container>
      </Box>
    </Box>
  );
};

export default DashBoard;
