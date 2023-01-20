import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Stack,
} from "@mantine/core";
import { useRouter } from "next/router";

export default function SignIn() {
  const { push } = useRouter();
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome Back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{" "}
        <Anchor<"a">
          href="#"
          size="sm"
          onClick={(event) => {
            event.preventDefault();
            push("/signin");
          }}
        >
          Login
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Stack dir="column" spacing={8}>
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            required
          />
          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            required
          />
          <TextInput
            label="Username"
            placeholder="Enter you username"
            required
          />
          <TextInput label="Email" placeholder="you@mail.com" required />
          <TextInput
            label="Mobile Number"
            placeholder="Enter your number"
            type="number"
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            // mt="md"
          />
        </Stack>
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
        </Group>
        <Button fullWidth mt="xl">
          Sign Up
        </Button>
      </Paper>
    </Container>
  );
}
