import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: "Open Sans", sans-serif;
    background: ${({ theme }) => theme.primaryBlack};
    color: ${({ theme }) => theme.primaryWhite};
  }
  
  h1{
    font-size:1.75vw;
    color: ${({ theme }) => theme.brightTurquoise};
  }
  
  h2{
    font-size:1.25vw;
  }
  
  a {
    padding: 20px;
    color: ${({ theme }) => theme.primaryWhite};
    text-decoration: none;
  }
`;

export default GlobalStyles;
