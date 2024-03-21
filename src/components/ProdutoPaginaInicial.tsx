import './ProdutoPaginaInicial.css'
import whey from '../assets/whey.png';
import { Link } from 'react-router-dom'

const ProdutoPaginaInicial = () => {

    return (
        <Link to={"/"} className="produto-card">
            <div className="produto-img-container">
                <img src={whey} />
            </div>
            
            <h3>Creatina 100g Creapture - Growth Supplements</h3>

            <p>R$999,99</p>
        </Link>
    )
  }
  
  export default ProdutoPaginaInicial