import './PaginaProdutos.css'
import { Link, useLocation } from 'react-router-dom'
import ProdutoCard from '../components/ProdutoCard'
import { BaseSyntheticEvent, useEffect, useState } from 'react'
import { TypeProduct } from '../utils/Types'
import { getAllProducts, getProductsByCategory, getProductsByName } from '../api/ProductApi'

const PaginaProdutos = () => {
    const select: HTMLSelectElement | null = document.querySelector("#select-ordenacao")

    const location = useLocation();
    const query_params = new URLSearchParams(location.search);
    const categoria = query_params.get("categoria")
    const pesquisa = query_params.get("pesquisa")

    useEffect(() => {
        if(select) select.value = "asc"

        loadProducts()
    }, [categoria, pesquisa]);

    const [titulo, setTitulo] = useState<string>("")
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

    const loadProducts = () => {
        if(categoria) {
            setTitulo(categoria)

            getProductsByCategory("asc", categoria)
                .then(data => setProducts(data))
            return
        }
        if(pesquisa) {
            setTitulo(`Resultado da pesquisa '${pesquisa}'`)

            getProductsByName(pesquisa)
                .then(data => setProducts(data))
            return
        }
        setTitulo("TODOS OS PRODUTOS")

        getAllProducts("asc")
                .then(data => setProducts(data))
        return 
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
                    { titulo }
                </h2>
                
                <section className="produtos">
                    <div className="ordenacao-container">
                        { !pesquisa &&
                        <div>
                            <label htmlFor="order">Ordenação: </label>
                            <select id="select-ordenacao" name="order" onChange={ handleOrdenacaoChange }>
                                <option value="asc">A - Z</option>
                                <option value="desc">Z - A</option>
                                <option value="price/asc">Menor preço</option>
                                <option value="price/desc">Maior preço</option>
                            </select>
                        </div>
                        }
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