import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Header = () => {

    return (
      <header>
        <Link to={"/"} className="header-logo"><Logo /></Link>
        
        <form>
            <input type="text" placeholder="Pesquisar"/>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: 15, color: "var(--gray)"}} /></button>
        </form>

        <div className="filler"></div>
      </header>
    )
  }
  
  export default Header