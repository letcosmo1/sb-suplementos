import './Nav.css'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
    const location = useLocation();

    return (
        
        <nav className="barra-navegacao">
            {location.pathname !== "/login" && 
            <ul>
                <li><Link to={"/produtos"}>Todos os produtos</Link></li>
                <li><Link to={"/produtos?categoria=Whey"}>Whey</Link></li>
                <li><Link to={"/produtos?categoria=Creatina"}>Creatina</Link></li>
                <li><Link to={"/produtos?categoria=Pré-treino"}>Pré-treino</Link></li>
                <li><Link to={"/produtos?categoria=Hipercalórico"}>Hipercalórico</Link></li>
            </ul>
            }
        </nav>
    )
  }
  
  export default Nav