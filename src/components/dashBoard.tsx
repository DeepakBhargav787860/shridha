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
  Group,
  ThemeIcon,
  Grid,
  Paper,
  Divider,
  Anchor,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconMail,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import image1 from "../../public/images/1.jpg";
import image2 from "../../public/images/2.jpg";
import image21 from "../../public/images/21.jpg";
import image4 from "../../public/images/4.webp";
import image6 from "../../public/images/6.webp";
import image7 from "../../public/images/7.jpeg";
import image9 from "../../public/images/11.jpg";
import image15 from "../../public/images/15.jpg";
import image17 from "../../public/images/17.jpg";
import image19 from "../../public/images/19.jpg";
import image20 from "../../public/images/20.jpg";
import image40 from "../../public/images/40.jpg";
import image41 from "../../public/images/41.jpg";
import image45 from "../../public/images/45.jpg";

const DashBoard = () => {
  return (
    <Box bg="#fffaf8" pos="relative">
      {/* Social Icons Sidebar */}
      <Box
        pos="fixed"
        top="50%"
        left={0}
        style={{ transform: "translateY(-50%)", zIndex: 10 }}
        p="sm"
      >
        <Stack
          spacing="md"
          align="center"
          bg="#fff0f6"
          p="sm"
          style={{ borderRadius: "0 50% 50% 0" }}
        >
          {/* Instagram */}
          <Anchor
            href="https://www.instagram.com/theajphotography98?igsh=aWFqbWFqMDVld3B3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ThemeIcon radius="xl" size="lg" color="grape">
              <IconBrandInstagram size={20} />
            </ThemeIcon>
          </Anchor>

          {/* Email */}
          <Anchor href="mailto:bhargavajay67@gmail.com">
            <ThemeIcon radius="xl" size="lg" color="blue">
              <IconMail size={20} />
            </ThemeIcon>
          </Anchor>

          {/* WhatsApp (Optional: you can add link if needed) */}
          <ThemeIcon radius="xl" size="lg" color="green">
            <IconBrandWhatsapp size={20} />
          </ThemeIcon>
        </Stack>
      </Box>
      {/* Hero Section */}
      <Box
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0",
          color: "white",
        }}
      >
        <Container>
          <Title order={1} size="3rem" align="center">
            Pre-Wedding by AJ Photography
          </Title>
          <Text size="lg" align="center" mt="sm">
            Your Love, Our Lens – Capturing Forever Begins Here
          </Text>
        </Container>
      </Box>

      {/* About Section */}
      <Container my="xl">
        <Box
          sx={(theme) => ({
            [theme.fn.smallerThan("sm")]: {
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing.lg,
            },
          })}
        >
          <Box mb={{ base: "md", md: 0 }}>
            <Image src={image41} radius="md" alt="About Pre-Wedding" />
          </Box>
          <Stack justify="center">
            <Title order={2} fw={700} mb={10} color="pink.7">
              Why Pre-Wedding Shoots Matter
            </Title>
            <Divider mb="sm" color="pink.3" size="sm" w={80} />
            <Text size="md" color="gray.8">
              Pre-wedding shoot ek aisa pal hota hai jahan aap apne pyaar ko ek
              kahani ki tarah dikhate hain. Hum aapki journey ko romantic
              locations aur natural chemistry ke saath capture karte hain –
              jisse har tasveer ek yaadgar pal ban jaaye.
            </Text>
          </Stack>
        </Box>
      </Container>

      {/* Photographer Work Section (as Cards Grid) */}
      <Container my="xl">
        <Title align="center" order={2} mb="xl" color="pink.7">
          Our Complete Photographer Services
        </Title>
        <SimpleGrid
          cols={3}
          spacing="xl"
          breakpoints={[
            { maxWidth: "62em", cols: 2 },
            { maxWidth: "36em", cols: 1 },
          ]}
        >
          {[
            {
              title: "📸 Theme & Location Suggestion",
              image: image4,
            },
            {
              title: "👗 Outfit Coordination & Styling Tips",
              image: image17,
            },
            {
              title: "🎥 Cinematic Video Shoot & Drone Footage",
              image: image15,
            },
            {
              title: "💑 Creative Couple Poses",
              image: image6,
            },
            {
              title: "🖼️ Editing & Custom Album",
              image: image9,
            },
            {
              title: "💍 Haldi, Mehndi, Sangeet, Engagement Shoots",
              image: image7,
            },
            {
              title: "👨‍👩‍👧‍👦 Family Portraits & Candid Moments",
              image: image20,
            },
            {
              title: "📽️ Highlight Reels & Full Event Video",
              image: image40,
            },
            {
              title: "📚 Luxury Wedding Albums",
              image: image19,
            },
          ].map((item, idx) => (
            <Card key={idx} shadow="md" padding="lg" radius="xl" withBorder>
              <Card.Section>
                <Image src={item.image} height={350} alt={item.title} />
              </Card.Section>
              <Title order={4} mt="md" color="pink.6">
                {item.title}
              </Title>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* Themes Section */}
      <Container my="xl">
        <Title align="center" order={2} mb="xl" color="pink.7">
          Pre-Wedding Themes We Offer
        </Title>
        <SimpleGrid
          cols={2}
          spacing="xl"
          breakpoints={[{ maxWidth: "48em", cols: 1 }]}
        >
          <Card shadow="md" padding="lg" radius="xl" withBorder>
            <Card.Section>
              <Image src={image4} height={200} alt="Traditional Theme" />
            </Card.Section>
            <Title order={3} mt="md" color="pink.6">
              Indian Love Theme
            </Title>
            <Text mt="xs" color="gray.7">
              Showcase the fun and love before the wedding in traditional Indian
              outfits — with forts, palaces, and rich cultural backdrops.
            </Text>
          </Card>

          <Card shadow="md" padding="lg" radius="xl" withBorder>
            <Card.Section>
              <Image src={image45} height={200} alt="Modern Chic" />
            </Card.Section>
            <Title order={3} mt="md" color="pink.6">
              Urban Couple Vibes
            </Title>
            <Text mt="xs" color="gray.7">
              Modern couples ke liye – classy outfits, city backgrounds, luxury
              cars ya rooftop views ke saath ek trendy shoot experience.
            </Text>
          </Card>
        </SimpleGrid>
      </Container>

      {/* CTA Section */}
      <Box bg="pink.1" py="xl">
        <Container>
          <Center>
            <Stack align="center">
              <Title order={2} color="pink.8">
                Apni Love Story Ko Shoot Karaye
              </Title>
              <Text align="center">
                Hamare saath apna pre-wedding session book kijiye aur apne pyar
                ko tasveeron mein amar banaiye.
              </Text>
              <Button size="md" color="pink">
                Book Now
              </Button>
            </Stack>
          </Center>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container my="xl">
        <Title align="center" order={2} mb="md">
          Contact Us
        </Title>
        <Stack align="center" spacing="xs">
          <Text>Email: bhargavajay67@gmail.com</Text>
          <Text>Phone: +91 98765 43210</Text>
          <Text>Instagram: @theajphotography98</Text>
          <Text>WhatsApp: +91 98765 43210</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default DashBoard;
