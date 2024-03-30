import './PaginaDetalhes.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { TypeProduto } from '../utils/Types';
import { getImageUrl } from '../utils/ImageUrl';
import { useState } from 'react';

const PaginaDetalhes = () => {
    const produto: TypeProduto = {
        categoria: "Creatina",
        imagem: "whey.png",
        nome: "Creatina 100g Creapture - Growth Supplements",
        preco: 999.99,
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nulla auctor, dignissim lectus vel, viverra nunc. Fusce ac maximus lectus. Ut mollis, lacus id finibus placerat, dolor tortor placerat eros, non fermentum eros quam vitae ex.",
        sabor: "Chocolate",
        peso: "900g",
        tabela_nutricional: "tbl-nutricional.png"
    }

    const [selectedImage, setSelectedImage] = useState<string>(produto.imagem)

    const toggleImage = (imagem_url: string) => {
        setSelectedImage(imagem_url)
    }

    return (
        <main className="pagina-detalhes">
            <nav className="detalhes-breadcrumbs">
                <Link to={"/"}>Página Inicial</Link>
                &gt;
                <Link to={"/"}>Categoria</Link>
                &gt;
                <Link to={"/produto"}>{ produto.nome }</Link>
            </nav>

            <div className="detalhes-container">
                <section className="produto-imagens">
                    <div className="img-nav">
                        <div onClick={ () => toggleImage(produto.imagem) }>
                            <img src={ getImageUrl(produto.imagem) } />
                        </div>
                        <div onClick={ () => toggleImage(produto.tabela_nutricional) }>
                            <img src={ getImageUrl(produto.tabela_nutricional) } />
                        </div>
                    </div>
                    <div className="img-selecionada">
                        <img src={ getImageUrl(selectedImage) } />
                    </div>
                </section>

                <section className="produto-info">
                    <h2>{ produto.nome }</h2>
                    <div>
                        <h3>Sabor</h3>
                        <p>{ produto.sabor }</p>
                    </div>
                    <div>
                        <h3>Peso</h3>
                        <p>{ produto.peso }</p>
                    </div>
                </section>

                <section className="produto-preco">
                    <h3>Preço</h3>
                    <p>R${ produto.preco }</p>
                    <button><FontAwesomeIcon icon={faWhatsapp} />COMPRE AGORA</button>
                </section>
            </div>

            <section className="produto-descricao">
                <h2>Descrição</h2>
                <p>{ produto.descricao }</p>
            </section>
        </main>
    )
  }
  
  export default PaginaDetalhes