"use client";
import * as React from "react";
import Head from 'next/head';
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { theme } from "../components/theme"
import "@fontsource/inter/variable.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #__next {
            height: 100%;
          }
          * {
            touch-action: manipulation;
            font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
              "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important;
          }
          #drawer-product {
            height: 100% !important;
          }
        `}
      />
      <Head>
        <link rel="icon" sizes="16x16" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
        <title>Fint</title>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="description" content="Descripción" />
        <meta name="keywords" content="administrador, pagos, online" />
        <meta name="author" content="Fint" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
