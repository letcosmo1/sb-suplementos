import './ProdutoCard.css'
import whey from '../assets/whey.png';
import { Link } from 'react-router-dom'

const ProdutoCard = () => {

    return (
        <article className="produto-card">
            <Link to={"/produto"}>
                <div className="produto-img-container">
                    <img src={whey} />
                </div>
                <h3>Creatina 100g Creapture - Growth Supplements</h3>
                <p>R$999,99</p>
            </Link>
        </article> 
    )
  }
  
  export default ProdutoCard