import './PaginaDetalhes.css'
import whey from '../assets/whey.png';
import tbl_nutricional from '../assets/tbl-nutricional.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const PaginaDetalhes = () => {

    return (
        <main className="pagina-detalhes">
            <nav className="detalhes-breadcrumbs">
                <Link to={"/"}>Página Inicial</Link>
                &gt;
                <Link to={"/"}>Categoria</Link>
                &gt;
                <Link to={"/produto"}>Super Whey 900g Max Titanium Chocolate</Link>
            </nav>

            <div className="detalhes-container">
                <section className="produto-imagens">
                    <div className="img-nav">
                        <div><img src={whey} /></div>
                        <div><img src={tbl_nutricional} /></div>
                    </div>
                    <div className="img-selecionada">
                        <img src={whey} />
                    </div>
                </section>

                <section className="produto-info">
                    <h2>Super Whey 900g - Max Titanium Chocolate</h2>
                    <h3>Sabor</h3>
                    <div>
                        <button>Baunilha</button>
                        <button>Chocolate</button>
                        <button>Morango</button>
                    </div>
                    <h3>Tamanho</h3>
                    <div>
                        <button>900g</button>
                    </div>
                </section>

                <section className="produto-preco">
                    <h3>Preço</h3>
                    <p>R$61,26</p>
                    <button><FontAwesomeIcon icon={faWhatsapp} />COMPRE AGORA</button>
                </section>
            </div>

            <section className="produto-descricao">
                <h2>Descrição</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nulla auctor, dignissim lectus vel, 
                    viverra nunc. Fusce ac maximus lectus. Ut mollis, lacus id finibus placerat, dolor tortor placerat eros, non 
                    fermentum eros quam vitae ex.
                    Fusce ac maximus lectus. Ut mollis, lacus id finibus placerat, dolor tortor placerat eros, non 
                    fermentum eros quam vitae ex.</p>
            </section>
        </main>
    )
  }
  
  export default PaginaDetalhes