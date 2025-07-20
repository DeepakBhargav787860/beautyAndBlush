import { Container, Group, Burger, Drawer, Stack, Anchor, MediaQuery } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Container fluid px="md" py="md" style={{ borderBottom: '1px solid #ccc' }}>
      <Group position="apart">
        <h1 style={{ fontFamily: 'cursive', color: '#cc3366' }}>Glamify Parlor</h1>

        {/* Desktop links */}
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Group spacing="xl">
            {links.map((link) => (
              <Anchor component={Link} to={link.to} key={link.label}>
                {link.label}
              </Anchor>
            ))}
          </Group>
        </MediaQuery>

        {/* Burger button for mobile */}
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={toggle} />
        </MediaQuery>

        {/* Mobile Drawer Menu */}
        <Drawer opened={opened} onClose={toggle} title="Menu" size="xs" padding="md">
          <Stack>
            {links.map((link) => (
              <Anchor component={Link} to={link.to} key={link.label} onClick={toggle}>
                {link.label}
              </Anchor>
            ))}
          </Stack>
        </Drawer>
      </Group>
    </Container>
  );
}
