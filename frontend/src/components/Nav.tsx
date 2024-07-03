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
        <Link key="1" to={"/produtos"}>Todos os produtos</Link>,
        <Link key="2" to={"/produtos?categoria=Whey"}>Whey</Link>,
        <Link key="3" to={"/produtos?categoria=Creatina"}>Creatina</Link>,
        <Link key="4" to={"/produtos?categoria=Pré-treino"}>Pré-treino</Link>,
        <Link key="5" to={"/produtos?categoria=Hipercalórico"}>Hipercalórico</Link>,
        <Link key="6" to={`/produtos?categoria=${encodeURIComponent("Pasta de Amendoim")}`}>Pasta de Amendoim</Link>,
        <Link key="7" to={`/produtos?categoria=${encodeURIComponent("Vitaminas e Minerais")}`}>Vitaminas e Minerais</Link>,
    ]

    const renderLinks = () => {
        if(location.pathname === "/admin/login") 
            return [<a></a>]

        if(!isLoggedIn) 
            return links
        
        return [
                <li style={{ justifyContent: "center" }}><Link to={"/produtos"}>Todos os produtos</Link></li>
               ]
    }

    return (
        <nav className="barra-navegacao">
            { isMobile &&
            <Carousel 
                containerClass="nav-carousel" 
                responsive={ nav_carousel_responsive } 
                infinite={ true }
                removeArrowOnDeviceType={["mobile"]}
            >
                { renderLinks() }
            </Carousel>
            }

            { !isMobile &&
            <ul>
                { renderLinks()
                    .map((element) => { return <li>{ element }</li> }) 
                }
            </ul>
            }
        </nav>
    )
}
  
export default Nav