import "normalize.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,700&subset=latin-ext');
  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
