import './CategoriaDestaque.css'
import DestaqueCard from './DestaqueCard'
import ProdutoCard from './ProdutoCard'
import { TypeCategoriaDestaque } from '../utils/Types'

type PropTypes = {
    categoria_destaque: TypeCategoriaDestaque,
    posicao_destaque: string
}

const CategoriaDestaque = ({ categoria_destaque, posicao_destaque }:PropTypes) => {

    return (
        <section className="produtos-destaque-container">
          <div>
            <h2>{ categoria_destaque.titulo }</h2>
            
            <div className="produtos-destaque">
              { posicao_destaque === "esquerda" && <DestaqueCard imagem={ categoria_destaque.imagem } />}
              

              { categoria_destaque.produtos.map((produto) => {
                  return <ProdutoCard produto={ produto }/>
              }) }
                
              { posicao_destaque === "direita" && <DestaqueCard imagem={ categoria_destaque.imagem } />}
            </div>
          </div>
        </section>
    )
  }
  
  export default CategoriaDestaque