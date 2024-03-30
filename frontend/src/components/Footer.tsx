import './Footer.css'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
        <footer>
            <div className="footer-info-container">
                <Link to={"/"}><Logo /></Link>
                <section className="footer-info">
                    <div>
                        <h2>Atendimento</h2>
                        <p>Segunda a sexta das 7h às 17h</p>
                        <p>E sábados das 7h às 12h</p>
                    </div>
                    <address>
                        <h2>Endereço</h2>
                        <p>Avenida Paulista, 999, Loja 12,</p>
                        <p>Bela Vista, São Paulo, SP, 01311-000</p>
                    </address>
                </section>
            </div>
            
            <address className="footer-links">
                <Link to={"/"}><FontAwesomeIcon icon={faEnvelope} />email@email.com</Link>
                <Link to={"/"}><FontAwesomeIcon icon={faInstagram} />@instagram</Link>
                <Link to={"/"}><FontAwesomeIcon icon={faWhatsapp} />+99 (99) 99999-9999</Link>
            </address>
        </footer>
    )
  }
  
  export default Footer