import "./ProdutoCard.css";
import { Link } from "react-router-dom";
import { TypeProduct } from "../utils/Types";
import { getImage } from "../utils/ImageUrl";
import { toReais } from "../utils/StringFormat";

type PropTypes = {
  product: TypeProduct;
};

const ProdutoCard = ({ product }: PropTypes) => {
  return (
    <article className="produto-card">
      <Link to={"/produto/" + product._id}>
        <div className="produto-img-container">
          <img src={getImage(product.image)} />
        </div>
        <h3>{product.name}</h3>
        <p className="produto-valor">{toReais(product.price)}</p>
        <div className="produto-comprar">
          <p>comprar</p>
        </div>
      </Link>
    </article>
  );
};

export default ProdutoCard;
