import { useMediaQuery } from 'react-responsive'
import './Nav.css'
import { Link, useLocation } from 'react-router-dom'
import Carousel from 'react-multi-carousel'

type PropTypes = {
    isLoggedIn: boolean,
}

const Nav = ({ isLoggedIn }: PropTypes) => {
    const location = useLocation()
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })
    const nav_carousel_responsive = {
        mobile: {
          breakpoint: { max: 1000, min: 0 },
          items: 3
        }
    }
    const links = [
        <li key="1"><Link to={"/produtos"}>Todos os produtos</Link></li>,
        <li key="2"><Link to={"/produtos?categoria=Whey"}>Whey</Link></li>,
        <li key="3"><Link to={"/produtos?categoria=Creatina"}>Creatina</Link></li>,
        <li key="4"><Link to={"/produtos?categoria=Pré-treino"}>Pré-treino</Link></li>,
        <li key="5"><Link to={"/produtos?categoria=Hipercalórico"}>Hipercalórico</Link></li>,
        <li key="6"><Link to={`/produtos?categoria=${encodeURIComponent("Pasta de Amendoim")}`}>Pasta de Amendoim</Link></li>,
        <li key="7"><Link to={`/produtos?categoria=${encodeURIComponent("Vitaminas e Minerais")}`}>Vitaminas e Minerais</Link></li>,
    ]

    const renderLinks = () => {
        if(location.pathname === "/admin/login") return 

        if(!isLoggedIn) return links
        
        return <li style={{ justifyContent: "center" }}><Link to={"/produtos"}>Todos os produtos</Link></li>
    }

    return (
        <nav className="barra-navegacao">
            { isMobile ?
            <Carousel 
                containerClass="nav-carousel" 
                responsive={ nav_carousel_responsive } 
                infinite={ true }
                removeArrowOnDeviceType={["mobile"]}
            >
                { renderLinks() }
            </Carousel>
            :     
            <ul>{ renderLinks() }</ul>
            }
        </nav>
    )
}
  
export default Nav