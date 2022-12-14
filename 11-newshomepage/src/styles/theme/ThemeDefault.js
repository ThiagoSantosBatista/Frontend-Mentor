import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        primary: "hsl(36, 100%, 99%)",
        secondary: "hsl(240, 100%, 5%)",
        cinza1: "hsl(233, 8%, 79%)",
        cinza2: "hsl(236, 13%, 42%)",
        laranja: "hsl(35, 77%, 62%)",
        vermelho: "hsl(5, 85%, 63%)",
    },
    font: {
        h1: "5.3rem",
        h2: "3.6rem",
        h3: "2rem",
        h4: "1.8rem",
        p: "1.5rem",
        nav: "1.5rem",
    },
};

const ThemeDefault = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeDefault