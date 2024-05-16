import "./ProdutoCard.css";
import { TypeProduct } from "../utils/Types";
import { getImage } from "../utils/ImageUrl";
import { toReais } from "../utils/StringFormat";
import { BaseSyntheticEvent, CSSProperties, useState } from "react";

type PropTypes = {
  product: TypeProduct;
  isLoggedIn?: boolean;
}

const ProdutoCard = ({ product, isLoggedIn }: PropTypes) => {
  const [showComprar, setShowComprar] = useState<boolean>(false)

  const handleOnClick = () => {
    if(product.name) window.location.replace(`produto/${ product._id }`)
  }

  const switchShowComprar = (e: BaseSyntheticEvent) => {
    if(e.type === "mouseenter") {
      setShowComprar(true)
    } else {
      setShowComprar(false)
    }
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

  const precoPlaceholderStyle = () => {
    if(product.price === 0) {
      return {
        height: 38,
        backgroundColor: "var(--light-gray)"
      }
    }
    return {}
  }

  const indiponivelStyle = () => {
    const style: CSSProperties = {
      borderColor: "var(--light-red)"
    }

    if(isLoggedIn !== undefined && isLoggedIn === true) {
      if(!product.available) return style
    }

    return {}
  }

  return (
    <article 
      className="produto-card" 
      onMouseEnter={ switchShowComprar } 
      onMouseLeave={ switchShowComprar }
      onClick={ handleOnClick }
      style={ indiponivelStyle() }
    >
      <div className="produto-img-container">
        <img src={getImage(product.image)} />
      </div>
      <h3 style={ nomePlaceholderStyle() }>
        {product.name}
      </h3>
      {
        !showComprar &&
        <p className="produto-valor" style={ precoPlaceholderStyle() }>
          { product.price === 0 ? null : toReais(product.price) }
        </p>
      }
      {
        showComprar &&
        <div className="produto-comprar">
          <p>COMPRAR</p>
        </div>
      }
    </article>
  );
};

export default ProdutoCard;
