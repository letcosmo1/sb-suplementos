import './ProdutoCard.css'
import { Link } from 'react-router-dom'
import { TypeProduct } from '../utils/Types'
import { getImageUrl } from '../utils/ImageUrl'

type PropTypes = {
    product: TypeProduct
}

const ProdutoCard = ({ product }:PropTypes) => {

    return (
        <article className="produto-card">
            <Link to={"/produto"}>
                <div className="produto-img-container">
                    <img src={ getImageUrl(product.image) } />
                </div>
                <h3>{ product.name }</h3>
                <p>R${ product.price }</p>
            </Link>
        </article> 
    )
  }
  
  export default ProdutoCard