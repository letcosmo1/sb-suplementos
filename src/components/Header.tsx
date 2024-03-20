import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
      <header>
        <Link to="/"><h1>SB<span>SUPLEMENTOS</span></h1></Link>
        
        <form>
            <input type="text" placeholder="Pesquisar"/>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: 15, color: "var(--gray)"}} /></button>
        </form>

        <div className="filler"></div>
      </header>
    )
  }
  
  export default Header