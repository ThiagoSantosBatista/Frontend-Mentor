import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import ThemeDefault from "./styles/theme/ThemeDefault";
import Main from "./components/Main";

function App() {
    return (
        <ThemeDefault>
            <GlobalStyle />
            <Header />
            <Main />
        </ThemeDefault>
    )
}

export default App;
