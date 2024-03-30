import './PaginaProdutos.css'
import { Link } from 'react-router-dom'
import ProdutoCard from '../components/ProdutoCard'
import { useEffect, useState } from 'react'
import { TypeProduto } from '../utils/Types'

const PaginaProdutos = () => {
    const [produtos] = useState<TypeProduto[]>([
        {
            categoria: "Creatina",
            imagem: "whey.png",
            nome: "Creatina 100g Creapture - Growth Supplements",
            preco: 999.99,
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nulla auctor, dignissim lectus vel, viverra nunc. Fusce ac maximus lectus. Ut mollis, lacus id finibus placerat, dolor tortor placerat eros, non fermentum eros quam vitae ex.",
            sabor: "Chocolate",
            peso: "900g",
            tabela_nutricional: "tbl-nutricional.png"
          },
          {
            categoria: "Creatina",
            imagem: "whey.png",
            nome: "Creatina 100g Creapture - Growth Supplements",
            preco: 999.99,
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nulla auctor, dignissim lectus vel, viverra nunc. Fusce ac maximus lectus. Ut mollis, lacus id finibus placerat, dolor tortor placerat eros, non fermentum eros quam vitae ex.",
            sabor: "Chocolate",
            peso: "900g",
            tabela_nutricional: "tbl-nutricional.png"
          },
          {
            categoria: "Creatina",
            imagem: "whey.png",
            nome: "Creatina 100g Creapture - Growth Supplements",
            preco: 999.99,
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nulla auctor, dignissim lectus vel, viverra nunc. Fusce ac maximus lectus. Ut mollis, lacus id finibus placerat, dolor tortor placerat eros, non fermentum eros quam vitae ex.",
            sabor: "Chocolate",
            peso: "900g",
            tabela_nutricional: "tbl-nutricional.png"
          },
          {
            categoria: "Creatina",
            imagem: "whey.png",
            nome: "Creatina 100g Creapture - Growth Supplements",
            preco: 999.99,
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nulla auctor, dignissim lectus vel, viverra nunc. Fusce ac maximus lectus. Ut mollis, lacus id finibus placerat, dolor tortor placerat eros, non fermentum eros quam vitae ex.",
            sabor: "Chocolate",
            peso: "900g",
            tabela_nutricional: "tbl-nutricional.png"
          },
          {
            categoria: "Creatina",
            imagem: "whey.png",
            nome: "Creatina 100g Creapture - Growth Supplements",
            preco: 999.99,
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nulla auctor, dignissim lectus vel, viverra nunc. Fusce ac maximus lectus. Ut mollis, lacus id finibus placerat, dolor tortor placerat eros, non fermentum eros quam vitae ex.",
            sabor: "Chocolate",
            peso: "900g",
            tabela_nutricional: "tbl-nutricional.png"
          },
          {
            categoria: "Creatina",
            imagem: "whey.png",
            nome: "Creatina 100g Creapture - Growth Supplements",
            preco: 999.99,
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nulla auctor, dignissim lectus vel, viverra nunc. Fusce ac maximus lectus. Ut mollis, lacus id finibus placerat, dolor tortor placerat eros, non fermentum eros quam vitae ex.",
            sabor: "Chocolate",
            peso: "900g",
            tabela_nutricional: "tbl-nutricional.png"
          },
          {
            categoria: "Creatina",
            imagem: "whey.png",
            nome: "Creatina 100g Creapture - Growth Supplements",
            preco: 999.99,
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nulla auctor, dignissim lectus vel, viverra nunc. Fusce ac maximus lectus. Ut mollis, lacus id finibus placerat, dolor tortor placerat eros, non fermentum eros quam vitae ex.",
            sabor: "Chocolate",
            peso: "900g",
            tabela_nutricional: "tbl-nutricional.png"
          },
          {
            categoria: "Creatina",
            imagem: "whey.png",
            nome: "Creatina 100g Creapture - Growth Supplements",
            preco: 999.99,
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare nulla auctor, dignissim lectus vel, viverra nunc. Fusce ac maximus lectus. Ut mollis, lacus id finibus placerat, dolor tortor placerat eros, non fermentum eros quam vitae ex.",
            sabor: "Chocolate",
            peso: "900g",
            tabela_nutricional: "tbl-nutricional.png"
          }
    ])

    useEffect(() => {
      fetch("http://localhost:3000")
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);

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
                    
                    { produtos.map((produto) => {
                        return <ProdutoCard produto={ produto }/>
                    }) }
                    
                </section>
            </div>
        </main>
    )
  }
  
  export default PaginaProdutos