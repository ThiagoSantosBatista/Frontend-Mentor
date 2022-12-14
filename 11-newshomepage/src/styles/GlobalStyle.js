import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   *, *::after, *::before{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
   }
   html{
      font-size: 62.5%;
   }
   body{
      min-height: 100vh;
      max-width: 144rem;
      margin: 0 auto;
      color: ${props => props.theme.color.cinza2}
   }
   img{
      display: block;
      max-width: 100%;
   }
   a, li, button{
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
      text-decoration: none;
      list-style: none;
   }
`
export default GlobalStyle