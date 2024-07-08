import "./PaginaProdutos.css";
import { Link, useLocation } from "react-router-dom";
import ProdutoCard from "../components/ProdutoCard";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { TypeProduct } from "../utils/Types";
import {
  getAllProducts,
  getProductsByCategory,
  getProductsByName,
} from "../api/ProductsApi";
import { ClipLoader } from "react-spinners";

const PaginaProdutos = () => {
  const select: HTMLSelectElement | null =
    document.querySelector("#select-ordenacao");

  const location = useLocation();
  const query_params = new URLSearchParams(location.search);
  const categoria = query_params.get("categoria");
  const pesquisa = query_params.get("pesquisa");

  const [titulo, setTitulo] = useState<string>("");
  const [products, setProducts] = useState<TypeProduct[]>([])

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
    if (pesquisa) return false;

    return true;
  };

  const loadProducts = () => {
    setLoading(true);

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
  }, [categoria, pesquisa]);

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
            return <ProdutoCard key={product._id} product={product}/>;
          })}
        </section>
      </div>
      </div>
      }
    </main>
  );
};

export default PaginaProdutos;
