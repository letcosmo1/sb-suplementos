import './ProdutoCard.css'
import { Link } from 'react-router-dom'
import { TypeProduto } from '../utils/Types'
import { getImageUrl } from '../utils/ImageUrl'

type PropTypes = {
    produto: TypeProduto
}

const ProdutoCard = ({ produto }:PropTypes) => {

    return (
        <article className="produto-card">
            <Link to={"/produto"}>
                <div className="produto-img-container">
                    <img src={ getImageUrl(produto.imagem) } />
                </div>
                <h3>{ produto.nome }</h3>
                <p>R${ produto.preco }</p>
            </Link>
        </article> 
    )
  }
  
  export default ProdutoCard