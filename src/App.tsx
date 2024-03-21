import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () => {

  return (
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
