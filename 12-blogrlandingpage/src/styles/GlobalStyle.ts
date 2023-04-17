import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
    font-family: 'Ubuntu', sans-serif;
    //font-family: 'Overpass', sans-serif;
  }
  html{
    font-size: 62.5%;
  }
  body{
    min-height: 100vh;
    color: white;
    font-size: 1.6rem;
  }
  img{
    display: block;
    max-width: 100%;
  }
  svg{
    display: block;
  }
  a{
    display: inline-block;
    color: white;
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyle;
