import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { BaseSyntheticEvent, useState } from 'react'

type PropTypes = {
  isLoggedIn: boolean,
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isLoggedIn, setIsLoggedIn }: PropTypes) => {
    const location = useLocation()

    const [pesquisa, setPesquisa] = useState<string>("")

    const handlePesquisaChange = (e: BaseSyntheticEvent) => {
      setPesquisa(e.target.value)
    }
    const handleLogout = () => {
      if(localStorage.getItem("token")) {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
      }
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
          { isLoggedIn &&
          <FontAwesomeIcon onClick={ handleLogout } icon={ faRightFromBracket } />
          }
        </div>
      </header>
    )
  }
  
  export default Header