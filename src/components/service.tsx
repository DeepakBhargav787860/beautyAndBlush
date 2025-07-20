import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  SimpleGrid,
  Container,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Bridal Makeup",
    description: "Elegant and flawless bridal makeup for your special day.",
    image:
      "https://images.unsplash.com/photo-1587049352843-24d28e3b4058?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hair Styling",
    description: "Trendy haircuts, styling, and treatments by experts.",
    image:
      "https://images.unsplash.com/photo-1611309452650-3f52f96b4849?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Facials & Skincare",
    description: "Rejuvenate your skin with our relaxing facial services.",
    image:
      "https://images.unsplash.com/photo-1612305791234-ec633b946011?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Nail Art",
    description: "Creative and long-lasting nail art with vibrant designs.",
    image:
      "https://images.unsplash.com/photo-1621517160728-0a37770e7d50?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Services() {
  return (
    <Container py="xl">
      <Title
        order={2}
        align="center"
        mb="xl"
        style={{ fontWeight: 700, color: "#cc3366" }}
      >
        Our Services
      </Title>

      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 },
        ]}
        spacing="xl"
      >
        {services.map((service, index) => (
          <Card key={index} shadow="lg" radius="md" withBorder padding="md">
            <Card.Section>
              <Image src={service.image} height={200} alt={service.title} />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{service.title}</Text>
              <Badge color="pink" variant="light">
                Popular
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              {service.description}
            </Text>

            <Button
              component={Link}
              to="/contact"
              fullWidth
              mt="md"
              radius="xl"
              color="pink"
            >
              Book Now
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
