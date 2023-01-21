import { AppProps } from "next/app";
import Head from "next/head";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  ScrollArea,
  Text,
} from "@mantine/core";
import { Navbar } from "@/components/navbar";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { useRouter } from "next/router";
import "../styles/globals.css";

export default function App(props: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const { Component, pageProps } = props;
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>Hotel</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme,
          }}
        >
          <ScrollArea style={{ height: "100vh" }}>
            {!(pathname === "/signin" || pathname === "/signup") && <Navbar />}

            <Component {...pageProps} />
            {!(pathname === "/signin" || pathname === "/signup") && <Footer />}
          </ScrollArea>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
