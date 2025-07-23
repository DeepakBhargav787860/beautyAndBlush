import React, { forwardRef, useRef } from "react";
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  List,
  Paper,
  rem,
  Select,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { motion } from "framer-motion";

import Header from "./navbar";
import Autoplay from "embla-carousel-autoplay";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

const MotionTitle = motion(Title);
//const MotionBox = motion(Box);
//logo
import logo from "../../public/images/logo1.jpeg"
//service
import service1 from "../../public/images/facial.jpg";
import service2 from "../../public/images/hair.jpeg";
import service3 from "../../public/images/hair.jpeg";
//slider
import slider1 from "../../public/images/slider1.jpg";
import slider2 from "../../public/images/slider2.webp";
import slider3 from "../../public/images/slider3.avif";
import slider4 from "../../public/images/slider4.avif";
//galery
import galery1 from "../../public/images/ec00bfd5416c5c0fe76fc10ed95e9b2c.jpg";

//testimonials
import testimonials1 from "../../public/images/1.jpg";

const services = [
  {
    title: "Facial Treatments",
    description:
      "Revitalize your skin with deep cleansing, hydration and glow-enhancing facials.",
    image: service1,
  },
  {
    title: "Hair Care",
    description:
      "Relax your muscles and relieve stress with our professional body massage services.",
    image: service2,
  },
  {
    title: "Manicure & Pedicure",
    description:
      "Pamper your hands and feet with nail care and relaxing spa therapy.",
    image: service3,
  },
];

const slides = [
  {
    title: "Feel Natural, Be Natural",
    subtitle: "Relax. Refresh. Recharge.",
    image: slider1,
  },
  {
    title: "Pamper Yourself Today",
    subtitle: "Luxury Spa Treatments & Beauty Care",
    image: slider2,
  },
  {
    title: "Feel Natural, Be Natural",
    subtitle: "Relax. Refresh. Recharge.",
    image: slider3,
  },
  {
    title: "Pamper Yourself Today",
    subtitle: "Luxury Spa Treatments & Beauty Care",
    image: slider4,
  },
];

const galleryImages = [
  galery1,
  galery1,
  galery1,
  galery1,
  galery1,
  galery1,
  galery1,
];
const testimonials = [
  {
    name: "Jane Doe",
    role: "Artist",
    photo: testimonials1,
    feedback: "Amazing experience!",
  },
  {
    name: "Jane Doe",
    role: "Artist",
    photo: testimonials1,
    feedback: "Amazing experience!",
  },
  {
    name: "Jane Doe",
    role: "Artist",
    photo: testimonials1,
    feedback: "Amazing experience!",
  },
  {
    name: "Jane Doe",
    role: "Artist",
    photo: testimonials1,
    feedback: "Amazing experience!",
  },
];

export const LandingPage = () => {
  const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Header />
        <Carousel
          slideSize="100%"
          height="100vh"
          loop
          withIndicators
          controlsOffset="xs"
          styles={{
            indicator: {
              backgroundColor: "white",
            },
          }}
        >
          {slides.map((slide, idx) => (
            <Carousel.Slide key={idx}>
              <Box
                sx={{
                  position: "relative",
                  height: "100vh",
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                />
                <Container
                  size="lg"
                  sx={{
                    position: "absolute",
                    top: "80%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    color: "white",
                  }}
                >
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Title
                      order={1}
                      size="60px"
                      mb="md"
                      sx={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {slide.title}
                    </Title>
                    <Text size="lg" mb="xl">
                      {slide.subtitle}
                    </Text>
                    <Button size="md" radius="xl" color="pink">
                      Make Appointment
                    </Button>
                  </Box>
                </Container>
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>
      <Box component="section" py={80} sx={{ backgroundColor: "#fffaf7" }}>
        <Container size="lg">
          <Grid align="center" gutter="xl">
            {/* LEFT TEXT SIDE */}
            <Grid.Col span={6}>
              <MotionTitle
                order={2}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                sx={{
                  fontSize: rem(40),
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 600,
                  color: "#3e2d20",
                }}
              >
                Welcome to BeautyBlush
              </MotionTitle>

              <Text
                mt="md"
                size="lg"
                //initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ delay: 0.2, duration: 0.6 }}
                sx={{ color: "#6d4c41" }}
              >
                Experience luxury spa treatments that rejuvenate your body and
                soul. Let us bring out your natural glow with care and
                professionalism.
              </Text>

              <Button
                mt="xl"
                size="md"
                radius="xl"
                color="pink"
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ delay: 0.4, duration: 0.6 }}
              >
                Explore Services
              </Button>
            </Grid.Col>

            <Grid.Col span={6}>
              <Grid gutter="sm">
                <Grid.Col span={6}>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      radius="xl"
                      src={galery1}
                      alt="Spa image 1"
                      sx={{
                        width: "100%",
                        aspectRatio: "3 / 4",
                        objectFit: "cover",
                        borderRadius: rem(100), // capsule shape
                        boxShadow: "lg",
                      }}
                    />
                  </motion.div>
                </Grid.Col>
                <Grid.Col span={6}>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        paddingTop: "30%", // makes a square box
                        position: "relative",
                      }}
                    >
                      <Image
                        radius="xl"
                        src={galery1}
                        alt="Spa image 2"
                        sx={{
                          width: "100%",
                          aspectRatio: "3 / 4",
                          objectFit: "cover",
                          borderRadius: rem(100),
                          boxShadow: "lg",
                        }}
                      />
                    </Box>
                  </motion.div>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
      <Box
        component="section"
        py={100}
        sx={{
          backgroundColor: "#ffffff",
        }}
      >
        <Container size="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            mb="xl"
            ta="center"
          >
            <Title
              order={2}
              sx={{
                fontSize: rem(40),
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 700,
                color: "#3e2d20",
              }}
            >
              Our Signature Services
            </Title>
            <Text
              size="lg"
              color="dimmed"
              mt="sm"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Indulge in premium treatments tailored to relax, rejuvenate, and
              enhance your natural beauty.
            </Text>
          </Box>

          {/* Services Grid */}
          <Grid gutter="xl">
            {services.map((service, index) => (
              <Grid.Col key={index} span={12} sm={6} md={4}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: rem(16),
                      overflow: "hidden",
                      cursor: "pointer",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                      },
                      "&:hover .overlay": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    {/* Background Image */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        minHeight: "20rem",
                        objectFit: "cover",
                      }}
                    />

                    {/* Hover Overlay */}
                    <Box
                      className="overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        opacity: 0,
                        transform: "translateY(20px)",
                        transition: "all 0.4s ease",
                        padding: rem(20),
                      }}
                    >
                      <Title
                        order={4}
                        sx={{
                          fontFamily: "Cormorant Garamond, serif",
                          fontSize: rem(26),
                          fontWeight: 600,
                          mb: rem(10),
                        }}
                      >
                        {service.title}
                      </Title>
                      <Text size="sm" mb="md">
                        {service.description}
                      </Text>
                      <Button
                        radius="xl"
                        color="pink"
                        size="sm"
                        sx={{ fontWeight: 500 }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </Box>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box
        component="section"
        py={100}
        sx={{
          backgroundColor: "#fffaf7",
        }}
      >
        <Container size="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            mb="xl"
            ta="center"
          >
            <Title
              order={2}
              sx={{
                fontSize: rem(40),
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 700,
                color: "#3e2d20",
              }}
            >
              Our Signature Services
            </Title>
          </Box>

          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                alignItems: "center",
                borderRadius: rem(20),
                padding: rem(30),
                marginBottom: rem(50),
                "@media (max-width: 768px)": {
                  flexDirection: "column",
                  textAlign: "center",
                },
              }}
            >
              {/* Circle Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100, // Slide in from left/right
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <Box
                  sx={{
                    flex: "0 0 auto",
                    width: rem(200),
                    height: rem(200),
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    marginRight: index % 2 === 0 ? rem(50) : 0,
                    marginLeft: index % 2 !== 0 ? rem(50) : 0,
                    "@media (max-width: 768px)": {
                      margin: "0 auto",
                      marginBottom: rem(20),
                    },
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </motion.div>

              {/* Service Text */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30, // Text fades up slightly
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2, // Text enters slightly after the image
                  ease: "easeOut",
                }}
                style={{ flex: 1 }}
              >
                <Box
                  sx={{
                    textAlign: index % 2 === 0 ? "left" : "right",
                    "@media (max-width: 768px)": {
                      textAlign: "center",
                    },
                  }}
                >
                  <Title
                    order={3}
                    sx={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: rem(28),
                      fontWeight: 600,
                      color: "#5d4037",
                      marginBottom: rem(15),
                    }}
                  >
                    {service.title}
                  </Title>
                  <Text size="md" color="dimmed" mb="md">
                    {service.description}
                  </Text>
                  <Button
                    radius="xl"
                    color="pink"
                    size="md"
                    sx={{ fontWeight: 500, marginTop: rem(10) }}
                  >
                    Learn More
                  </Button>
                </Box>
              </motion.div>
            </Box>
          ))}
        </Container>
      </Box>

      <Box
        component="section"
        py={80}
        sx={{
          backgroundColor: "#ffffff",
        }}
      >
        <Container size="xl">
          <Grid gutter={0} align="center">
            {/* LEFT SIDE - TEXT */}
            <Grid.Col md={6} sm={12}>
              <Box p={40}>
                <Title
                  order={2}
                  mb="md"
                  sx={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: rem(40),
                    fontWeight: 700,
                    color: "#3e2d20",
                  }}
                >
                  Want to Make a Booking or Have a Question?
                </Title>
                <Text size="lg" color="dimmed" mb="lg">
                  Call us :-{" "}
                  <Text
                    component="span"
                    weight={700}
                    color="pink"
                    sx={{ fontSize: rem(18) }}
                  >
                    9667247698
                  </Text>{" "}
                  or fill out our online booking & enquiry form and we will
                  contact you.
                </Text>
                <Button
                  size="md"
                  radius="xl"
                  color="pink"
                  sx={{ fontWeight: 600 }}
                >
                  Make an Appointment
                </Button>
              </Box>
            </Grid.Col>

            {/* RIGHT SIDE - IMAGE */}
            <Grid.Col
              md={6}
              sm={12}
              sx={{
                backgroundImage: `url(${
                  new URL("../assets/images/slider4.avif", import.meta.url).href
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: rem(300),
              }}
            />
          </Grid>
        </Container>
      </Box>
      <Box component="section" py={100} sx={{ backgroundColor: "#fffaf7" }}>
        <Container size="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            mb="xl"
            ta="center"
          >
            <Title
              order={2}
              sx={{
                fontSize: rem(36),
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 600,
                color: "#3e2d20",
              }}
            >
              Our Gallery
            </Title>
            <Text size="lg" color="dimmed" mt="sm">
              Explore moments of beauty and tranquility captured in our serene
              spa space.
            </Text>
          </Box>

          <Grid gutter="sm">
            {galleryImages.map((img, idx) => (
              <Grid.Col key={idx} xs={12} sm={6} md={4}>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: rem(16),
                      "&:hover img": { transform: "scale(1.1)" },
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      sx={{
                        width: "100%",
                        height: rem(250),
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box component="section" py={120} sx={{ backgroundColor: "#fff" }}>
        <Container size="lg" ta="center">
          {/* Background Heading */}
          <Box sx={{ position: "relative", mb: 120 }}>
            <Text
              sx={{
                position: "absolute",
                top: "-40px", // move up slightly
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: 80,
                fontWeight: 700,
                color: "#f5f5f5",
                zIndex: 0,
                userSelect: "none",
                lineHeight: 1,
              }}
            >
              Testimonials
            </Text>

            <Title
              order={2}
              sx={{
                position: "relative",
                zIndex: 1,
                fontSize: 36,
                fontWeight: 600,
                color: "#333",
                mb: 16,
              }}
            >
              What Our Clients Say
            </Title>

            <Text color="dimmed" size="lg" maw={600} mx="auto">
              Aliquam a augue suscipit luctus neque purus ipsum neque dolor
              primis a libero tempus blandit and cursus varius and magnis sapien
            </Text>
          </Box>

          {/* Carousel */}
          <Box sx={{ position: "relative" }}>
            <Carousel
              slideSize="33.333333%"
              breakpoints={[{ maxWidth: "md", slideSize: "100%" }]}
              slideGap="xl"
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              align="center"
              loop
              withIndicators
              styles={{
                indicator: {
                  width: 12,
                  height: 12,
                  backgroundColor: "#ccc",
                  "&[data-active]": {
                    backgroundColor: "#333",
                  },
                  marginTop: 32, // space above dots
                },
                indicators: {
                  bottom: "-40px", // move dots lower
                },
              }}
            >
              {testimonials.map((t, idx) => (
                <Carousel.Slide key={idx}>
                  <Paper
                    shadow="md"
                    radius="md"
                    p="xl"
                    ta="center"
                    sx={{
                      transition: "transform 0.4s ease",
                      "&[data-active]": {
                        transform: "scale(1.1)", // zoom active slide
                      },
                    }}
                  >
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={100}
                      height={100}
                      radius="50%"
                      mx="auto"
                      mb="md"
                    />
                    <Text fw={600} fz="lg" mb={4}>
                      {t.name}
                    </Text>
                    <Text color="dimmed" fz="sm" mb="md">
                      {t.role}
                    </Text>
                    <Text fz="sm" color="gray.7" fs="italic">
                      “{t.feedback}”
                    </Text>
                  </Paper>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Box>
        </Container>
      </Box>
      <Box
        component="footer"
        py={80}
        sx={{
          background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
          color: "#333",
          overflow: "hidden",
        }}
      >
        <Container size="lg">
          <Grid gutter={50}>
            {/* Logo and About */}
            <Grid.Col xs={12} md={4}>
              <Box
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Image
                  src={logo}
                  alt="SpaMagic Logo"
                  width={140}
                  mb="md"
                />
                <Text color="dimmed" size="sm" maw={280} lh={1.7}>
                  SpaMagic is your haven for ultimate relaxation. Indulge in our
                  luxurious spa treatments and let your worries melt away.
                </Text>
              </Box>
            </Grid.Col>

            {/* Quick Links */}
            <Grid.Col xs={6} md={4}>
              <Title
                order={4}
                mb="sm"
                fw={700}
                sx={{
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    display: "block",
                    width: 30,
                    height: 2,
                    backgroundColor: "#ff6bcb",
                    marginTop: 4,
                  },
                }}
              >
                Quick Links
              </Title>
              <List spacing="sm" size="sm" center>
                {["Home", "Services", "About Us", "Contact", "Book Now"].map(
                  (link) => (
                    <List.Item
                      key={link}
                      // component="a"
                      //href="#"
                      sx={{
                        transition: "color 0.3s ease",
                        "&:hover": { color: "#ff6bcb" },
                      }}
                    >
                      {link}
                    </List.Item>
                  )
                )}
              </List>
            </Grid.Col>

            {/* Contact & Social */}
            <Grid.Col xs={6} md={4}>
              <Title
                order={4}
                mb="sm"
                fw={700}
                sx={{
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    display: "block",
                    width: 30,
                    height: 2,
                    backgroundColor: "#ff6bcb",
                    marginTop: 4,
                  },
                }}
              >
                Contact Us
              </Title>
              <Text size="sm" mb={4}>
               B-7 surya nagar, satguru maths point, nadi ka phatak benar road jhotwara jaipur rajsthan
              </Text>
              <Text size="sm" mb={4}>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  style={{ color: "#333", fontWeight: 500 }}
                >
                  9667247698
                </a>
              </Text>
              <Text size="sm" mb={8}>
                Email:{" "}
                <a
                  href="mailto:info@spamagic.com"
                  style={{ color: "#333", fontWeight: 500 }}
                >
                  sobhasharma64@gmail.com
                </a>
              </Text>

              {/* Social Icons */}
              <Group spacing="sm" mt="md">
                {[IconBrandFacebook, IconBrandInstagram, IconBrandTwitter].map(
                  (Icon, idx) => (
                    <ActionIcon
                      key={idx}
                      component="a"
                      href={idx==1 ? "https://www.instagram.com/blush_beauty_698?utm_source=qr":"#"}
                      size="lg"
                      radius="xl"
                      variant="light"
                      color="pink"
                      sx={{
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        transition:
                          "transform 0.3s ease, background-color 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                          backgroundColor: "#ff6bcb",
                          color: "#fff",
                        },
                      }}
                    >
                      <Icon size={18} />
                    </ActionIcon>
                  )
                )}
              </Group>
            </Grid.Col>
          </Grid>

          {/* Divider */}
          <Divider my="xl" />

          {/* Bottom Bar */}
          <Text
            size="xs"
            ta="center"
            color="dimmed"
            sx={{
              transition: "color 0.3s ease",
              "&:hover": { color: "#ff6bcb" },
            }}
          >
            © {new Date().getFullYear()} SpaMagic. All rights reserved.
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
