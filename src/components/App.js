import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/reset.css";
import "../css/style.css";
import Header from "./Header/Header";
import Home from "./Home/Home";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
