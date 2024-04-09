import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className="barra-navegacao">
            <ul>
                <li><Link to={"/produtos"}>Todos os produtos</Link></li>
                <li><Link to={"/produtos?categoria=Whey"}>Whey</Link></li>
                <li><Link to={"/produtos?categoria=Creatina"}>Creatina</Link></li>
                <li><Link to={"/produtos?categoria=Pré-treino"}>Pré-treino</Link></li>
                <li><Link to={"/produtos?categoria=Hipercalórico"}>Hipercalórico</Link></li>
            </ul>
        </nav>
    )
  }
  
  export default Nav