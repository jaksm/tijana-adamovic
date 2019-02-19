import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,700&subset=latin-ext');
  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }
`;

export default GlobalStyle;
