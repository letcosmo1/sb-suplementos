import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className="barra-navegacao">
            <ul>
                <li><Link to={"/produtos"}>Todos os produtos</Link></li>
                <li><Link to={"/"}>Whey</Link></li>
                <li><Link to={"/"}>Creatina</Link></li>
                <li><Link to={"/"}>Pré-treino</Link></li>
                <li><Link to={"/"}>Hipercalórico</Link></li>
            </ul>
        </nav>
    )
  }
  
  export default Nav