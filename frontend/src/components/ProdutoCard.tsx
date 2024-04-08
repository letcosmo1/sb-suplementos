import './ProdutoCard.css'
import { Link } from 'react-router-dom'
import { TypeProduct } from '../utils/Types'
import { getImage } from '../utils/ImageUrl'
import { toReais } from '../utils/StringFormat'

type PropTypes = {
    product: TypeProduct
}

const ProdutoCard = ({ product }:PropTypes) => {

    return (
        <article className="produto-card">
            <Link to={"/produto/" + product._id}>
                <div className="produto-img-container">
                    <img src={ getImage(product.image) } />
                </div>
                <h3>{ product.name }</h3>
                <p>{ toReais(product.price) }</p>
            </Link>
        </article> 
    )
  }
  
  export default ProdutoCard