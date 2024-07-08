import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PaginaDetalhes from "./pages/PaginaDetalhes";
import PaginaProdutos from "./pages/PaginaProdutos";
import PaginaLoginAdm from "./pages/PaginaLoginAdm";
import { useEffect, useState } from "react";
import Pagina404 from "./pages/Pagina404";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Header
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={ setIsLoggedIn } 
      />
      <Nav isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route
          path="/admin/login"
          element={<PaginaLoginAdm setIsLoggedIn={ setIsLoggedIn } />}
        />
        <Route path="/produtos" element={<PaginaProdutos />}/>
        <Route path="/produto/:id" element={<PaginaDetalhes />}/>
        <Route path="*" element={<Pagina404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
