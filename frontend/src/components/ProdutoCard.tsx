import "./ProdutoCard.css";
import { Link } from "react-router-dom";
import { TypeProduct } from "../utils/Types";
import { getImage } from "../utils/ImageUrl";
import { toReais } from "../utils/StringFormat";
import { useState } from "react";

type PropTypes = {
  product: TypeProduct;
}

const ProdutoCard = ({ product }: PropTypes) => {
  const [comprarStyle, setComprarStyle] = useState({display: "none"})
  const [valorStyle, setValorStyle] = useState({display: "block"})

  const showComprarButton = () => {
    setComprarStyle({display: "flex"})
    setValorStyle({display: "none"})
  }

  const hideComprarButton = () => {
    setComprarStyle({display: "none"})
    setValorStyle({display: "block"})
  }

  const nomePlaceholderStyle = () => {
    if(product.name === "") {
      return {
        height: 34,
        backgroundColor: "var(--light-gray)"
      }
    }
    return {}
  }

  return (
    <article className="produto-card" onMouseEnter={ showComprarButton } onMouseLeave={ hideComprarButton }>
      <Link to={"/produto/" + product._id}>
        <div className="produto-img-container">
          <img src={getImage(product.image)} />
        </div>
        <h3 style={ nomePlaceholderStyle() }>
          {product.name}
        </h3>
        <p className="produto-valor" style={ valorStyle }>{toReais(product.price)}</p>
        <div className="produto-comprar" style={ comprarStyle }>
          <p>COMPRAR</p>
        </div>
      </Link>
    </article>
  );
};

export default ProdutoCard;
