import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { BaseSyntheticEvent, useState } from 'react'
import { logout } from '../api/LoginApi'

const Header = () => {
    const location = useLocation()
    const token = localStorage.getItem("token")

    const [pesquisa, setPesquisa] = useState<string>("")

    const handlePesquisaChange = (e: BaseSyntheticEvent) => {
      setPesquisa(e.target.value)
    }
    const handleLogout = () => {
      logout()
    }

    return (
      <header>
        <Link to={"/"} className="header-logo"><Logo /></Link>
        
        {location.pathname !== "/login" && 
        <form>
            <input type="text" placeholder="Pesquisar" onChange={ handlePesquisaChange }/>
            
            <Link to={`/produtos?pesquisa=${pesquisa}`}>
              <button><FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: 15, color: "var(--gray)"}} /></button>
            </Link>
        </form>
        }

        <div className="header-logout">
          { token &&
          <FontAwesomeIcon onClick={ handleLogout } icon={ faRightFromBracket } />
          }
        </div>
      </header>
    )
  }
  
  export default Header