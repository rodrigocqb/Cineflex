import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/reset.css";
import "../css/style.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Movie from "./Movie/Movie";
import Session from "./Session/Session";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<Movie />} />
        <Route path="/assentos/:idSessao" element={<Session />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
