import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: #888;
    font-weight: 400;
    background: ${({ theme }) => theme.primaryBlack};
    position: relative;
  }

  *:focus {
    outline: none;
  }
  
  a:hover {
    outline: none;
    text-decoration: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.brightTurquoise};
    font-weight: 400;
  }
  
  h1 {
    font-size: 48px;
  }
  
  h2 {
    font-size: 44px;
  }
  
  h3 {
    font-size: 26px;
  }
  
  h4 {
    font-size: 20px;
  }
  
  h5 {
    font-size: 18px;
  }
  
  h6 {
    font-size: 14px;
  }
  
  p {
    font-size: 14px;
  }
`;

export default GlobalStyles;
