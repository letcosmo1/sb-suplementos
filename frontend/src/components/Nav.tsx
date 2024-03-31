import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className="barra-navegacao">
            <ul>
                <li><Link to={"/produtos"}>Todos os produtos</Link></li>
                <li><Link to={"/produtos/Whey"}>Whey</Link></li>
                <li><Link to={"/produtos/Creatina"}>Creatina</Link></li>
                <li><Link to={"/produtos/Pré-treino"}>Pré-treino</Link></li>
                <li><Link to={"/produtos/Hipercalórico"}>Hipercalórico</Link></li>
            </ul>
        </nav>
    )
  }
  
  export default Nav