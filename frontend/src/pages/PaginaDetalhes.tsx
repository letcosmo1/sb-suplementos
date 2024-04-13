import './PaginaDetalhes.css'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { TypeProduct, TypeSaleProduct } from '../utils/Types';
import { getImage } from '../utils/ImageUrl';
import { useEffect, useState } from 'react';
import { getProductById, sendProductForSale } from '../api/ProductApi';
import { capitalizeFirstLetter, toReais } from '../utils/StringFormat';

type PropTypes = {
    isLoggedIn: boolean
}

const PaginaDetalhes = ({ isLoggedIn }:PropTypes) => {
    const { id } = useParams()

    const [product, setProduct] = useState<TypeProduct>({
        _id: "", 
        category: "",
        image: "",
        name: "",
        price: 0,
        description: "",
        flavor: "",
        weight: "",
        table: "",
        available: true
    })

    const [saleProduct, setSaleProduct] = useState<TypeSaleProduct>({
        name: "",
        price: 0,
        flavor: ""
    })

    const [selectedImage, setSelectedImage] = useState<string>("")

    const toggleImage = (imagem_url: string) => {
        setSelectedImage(imagem_url)
    }

    const whatsappRedirect = () => {
        sendProductForSale(saleProduct)
            .then(data => window.open(data, '_blank'))
    }
    
    useEffect(() => {
        getProductById(id)
            .then(data => {
                setProduct(data)
                setSelectedImage(data.image)
                setSaleProduct({
                    name: data.name,
                    price: data.price,
                    flavor: data.flavor
                })
            })
    }, []);

    return (
        <main className="pagina-detalhes">
            <nav className="detalhes-breadcrumbs">
                <Link to={"/"}>Página Inicial</Link>
                { ">" }
                <Link to={"/produtos"}>Produtos</Link>
                { ">" }
                {<Link to={`/produtos?categoria=${product.category}`}>{ product.category }</Link> }
                { ">" }
                <Link to={`/produto/${id}`}>{ capitalizeFirstLetter(product.name)  }</Link>
            </nav>

            <div className="detalhes-container">
                <section className="produto-imagens">  
                    <div className="img-nav">
                        <div onClick={ () => toggleImage(product.image) }>
                            <img src={ getImage(product.image) } />
                        </div>
                        { product.table &&
                        <div onClick={ () => toggleImage(product.table) }>
                            <img src={ getImage(product.table) } />
                        </div>
                        }
                    </div>
                    
                    <div className="img-selecionada">
                        <img src={ getImage(selectedImage) } />
                    </div>
                </section>

                <section className="produto-info">
                    <h2>{ product.name }</h2>
                    {product.flavor &&
                    <div>
                        <h3>Sabor</h3>
                        <p>{ product.flavor }</p>
                    </div>
                    }
                    {product.weight &&
                    <div>
                        <h3>Peso</h3>
                        <p>{ product.weight }</p>
                    </div>
                    }
                </section>
                <div className="produto-compras">
                    <section className="produto-disponivel">
                        <h3>{ product.available ? "Em estoque" : "Indisponível" }</h3>   
                        { isLoggedIn &&
                        <input type="checkbox" checked={ product.available } />
                        }   
                    </section>
                    <section className="produto-preco">
                        <h3>Preço</h3>
                        <p>{ toReais(product.price) }</p>
                        <button onClick={ whatsappRedirect }><FontAwesomeIcon icon={faWhatsapp} />COMPRE AGORA</button>
                    </section>
                </div>
            </div>
            
            <section className="produto-descricao">
                {/*
                <h2>Descrição</h2>
                <p>{ product.description }</p>
                */}
            </section>
            
        </main>
    )
  }
  
  export default PaginaDetalhes