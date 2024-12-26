import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
