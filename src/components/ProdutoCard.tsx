import "./ProdutoCard.css";
import whey from "../assets/whey.png";
import { Link } from "react-router-dom";

const ProdutoCard = ({ product }: { product: any[] | undefined }) => {
  return (
    <article className="produto-card">
      {product ? (
        product.map((prod: any) => (
          <Link key={prod.id} to={`/produto/${prod.id}`}>
            <div className="produto-img-container">
              <img src={whey} alt={prod.productName} />
            </div>
            <h3>{prod.productName}</h3>
            <p>R$ {prod.productPrice}</p>
          </Link>
        ))
      ) : (
        <Link to={"/produto"}>
          <div className="produto-img-container">
            <img src={whey} alt="Nome Teste" />
          </div>
          <h3>{"Whey Proten"}</h3>
          <p>R$ {"55,00"}</p>
        </Link>
      )}
    </article>
  );
};

export default ProdutoCard;
