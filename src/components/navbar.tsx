import {
  Container,
  Group,
  Burger,
  Drawer,
  Stack,
  Button,
  Anchor,
  rem,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconScissors } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function HeaderNavbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Box
      component="header"
      sx={{
        borderBottom: '1px solid #eee',
        backgroundColor: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container
        size="lg"
        py="md"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        {/* Logo */}
        <Group>
          <IconScissors size={28} stroke={2} color="#e91e63" />
          <strong style={{ fontSize: rem(20), color: '#e91e63' }}>Beauty Parlor</strong>
        </Group>

        {/* Desktop Menu */}
        <Group spacing="xl" className="desktop-menu">
          {links.map((link) => (
            <Anchor
              key={link.label}
              component={Link}
              to={link.to}
              style={{
                fontWeight: 500,
                fontSize: rem(16),
                color: '#333',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Anchor>
          ))}
          <Button
            variant="gradient"
            gradient={{ from: 'pink', to: 'red' }}
            radius="xl"
            component={Link}
            to="/parlour"
          >
            Parlour
          </Button>
        </Group>

        {/* Mobile Burger */}
        <Box className="mobile-menu">
          <Burger opened={opened} onClick={toggle} />
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          opened={opened}
          onClose={close}
          title="Menu"
          padding="md"
          size="75%"
          className="mobile-menu"
          styles={{
            body: {
              marginTop: rem(20), // Adds spacing so nothing is hidden
            },
          }}
        >
          <Stack spacing="md" mt="sm">
            {links.map((link) => (
              <Anchor
                key={link.label}
                component={Link}
                to={link.to}
                onClick={close}
                style={{
                  fontSize: rem(18),
                  fontWeight: 500,
                  color: '#333',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Anchor>
            ))}
            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'red' }}
              radius="xl"
              component={Link}
              to="/parlour"
              onClick={close}
            >
              Parlour
            </Button>
          </Stack>
        </Drawer>
      </Container>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
          }
          @media (min-width: 768px) {
            .mobile-menu {
              display: none !important;
            }
          }
        `}
      </style>
    </Box>
  );
}
