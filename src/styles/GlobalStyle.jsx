import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Rubik", sans-serif;
  }

  ul, li {
    list-style: none;
  }

  body {
    height: 100vh;
    overflow: hidden;
  }
`