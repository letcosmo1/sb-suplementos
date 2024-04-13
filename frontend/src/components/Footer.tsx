import './Footer.css'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faUserGear } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    return (
        <footer>
            <div className="footer-info-container"> 
                <Link to={"/"}><Logo /></Link>
                <section className="footer-info">
                    <div>
                        <h2>Atendimento</h2>
                        <p>Segunda a sexta das 09:00 às 17:00</p>
                        <p></p>
                    </div>
                    <address>
                        <h2>Endereço</h2>
                        <p>Rua Ayres Belo, nº 15</p>
                        <p>Centro, Barreiros/PE - 55560-000</p>
                    </address>
                    <div className="footer-admin">
                        <Link to={"/admin/login"}>Admin</Link>
                    </div>
                </section>
            </div>
            
            <address className="footer-links">
                <a href="mailto:adautomelo@outlook.com" target="_blank"><FontAwesomeIcon icon={ faEnvelope } />adautomelo@outlook.com</a>
                <a href="https://www.instagram.com/sb__suplementos/" target="_blank"><FontAwesomeIcon icon={ faInstagram } />@sb__suplementos</a>
                <a href="https://wa.me/+5581988540511" target="_blank"><FontAwesomeIcon icon={ faWhatsapp } />+55 (81) 98854-0511</a>
            </address>
        </footer>
    )
  }
  
  export default Footer