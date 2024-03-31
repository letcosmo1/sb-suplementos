import './PaginaProdutos.css'
import { Link } from 'react-router-dom'
import ProdutoCard from '../components/ProdutoCard'
import { BaseSyntheticEvent, useEffect, useState } from 'react'
import { TypeProduct } from '../utils/Types'
import { getProducts } from '../api/DatabaseApi'

const PaginaProdutos = () => {
    const [products, setProducts] = useState<TypeProduct[]>([])

    const handleOrdenacaoChange = (e: BaseSyntheticEvent) => {
      getProducts(e.target.value)
        .then(data => setProducts(data))
    }

    useEffect(() => {
      getProducts("asc")
        .then(data => setProducts(data))
    }, []);

    return (
        <main className="pagina-produtos">
            <nav className="produtos-breadcrumbs">
                <Link to={"/"}>Página Inicial</Link>
                &gt;
                <Link to={"/produtos"}>Produtos</Link>
            </nav>

            <div className="produtos-container">
                <h2>TODOS OS PRODUTOS</h2>
                
                <section className="produtos">
                    <div className="ordenacao-container">
                        <label htmlFor="order">Ordenação: </label>
                        <select name="order" onChange={ handleOrdenacaoChange }>
                            <option value="asc">A - Z</option>
                            <option value="desc">Z - A</option>
                            <option value="price/asc">Menor preço</option>
                            <option value="price/desc">Maior preço</option>
                        </select>
                    </div>
                    
                    { products.map((product) => {
                        return <ProdutoCard key={ product._id } product={ product }/>
                    }) }
                    
                </section>
            </div>
        </main>
    )
  }
  
  export default PaginaProdutos