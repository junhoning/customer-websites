"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(${({ theme }) => theme.layout.headerH} + 1rem);
  }

  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.foreground};
    font-family: ${({ theme }) => theme.font.body};
    line-height: 1.65;
    word-break: keep-all;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.font.heading};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    cursor: pointer;
  }

  input, textarea, select {
    font: inherit;
  }
`;
