import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial'
import Header from './components/Header'
import Nav from './components/Nav'

const App = () => {

  return (
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
