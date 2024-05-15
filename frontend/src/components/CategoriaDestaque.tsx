import './CategoriaDestaque.css'
import DestaqueCard from './DestaqueCard'
import ProdutoCard from './ProdutoCard'
import { TypeHighlightCategory, TypeProduct } from '../utils/Types'
import { useEffect, useState } from 'react'
import { highlight_products_placeholder } from '../utils/Placeholders'
import { getHighlightProducts } from '../api/ProductsApi'

type PropTypes = {
    highlight_category: TypeHighlightCategory,
    highlight_position: string
}

const CategoriaDestaque = ({ highlight_category, highlight_position }:PropTypes) => {
    const [products, setProducts] = useState<TypeProduct[]>(highlight_products_placeholder)

    const tituloPlaceholderStyle = () => {
      if(highlight_category.title === "") {
        return {
          width: 200,
          height: 27,
          backgroundColor: "var(--light-gray)"
        }
      }
      return {}
    }

    useEffect(() => {
      if(highlight_category.products_ids[0]) {
        getHighlightProducts(highlight_category.products_ids)
          .then(data => setProducts(data))
      }
    }, [highlight_category])

    return (
        <section className="produtos-destaque-container">
          <div>
            <h2 style={ tituloPlaceholderStyle() }>
              { highlight_category.title }
            </h2>
            
            <div className="produtos-destaque">
              { highlight_position === "esquerda" && <DestaqueCard imagem={ highlight_category.image } />}
              

              { products.map((product) => {
                  return <ProdutoCard key={ product._id } product={ product }/>
              }) }
                
              { highlight_position === "direita" && <DestaqueCard imagem={ highlight_category.image } />}
            </div>
          </div>
        </section>
    )
  }
  
  export default CategoriaDestaque