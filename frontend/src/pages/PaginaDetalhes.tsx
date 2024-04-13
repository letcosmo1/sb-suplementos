import "./PaginaDetalhes.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { TypeProduct, TypeSaleProduct } from "../utils/Types";
import { getImage } from "../utils/ImageUrl";
import { useEffect, useState } from "react";
import {
  getProductById,
  sendProductForSale,
  updateProductAvailableAdm,
} from "../api/ProductsApi";
import { capitalizeFirstLetter, toReais } from "../utils/StringFormat";

type PropTypes = {
  isLoggedIn: boolean;
};

const PaginaDetalhes = ({ isLoggedIn }: PropTypes) => {
  const { id } = useParams();

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
    available: true,
  });

  const [selectedImage, setSelectedImage] = useState<string>("");

  const [available, setAvailable] = useState<boolean>(true);

  const toggleImage = (imagem_url: string) => {
    setSelectedImage(imagem_url);
  };

  const whatsappRedirect = () => {
    const sale_product: TypeSaleProduct = {
      name: product.name,
      price: product.price,
      flavor: product.flavor,
    };

    sendProductForSale(sale_product).then((data) =>
      window.open(data, "_blank")
    );
  };

  const handleAvailableChange = () => {
    const token: string | null = localStorage.getItem("token");

    if (isLoggedIn && token) {
        console.log(product._id)
      updateProductAvailableAdm(token, product._id, !available);
      let updated_product: TypeProduct = product;
      updated_product.available = !available;
      setProduct(updated_product);
      setAvailable(!available);
    }
  };

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
      setAvailable(data.available);
      setSelectedImage(data.image);
    });
  }, []);

  return (
    <main className="pagina-detalhes">
      <nav className="detalhes-breadcrumbs">
        <Link to={"/"}>Página Inicial</Link>
        {">"}
        <Link to={"/produtos"}>Produtos</Link>
        {">"}
        {
          <Link to={`/produtos?categoria=${product.category}`}>
            {product.category}
          </Link>
        }
        {">"}
        <Link to={`/produto/${id}`}>{capitalizeFirstLetter(product.name)}</Link>
      </nav>

      <div className="detalhes-container">
        <section className="produto-imagens">
          <div className="img-nav">
            <div onClick={() => toggleImage(product.image)}>
              <img src={getImage(product.image)} />
            </div>
            {product.table && (
              <div onClick={() => toggleImage(product.table)}>
                <img src={getImage(product.table)} />
              </div>
            )}
          </div>

          <div className="img-selecionada">
            <img src={getImage(selectedImage)} />
          </div>
        </section>

        <section className="produto-info">
          <h2>{product.name}</h2>
          {product.flavor && (
            <div>
              <h3>Sabor</h3>
              <p>{product.flavor}</p>
            </div>
          )}
          {product.weight && (
            <div>
              <h3>Peso</h3>
              <p>{product.weight}</p>
            </div>
          )}
        </section>
        <div className="produto-compras">
          <section className="produto-disponivel">
            <h3>{product.available ? "Em estoque" : "Indisponível"}</h3>
            {isLoggedIn && (
              <input
                type="checkbox"
                checked={available}
                onChange={handleAvailableChange}
              />
            )}
          </section>
          <section className="produto-preco">
            <h3>Preço</h3>
            <p>{toReais(product.price)}</p>
            <button onClick={whatsappRedirect}>
              <FontAwesomeIcon icon={faWhatsapp} />
              COMPRE AGORA
            </button>
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
  );
};

export default PaginaDetalhes;
