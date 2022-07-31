import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import { DarkTheme, LightTheme } from "../styles/Themes";
import Header from "./Header";
import Home from "./Home";
import Movie from "./Movie";
import Session from "./Session";
import Success from "./Success";
import ThemeSwitch from "../styles/ThemeSwitch";

function App() {
  const [theme, setTheme] = useState(true)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
        <GlobalStyle />
        <Header />
        <ThemeSwitch setTheme={setTheme} theme={theme}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessoes/:idFilme" element={<Movie />} />
          <Route path="/assentos/:idSessao" element={<Session />} />
          <Route path="/sucesso" element={<Success />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
