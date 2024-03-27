import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PaginaDetalhes from "./pages/PaginaDetalhes";
import PaginaProdutos from "./pages/PaginaProdutos";

import axios from "axios";

const products = await axios.get(import.meta.env.VITE_BACKEND_URL);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route
          path="/produtos"
          element={<PaginaProdutos products={products.data} />}
        />
        <Route path="/produto" element={<PaginaDetalhes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
