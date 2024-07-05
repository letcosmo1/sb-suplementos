import "./PaginaProdutos.css";
import { Link, useLocation } from "react-router-dom";
import ProdutoCard from "../components/ProdutoCard";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { TypeProduct } from "../utils/Types";
import {
  getAllProducts,
  getAllProductsAdm,
  getProductsByCategory,
  getProductsByName,
} from "../api/ProductsApi";
import { products_placeholder } from "../utils/Placeholders";
import { ClipLoader } from "react-spinners";

type PropTypes = {
  isLoggedIn: boolean;
};

const PaginaProdutos = ({ isLoggedIn }: PropTypes) => {
  const select: HTMLSelectElement | null =
    document.querySelector("#select-ordenacao");

  const location = useLocation();
  const query_params = new URLSearchParams(location.search);
  const categoria = query_params.get("categoria");
  const pesquisa = query_params.get("pesquisa");

  const [titulo, setTitulo] = useState<string>("");
  const [products, setProducts] = useState<TypeProduct[]>(products_placeholder)

  const [loading, setLoading] = useState(true)

  const centerLoader = () => {
    if(loading) {
      return {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }
    return {}
  }

  const handleOrdenacaoChange = (e: BaseSyntheticEvent) => {
    const ordenacao: string = e.target.value;
    setLoading(true)

    if (categoria) {
      getProductsByCategory(ordenacao, categoria).then((data) => {
        setLoading(false)
        setProducts(data)
      });
    } else {
      getAllProducts(ordenacao).then((data) => {
        setLoading(false)
        setProducts(data)
      });
    }
  };

  const renderOrdernacao = () => {
    if (isLoggedIn) {
      return false;
    } else {
      if (pesquisa) return false;
    }
    return true;
  };

  const loadProducts = () => {
    setProducts(products_placeholder)
    const token = localStorage.getItem("token");

    if (isLoggedIn && token) {
      setTitulo("TODOS OS PRODUTOS");
      getAllProductsAdm(token).then((data) => {
        setLoading(false)
        setProducts(data)
      });
      return;
    }
    if (categoria) {
      setTitulo(categoria);
      getProductsByCategory("asc", categoria).then((data) => {
        setLoading(false)
        setProducts(data)
      });
      return;
    }
    if (pesquisa) {
      setTitulo(`Resultado da pesquisa '${pesquisa}'`);
      getProductsByName(pesquisa).then((data) => {
        setLoading(false)
        setProducts(data)
      });
      return;
    }

    setTitulo("TODOS OS PRODUTOS");
    getAllProducts("asc").then((data) => {
      setLoading(false)
      setProducts(data)
    });
    return;
  };

  useEffect(() => {
    if (select) select.value = "asc";

    loadProducts();
  }, [categoria, pesquisa, isLoggedIn]);

  return (
    <main className="pagina-produtos" style={ centerLoader() }>
      { loading &&
      <ClipLoader
        color={ "var(--blue)" }
        loading={ loading }
        size={ 70 } 
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      }

      { !loading &&
      <div>
      <nav className="produtos-breadcrumbs">
        <Link to={"/produtos"}>Produtos</Link>
        {categoria && ">"}
        {categoria && <Link to={`/produtos/${categoria}`}>{categoria}</Link>}
      </nav>

      <div className="produtos-container">
        <h2>{titulo}</h2>

        <section className="produtos">
          <div className="ordenacao-container">
            {renderOrdernacao() && (
              <div>
                <label htmlFor="order">Ordenação: </label>
                <select
                  id="select-ordenacao"
                  name="order"
                  onChange={handleOrdenacaoChange}
                >
                  <option value="asc">A - Z</option>
                  <option value="desc">Z - A</option>
                  <option value="price/asc">Menor preço</option>
                  <option value="price/desc">Maior preço</option>
                </select>
              </div>
            )}
          </div>
          {products.map((product) => { 
            return <ProdutoCard key={product._id} product={product} isLoggedIn={isLoggedIn}/>;
          })}
        </section>
      </div>
      </div>
      }
    </main>
  );
};

export default PaginaProdutos;
