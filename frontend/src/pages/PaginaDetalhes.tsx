import './PaginaDetalhes.css'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { TypeProduct } from '../utils/Types';
import { getImageUrl } from '../utils/ImageUrl';
import { useEffect, useState } from 'react';
import { getProductById } from '../api/DatabaseApi';

const PaginaDetalhes = () => {
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
        nutritional_table: ""
    })

    const [selectedImage, setSelectedImage] = useState<string>("")

    const toggleImage = (imagem_url: string) => {
        setSelectedImage(imagem_url)
    }
    
    useEffect(() => {
        getProductById(id)
            .then(data => {
                setProduct(data)
                setSelectedImage(data.image)
            })
    }, []);

    return (
        <main className="pagina-detalhes">
            <nav className="detalhes-breadcrumbs">
                <Link to={"/"}>Página Inicial</Link>
                &gt;
                <Link to={"/"}>Categoria</Link>
                &gt;
                <Link to={"/produto"}>{ product.name }</Link>
            </nav>

            <div className="detalhes-container">
                <section className="produto-imagens">
                    <div className="img-nav">
                        <div onClick={ () => toggleImage(product.image) }>
                            <img src={ getImageUrl(product.image) } />
                        </div>
                        <div onClick={ () => toggleImage(product.nutritional_table) }>
                            <img src={ getImageUrl(product.nutritional_table) } />
                        </div>
                    </div>
                    <div className="img-selecionada">
                        <img src={ getImageUrl(selectedImage) } />
                    </div>
                </section>

                <section className="produto-info">
                    <h2>{ product.name }</h2>
                    <div>
                        <h3>Sabor</h3>
                        <p>{ product.flavor }</p>
                    </div>
                    <div>
                        <h3>Peso</h3>
                        <p>{ product.weight }</p>
                    </div>
                </section>

                <section className="produto-preco">
                    <h3>Preço</h3>
                    <p>R${ product.price }</p>
                    <button><FontAwesomeIcon icon={faWhatsapp} />COMPRE AGORA</button>
                </section>
            </div>

            <section className="produto-descricao">
                <h2>Descrição</h2>
                <p>{ product.description }</p>
            </section>
        </main>
    )
  }
  
  export default PaginaDetalhes