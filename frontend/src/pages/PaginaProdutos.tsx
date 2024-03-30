import './PaginaProdutos.css'
import { Link } from 'react-router-dom'
import ProdutoCard from '../components/ProdutoCard'
import { BaseSyntheticEvent, useEffect, useState } from 'react'
import { TypeProduct } from '../utils/Types'

const PaginaProdutos = () => {
    const api_url: string = "http://localhost:3000"
    const [products, setProducts] = useState<TypeProduct[]>([])

    const handleOrdenacaoChange = (e: BaseSyntheticEvent) => {
      const url = api_url + e.target.value
      console.log(url)
      fetchProducts(url)
    }
    const fetchProducts = (url: string) => {
      fetch(url)
        .then(res => res.json())
        .then((data:TypeProduct[]) => {
          setProducts(data.map(product => product))
        })
    }

    useEffect(() => {
      fetchProducts(`${api_url}/products/asc`)
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
                            <option value="/products/asc">A - Z</option>
                            <option value="/products/desc">Z - A</option>
                            <option value="/products/price/asc">Menor preço</option>
                            <option value="/products/price/desc">Maior preço</option>
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