// import {
//   Container,
//   Title,
//   Text,
//   Button,
//   SimpleGrid,
//   Card,
//   Image,
//   Space,
//   Center,
//   Overlay,
//   Group,
//   Avatar,
//   Accordion,
//   Grid,
//   Paper,
//   rem,
//   useMantineTheme,
// } from '@mantine/core';
// import { Carousel } from '@mantine/carousel';
// import { useScrollIntoView } from '@mantine/hooks';
// import { motion } from 'framer-motion';

// const servicesList = [
//   "Hair Styling & Cutting",
//   "Hair Coloring & Treatments",
//   "Skin Care & Facials",
//   "Makeup Application",
//   "Nail Care & Nail Art",
//   "Hair Removal (Wax & Threading)",
//   "Eyebrow Shaping",
//   "Consultation & Product Advice",
//   "Hygiene & Client Care",
// ];

// const services = [
//   { title: 'Haircuts', description: 'Professional cuts for all hair types', icon: '💇‍♀️' },
//   { title: 'Coloring', description: 'Creative color transformations', icon: '🎨' },
//   { title: 'Styling', description: 'Special occasion styling', icon: '✨' },
//   { title: 'Spa Treatments', description: 'Relaxing treatments for hair & scalp', icon: '💆‍♀️' }
// ];


// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// };

// const staggerChildren = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const galleryImages = [
//   'gallery1.jpg','gallery2.jpg','gallery3.jpg',
//   'gallery4.jpg','gallery5.jpg','gallery6.jpg'
// ];

// const testimonials = [
//   { name: 'Sara K.', text: "Best bridal experience ever!", avatar: '/images/testi1.jpg' },
//   { name: 'Maya R.', text: "Knowledgeable, friendly, and professional.", avatar: '/images/testi2.jpg' },
// ];

// const faqs = [
//   { question: 'How can I book?', answer: 'You can book via the form or WhatsApp link.' },
//   { question: 'What are your hygiene protocols?', answer: 'All tools are sanitized and single-use materials used where possible.' },
// ];

// const LandingPage = () => {
//   const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();
// const theme = useMantineTheme();

//   return (
//     <>
// <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1.2, ease: 'easeOut' }}
//       style={{
//         height: '100vh',
//         position: 'relative',
//         background: 'linear-gradient(135deg, #3e2b3f, #1e0d20)',
//         color: '#fbe9f0',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Floating blurred glow */}
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.5 }}
//         style={{
//           position: 'absolute',
//           top: '-100px',
//           right: '-100px',
//           width: '300px',
//           height: '300px',
//           background: 'radial-gradient(circle, #a26d78, #3e2b3f)',
//           filter: 'blur(100px)',
//           borderRadius: '50%',
//           zIndex: 1,
//           opacity: 0.4,
//         }}
//       />

//       {/* Content */}
//       <Center style={{ height: '100%', position: 'relative', zIndex: 2 }}>
//         <Container size="md" style={{ textAlign: 'center' }}>
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2 }}
//           >
//             <Title
//               order={1}
//               size="3.8rem"
//               weight={700}
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 background: 'linear-gradient(90deg, #e7a977, #fbe9f0)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 marginBottom: '1rem',
//               }}
//             >
//               Blush Beauty Makeup
//             </Title>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.4 }}
//           >
//             <Text size="lg" style={{ opacity: 0.8, fontWeight: 500, marginBottom: '2rem' }}>
//               Where elegance meets expression. Be bold. Be beautiful.
//             </Text>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <Button
//               size="lg"
//               radius="xl"
//               variant="gradient"
//               gradient={{ from: '#e7a977', to: '#fbc2eb' }}
//               style={{ fontWeight: 600 }}
//             >
//               Explore Services
//             </Button>
//           </motion.div>
//         </Container>
//       </Center>

//       {/* Scroll down arrow */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ delay: 1.2 }}
//         style={{
//           position: 'absolute',
//           bottom: 30,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           fontSize: '1.5rem',
//           color: '#fbe9f0',
//         }}
//       >
//         ↓
//       </motion.div>
//     </motion.div>

//       {/* Services */}
//       <Container size="lg" py="xl" ref={targetRef}>
//         <Title align="center" order={2} mb="md" style={{ fontFamily: "'Playfair Display', serif" }}>
//           What We Offer
//         </Title>
//         <SimpleGrid cols={3} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
//           {servicesList.map((s, i) => (
//             <motion.div key={i} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
//               <Card shadow="sm" radius="md" p="lg" style={{ border: '1px solid #f9c5d1' }}>
//                 <Text weight={500} style={{ color: '#a18cd1' }}>{s}</Text>
//               </Card>
//             </motion.div>
//           ))}
//         </SimpleGrid>
//       </Container>

//       {/* Image Slider */}
//       <Container size="lg" py="xl">
//         <Title align="center" order={2} mb="md">Gallery Highlights</Title>
//         <Carousel loop align="center" slideSize="33%" height={300} withIndicators>
//           {galleryImages.map((img, i) => (
//             <Carousel.Slide key={i}>
//               <Image src={`/images/${img}`} alt={`gallery ${i+1}`} radius="md" />
//             </Carousel.Slide>
//           ))}
//         </Carousel>
//       </Container>

//       {/* Video Showcase */}
//       <Container size="md" py="xl">
//         <Title align="center" order={2} mb="md">Our Work in Action</Title>
//         <Center>
//           <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
//             <iframe
//               width="560" height="315"
//               src="https://www.youtube.com/embed/VIDEO_ID"
//               title="Blush Beauty Makeup Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
//               allowFullScreen
//               style={{ borderRadius: '12px' }}
//             />
//           </motion.div>
//         </Center>
//       </Container>

// <Container size="xl" py="xl">
// <motion.div
//   initial="hidden"
//   animate="visible"
//   variants={fadeInUp}
//   transition={{ delay: 0.3 }}
// >
//   <Title order={2} ta="center" mb="xl" c={theme.colors.pink[6]}>
//     Our Services
//   </Title>
// </motion.div>

// <motion.div
//   variants={staggerChildren}
//   initial="hidden"
//   animate="visible"
// >
//   <Grid gutter="xl">
//     {services.map((service, index) => (
//       <Grid.Col key={index} md={6} lg={3}>
//         <motion.div
//           variants={fadeInUp}
//           transition={{ delay: 0.2 + index * 0.1 }}
//         >
//           <Paper 
//             p="xl" 
//             shadow="md" 
//             radius="md"
//             className="hover:shadow-lg transition-shadow duration-300"
//           >
//             <Text size={rem(40)} mb="sm">{service.icon}</Text>
//             <Title order={3} mb="xs">{service.title}</Title>
//             <Text c="dimmed" size="sm">{service.description}</Text>
//           </Paper>
//         </motion.div>
//       </Grid.Col>
//     ))}
//   </Grid>
// </motion.div>
// </Container>

// {/* Testimonials */}
// <Container size="xl" py="xl">
// <motion.div
//   initial="hidden"
//   animate="visible"
//   variants={fadeInUp}
//   transition={{ delay: 0.5 }}
// >
//   <Title order={2} ta="center" mb="xl" c={theme.colors.pink[6]}>
//     Client Testimonials
//   </Title>
// </motion.div>

// <motion.div
//   variants={staggerChildren}
//   initial="hidden"
//   animate="visible"
// >
//   <Grid gutter="xl">
//     {[1, 2, 3].map((item) => (
//       <Grid.Col key={item} md={4}>
//         <motion.div
//           variants={fadeInUp}
//           transition={{ delay: 0.6 + item * 0.1 }}
//         >
//           <Paper 
//             p="xl" 
//             shadow="md" 
//             radius="md"
//             className="bg-gray-50"
//           >
//             <Text italic mb="sm">"Amazing experience! My hair has never looked better."</Text>
//             <Text fw={500}>Sarah J.</Text>
//             <Text size="sm" c="dimmed">Regular Client</Text>
//           </Paper>
//         </motion.div>
//       </Grid.Col>
//     ))}
//   </Grid>
// </motion.div>
// </Container>

//       {/* Testimonials */}
//       <Container size="md" py="xl">
//         <Title align="center" order={2} mb="md">What Clients Say</Title>
//         <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
//           {testimonials.map((t, i) => (
//             <Card key={i} p="lg" radius="md" shadow="xs">
//               <Group>
//                 <Avatar src={t.avatar} alt={t.name} radius="xl" size={48} />
//                 <div>
//                   <Text weight={500}>{t.name}</Text>
//                   <Text size="sm" color="dimmed">“{t.text}”</Text>
//                 </div>
//               </Group>
//             </Card>
//           ))}
//         </SimpleGrid>
//       </Container>

//       {/* FAQ / Consultation */}
//       <Container size="md" py="xl">
//         <Title align="center" order={2} mb="md">Got Questions?</Title>
//         <Accordion variant="separated" radius="md">
//           {faqs.map((item, i) => (
//             <Accordion.Item value={`faq-${i}`} key={i}>
//               <Accordion.Control>{item.question}</Accordion.Control>
//               <Accordion.Panel>{item.answer}</Accordion.Panel>
//             </Accordion.Item>
//           ))}
//         </Accordion>
//         <Center mt="md">
//           <Button radius="xl" variant="gradient" gradient={{ from: '#f6d365', to: '#fba085' }}>
//             Book Consultation
//           </Button>
//         </Center>
//       </Container>

//       {/* Final CTA & Footer */}
//       <Container size="sm" py="xl">
//         <Card shadow="xl" padding="xl" radius="lg" style={{ backgroundColor: '#fdf1f5' }}>
//           <Center style={{ flexDirection: 'column' }}>
//             <Title order={3} mb="sm" style={{ color: '#a18cd1' }}>
//               Ready for a Radiant You?
//             </Title>
//             <Button size="lg" radius="xl" variant="gradient"
//               gradient={{ from: '#fbc2eb', to: '#a6c1ee', deg: 105 }}
//               style={{ fontWeight: 600 }}
//             >
//               Book Your Appointment
//             </Button>
//           </Center>
//         </Card>
//         <Text align="center" size="sm" color="dimmed" pb="md" mt="md">
//           © 2025 Blush Beauty Makeup. Crafted with love and shimmer.
//         </Text>
//       </Container>
//     </>
//   );
// };

// export default LandingPage;









import { AppShell, Header, Footer, Text, Group, Container, Title, Button, Paper, Badge, Stack, Grid, Image as MantineImage, HoverCard, Center, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { motion } from 'framer-motion';
import { useState } from 'react';
import HeaderNavbar from './navbar';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export default function LandingPage() {
  const [opened, setOpened] = useState(false);
  const toggle = () => setOpened(!opened);

  const services = [
    { icon: '💇‍♀️', title: 'Hair Styling', description: 'Trendy cuts & styles.' },
    { icon: '💅', title: 'Nail Art', description: 'Creative & colorful designs.' },
    { icon: '💆‍♀️', title: 'Spa Treatment', description: 'Relaxation & rejuvenation.' },
  ];

  const testimonials = [
    { quote: 'Best salon ever! Love the service.', name: 'Sophia L.', role: 'Customer' },
    { quote: 'Amazing experience every time.', name: 'Emma W.', role: 'Customer' },
    { quote: 'Highly recommended for all beauty needs.', name: 'Olivia R.', role: 'Customer' },
  ];

  const galleryImages = [
    { url: 'https://source.unsplash.com/random/400x400?hair', alt: 'Hair Style 1' },
    { url: 'https://source.unsplash.com/random/400x401?nail', alt: 'Nail Art 1' },
    { url: 'https://source.unsplash.com/random/400x402?makeup', alt: 'Makeup 1' },
    { url: 'https://source.unsplash.com/random/400x403?spa', alt: 'Spa Treatment 1' },
    { url: 'https://source.unsplash.com/random/400x404?beauty', alt: 'Beauty 1' },
    { url: 'https://source.unsplash.com/random/400x405?salon', alt: 'Salon Interior' },
  ];

  return (
    <AppShell padding="md">
      <HeaderNavbar/>
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  style={{
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fff0f5, #ffe4e9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    overflow: 'hidden',
  }}
>
  <Container size="md">
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      style={{
        fontSize: '3rem',
        fontWeight: 800,
        background: 'linear-gradient(90deg, #ff6fa0, #ffb3cc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '1rem',
      }}
    >
      Blush Beauty Makeup
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      style={{
        fontSize: '0.8rem',
        color: '#555',
        marginBottom: '2rem',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      Where beauty meets artistry. Indulge in luxury makeup and hair services crafted just for you.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        style={{
          background: 'linear-gradient(90deg, #ff6fa0, #ffb3cc)',
          border: 'none',
          color: '#fff',
          fontSize: '1.1rem',
          padding: '0.8rem 2rem',
          borderRadius: '30px',
          boxShadow: '0 8px 20px rgba(255, 105, 135, 0.3)',
          cursor: 'pointer',
        }}
      >
        Book Appointment
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        style={{
          background: '#fff',
          border: '2px solid #ff85b3',
          color: '#ff85b3',
          fontSize: '1.1rem',
          padding: '0.8rem 2rem',
          borderRadius: '30px',
          cursor: 'pointer',
        }}
      >
        View Gallery
      </motion.button>
    </motion.div>
  </Container>
</motion.div>



      <Container size="xl" py="xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Title ta="center" mb="lg" c="pink">Featured Services</Title>
        </motion.div>

        <Carousel
          slideSize="33.333333%" 
          slidesToScroll={1}
          withControls
          loop
          mb="xl"
        >
          {services.map((service, index) => (
            <Carousel.Slide key={index}>
              <motion.div
                variants={scaleIn}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Paper p="md" radius="md" shadow="lg" ta="center">
                  <Text size="3rem" mb="sm">{service.icon}</Text>
                  <Title order={3} mb="xs">{service.title}</Title>
                  <Text c="dimmed">{service.description}</Text>
                </Paper>
              </motion.div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>

      <Container size="lg" py="xl" ta="center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Title order={2} mb="md" c="pink">See Our Work</Title>
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            width="100%" 
            height="400" 
            style={{ borderRadius: '1rem' }}
            allowFullScreen
          />
          <Text c="dimmed" mt="sm">Watch our stylists create beautiful transformations</Text>
        </motion.div>
      </Container>

      <Container size="xl" py="xl">
        <Title ta="center" mb="lg" c="pink">Client Testimonials</Title>
        <Grid gutter="xl">
          {testimonials.map((t, index) => (
            <Grid.Col md={4} key={index}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Paper shadow="md" radius="md" p="lg" ta="center">
                  <Text italic mb="sm">"{t.quote}"</Text>
                  <Text fw={700}>{t.name}</Text>
                  <Text c="dimmed">{t.role}</Text>
                </Paper>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* GALLERY */}
      <Container size="xl" py="xl">
        <Title ta="center" mb="lg" c="pink">Gallery</Title>
        <Grid gutter="md">
          {galleryImages.map((img, index) => (
            <Grid.Col xs={6} sm={4} md={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <MantineImage src={img.url} alt={img.alt} radius="md" />
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* PRICING */}
      <Container size="xl" py="xl">
        <Title ta="center" mb="lg" c="pink">Our Pricing</Title>
        <Grid gutter="xl">
          {['Basic', 'Premium', 'Luxury'].map((tier, index) => (
            <Grid.Col md={4} key={tier}>
              <Paper p="xl" shadow="md" radius="md" ta="center">
                <Badge color={index === 1 ? 'pink' : 'gray'} size="lg" mb="md">{tier}</Badge>
                <Title order={3} mb="xs">$49</Title>
                <Text size="sm" c="dimmed">Starting from</Text>
                <Stack mt="sm">
                  <Text size="sm">✓ Haircut</Text>
                  <Text size="sm">✓ Styling</Text>
                  <Text size="sm">✓ Wash & Blow-dry</Text>
                </Stack>
                <Button variant="filled" color={index === 1 ? 'pink' : 'gray'} fullWidth mt="md">
                  Book Now
                </Button>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* CALL TO ACTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          background: '#ffe0ec',
          padding: '3rem 0',
          textAlign: 'center',
        }}
      >
        <Title order={2} mb="sm" c="pink">Ready for a Transformation?</Title>
        <Text size="lg" mb="lg">Book your appointment today and experience the difference</Text>
        <Button size="lg" radius="xl" color="pink">Book Appointment</Button>
      </motion.div>

      {/* FOOTER */}
      <Footer height={70}>
        <Container py="sm">
          <Group position="apart">
            <Text size="sm">© 2025 Elegance Salon. All rights reserved.</Text>
            <Group>
              {['📱', '📧', '📷'].map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Text size="lg">{icon}</Text>
                </motion.div>
              ))}
            </Group>
          </Group>
        </Container>
      </Footer>
    </AppShell>
  );
}
