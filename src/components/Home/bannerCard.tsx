import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Box,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 2,

    // paddingLeft: theme.spacing.xl * 4,
    // paddingRight: theme.spacing.xl * 4,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function BannerCard() {
  const { classes } = useStyles();
  return (
    <Box
      px={{ xs: "1rem", md: "4rem", lg: "10rem" }}
      className={classes.wrapper}
    >
      <div className={classes.body}>
        <Title className={classes.title}>Luxury & Comfort</Title>
        <Text weight={500} size="lg" mb={5}>
          Our services and wonders of Prague
        </Text>
        <Text size="sm" color="dimmed">
          See-through delicate embroidered organza blue lining luxury
          acetate-mix stretch pleat detailing. Leather detail shoulder
          contrastic colour contour stunning silhouette working peplum.
          Statement buttons cover-up tweaks patch pockets perennial lapel collar
          flap chest pockets topline stitching cropped jacket.
        </Text>

        <div className={classes.controls}>
          <Button className={classes.control}>View More</Button>
        </div>
      </div>
      <Image src="/hotel1.jpg" className={classes.image} />
    </Box>
  );
}
