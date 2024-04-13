import './Nav.css'
import { Link, useLocation } from 'react-router-dom'

type PropTypes = {
    isLoggedIn: boolean,
}

const Nav = ({ isLoggedIn }: PropTypes) => {
    const location = useLocation()

    const renderLinks = () => {
        if(location.pathname === "/admin/login") {
            return <ul></ul>
        }

        if(!isLoggedIn) {
            return  <ul>
                        <li><Link to={"/produtos"}>Todos os produtos</Link></li>
                        <li><Link to={"/produtos?categoria=Whey"}>Whey</Link></li>
                        <li><Link to={"/produtos?categoria=Creatina"}>Creatina</Link></li>
                        <li><Link to={"/produtos?categoria=Pré-treino"}>Pré-treino</Link></li>
                        <li><Link to={"/produtos?categoria=Hipercalórico"}>Hipercalórico</Link></li>
                    </ul>
        }
        
        return  <ul style={{ justifyContent: "center" }}>
                    <li><Link to={"/produtos"}>Todos os produtos</Link></li>
                </ul>
    }

    return (
        
        <nav className="barra-navegacao">
            <ul>
                { renderLinks() }
            </ul>
        </nav>
    )
  }
  
  export default Nav