import CategoriaCard from '../components/CategoriaCard'
import './PaginaInicial.css'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import { useState } from 'react'
import { TypeCategoriaDestaque, TypeCategoriaSlider } from '../utils/Types'
import CategoriaDestaque from '../components/CategoriaDestaque'

const PaginaInicial = () => {
    const carousel_responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7
      }
    }

    const [categoriasSlider] = useState<TypeCategoriaSlider[]>([
      {
        nome: "Creatina",
        icone: "creatina.png"
      },
      {
        nome: "Whey",
        icone: "creatina.png"
      },
      {
        nome: "Pré-treino",
        icone: "creatina.png"
      },
      {
        nome: "Barra de proteína",
        icone: "creatina.png"
      },
      {
        nome: "Caneleira",
        icone: "creatina.png"
      },
      {
        nome: "Hipercalórico",
        icone: "creatina.png"
      },
      {
        nome: "Ômega 3",
        icone: "creatina.png"
      }
    ])

    const [categoriaDestaque] = useState<TypeCategoriaDestaque[]>([
      {
        titulo: "WHEY",
        produtos: [
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
        ],
        imagem: "destaque.png"
      },
      {
        titulo: "CREATINA",
        produtos: [
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
        ],
        imagem: "destaque.png"
      },
      {
        titulo: "PRÉ-TREINO",
        produtos: [
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
        ],
        imagem: "destaque.png"
      },
      {
        titulo: "BARRA DE PROTEÍNA",
        produtos: [
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
        ],
        imagem: "destaque.png"
      }
    ])

    return (
      <main>
        <section className="banner">
        </section>

        <div className="carousel-container">
          <Carousel containerClass="carousel" responsive={ carousel_responsive } infinite={ true }>
            { categoriasSlider.map((categoria_slider) => { 
              return <CategoriaCard 
                        key={ categoria_slider.nome } 
                        categoria_slider={ categoria_slider }
                      /> }) }
          </Carousel>
        </div>

        { categoriaDestaque.map((categoria_destaque, index) => {
          const direcao: string = index % 2 === 0 ? "direita" : "esquerda"
          return <CategoriaDestaque categoria_destaque={ categoria_destaque } posicao_destaque={ direcao }/>
        }) }
        
      </main>
    )
  }
  
  export default PaginaInicial