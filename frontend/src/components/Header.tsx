import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { BaseSyntheticEvent, useState } from 'react'

const Header = () => {
    const [pesquisa, setPesquisa] = useState<string>("")

    const handlePesquisaChange = (e: BaseSyntheticEvent) => {
      setPesquisa(e.target.value)
    }

    return (
      <header>
        <Link to={"/"} className="header-logo"><Logo /></Link>
        
        <form>
            <input type="text" placeholder="Pesquisar" onChange={ handlePesquisaChange }/>
            
            <Link to={`/produtos?pesquisa=${pesquisa}`}>
              <button><FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: 15, color: "var(--gray)"}} /></button>
            </Link>
        </form>

        <div className="filler"></div>
      </header>
    )
  }
  
  export default Header