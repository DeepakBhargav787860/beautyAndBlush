import { useEffect, useState } from "react";
import { Box, Container, Group, Text, Button, Transition, ActionIcon } from "@mantine/core";
import { motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
        py="md"
      >
        <Container size="lg">
          <Group position="apart">
            {/* Logo */}
            <Text
              fw={700}
              size="xl"
              sx={{
                fontFamily: "Cormorant Garamond, serif",
                color: scrolled ? "#000" : "#fff",
              }}
            >
              BeautyBlush
            </Text>

            {/* Desktop Nav */}
            <Group
              spacing="lg"
              sx={{
                "@media (max-width: 768px)": { display: "none" },
              }}
            >
              {["Home", "Services", "About", "Contact"].map((item) => (
                <Text
                  key={item}
                  sx={{
                    color: scrolled ? "#000" : "#fff",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: scrolled ? "#ff007f" : "#ffb3d9",
                    },
                  }}
                >
                  {item}
                </Text>
              ))}
              <Button
                radius="xl"
                color="pink"
                sx={{
                  color: scrolled ? "#fff" : "#000",
                  backgroundColor: scrolled ? "#000" : "#fff",
                  "&:hover": {
                    backgroundColor: scrolled ? "#333" : "#f1f1f1",
                  },
                }}
              >
                Book Now
              </Button>
            </Group>

            {/* Mobile Burger Icon */}
            <Box
              onClick={() => setMenuOpen(!menuOpen)}
              sx={{
                width: 30,
                height: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                "@media (min-width: 769px)": { display: "none" },
              }}
            >
              {/* Animated burger lines */}
              <Box
                sx={{
                  height: 3,
                  borderRadius: 3,
                  backgroundColor: scrolled ? "#000" : "#fff",
                  transition: "transform 0.4s ease, background-color 0.3s ease",
                  transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                }}
              />
              <Box
                sx={{
                  height: 3,
                  borderRadius: 3,
                  backgroundColor: scrolled ? "#000" : "#fff",
                  transition: "opacity 0.3s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <Box
                sx={{
                  height: 3,
                  borderRadius: 3,
                  backgroundColor: scrolled ? "#000" : "#fff",
                  transition: "transform 0.4s ease, background-color 0.3s ease",
                  transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                }}
              />
            </Box>
          </Group>
        </Container>
      </Box>

      {/* Mobile Menu Overlay */}
      <Transition
        mounted={menuOpen}
        transition="fade"
        duration={300}
        timingFunction="ease"
      >
        {(styles) => (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles}
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              color: "white",
              zIndex: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {/* Close Button */}
            <ActionIcon
              variant="transparent"
              size="xl"
              onClick={() => setMenuOpen(false)}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                color: "white",
                "&:hover": { color: "#ff69b4" },
                transition: "color 0.3s ease",
              }}
            >
              <IconX size={32} />
            </ActionIcon>

            {/* Nav Links */}
            {["Home", "Services", "About", "Contact"].map((item) => (
              <Text
                key={item}
                size="xl"
                fw={600}
                sx={{
                  letterSpacing: 1,
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#ff69b4" },
                }}
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item}
              </Text>
            ))}

            <Button
              size="lg"
              radius="xl"
              color="pink"
              sx={{
                width: "60%",
                fontSize: "18px",
                "&:hover": { backgroundColor: "#ff85c1" },
              }}
              onClick={() => setMenuOpen(false)} // Optional: close menu on button click
            >
              Book Now
            </Button>
          </Box>
        )}
      </Transition>
    </>
  );
}

export default Header;
