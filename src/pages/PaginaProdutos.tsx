import "./PaginaProdutos.css";
import { Link } from "react-router-dom";
import ProdutoPaginaInicial from "../components/ProdutoCard";

const PaginaProdutos = ({ products }: any) => {
  return (
    <main className="pagina-produtos">
      <nav className="produtos-breadcrumbs">
        <Link to={"/"}>Página Inicial</Link>
        &gt;
        <Link to={"/produtos"}>Produtos</Link>
      </nav>

      <div className="produtos-container">
        <h2>TODOS OS PRODUTOS</h2>

        <section className="produtos">
          <div className="ordenacao-container">
            <label htmlFor="order">Ordenação: </label>
            <select name="orden">
              <option value="az">A - Z</option>
              <option value="za">Z - A</option>
            </select>
          </div>

          <ProdutoPaginaInicial product={products} />
        </section>
      </div>
    </main>
  );
};

export default PaginaProdutos;
