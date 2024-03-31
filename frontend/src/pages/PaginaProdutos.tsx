import './PaginaProdutos.css'
import { Link, useParams } from 'react-router-dom'
import ProdutoCard from '../components/ProdutoCard'
import { BaseSyntheticEvent, useEffect, useState } from 'react'
import { TypeProduct } from '../utils/Types'
import { getAllProducts, getProductsByCategory } from '../api/DatabaseApi'

const PaginaProdutos = () => {
    const select: HTMLSelectElement | null = document.querySelector("#select-ordenacao")
    const { categoria } = useParams()

    useEffect(() => {
        if(select) select.value = "asc"

        if(categoria) {
            getProductsByCategory("asc", categoria)
                .then(data => setProducts(data))
        } else {
            getAllProducts("asc")
                .then(data => setProducts(data))
        }
    }, [categoria]);

    const [products, setProducts] = useState<TypeProduct[]>([])

    const handleOrdenacaoChange = (e: BaseSyntheticEvent) => {
        const ordenacao: string = e.target.value
        
        if(categoria) {
            getProductsByCategory(ordenacao, categoria)
                .then(data => setProducts(data))
        } else {
            getAllProducts(ordenacao)
                .then(data => setProducts(data))
        }
    }

    return (
        <main className="pagina-produtos">
            <nav className="produtos-breadcrumbs">
                <Link to={"/"}>Página Inicial</Link>
                { ">" }
                <Link to={"/produtos"}>Produtos</Link>
                { categoria && ">" }
                { categoria && <Link to={`/produtos/${categoria}`}>{ categoria }</Link> }
            </nav>

            <div className="produtos-container">
                <h2>
                    { categoria ? categoria.toUpperCase() : "TODOS OS PRODUTOS" }
                </h2>
                
                <section className="produtos">
                    <div className="ordenacao-container">
                        <label htmlFor="order">Ordenação: </label>
                        <select id="select-ordenacao" name="order" onChange={ handleOrdenacaoChange }>
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