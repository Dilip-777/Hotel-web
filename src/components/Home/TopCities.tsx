import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  Box,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  price: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface CardProps {
  image: string;
  title: string;
  price: string;
}

function Card({ image, title, price }: CardProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
      // w={340}
      px="1rem"
    >
      <div>
        <Text className={classes.price} size="xs">
          {price}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Book Now
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: "/hyderabadHotel.jpg",
    title: "Best Hotels to visit in Hyderabad",
    price: "100$/night",
  },
  {
    image: "/MumbaiHotel.jpg",
    title: "Best Hotels In Mumbai",
    price: "200$/night",
  },
  {
    image: "/DelhiHotel.jpg",
    title: "Best Hotels in Delhi",
    price: "100$/night",
  },
  {
    image: "/bangloreHotel.jpeg",
    title: "Best Hotels in Bangalore",
    price: "100$/night",
  },
  {
    image: "/chennaiHotel.webp",
    title: "Best Hotels in Chennai",
    price: "150$/night",
  },
  {
    image: "/kolkataHotel.jpg",
    title: "Best Hotels in Kolkata",
    price: "100$/night",
  },
];

export default function TopCities() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap="xl"
      align="start"
      // px="1rem"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
