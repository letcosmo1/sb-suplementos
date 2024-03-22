import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import PaginaProdutos from './pages/PaginaProdutos'

const App = () => {

  return (
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/produtos" element={<PaginaProdutos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
