import CategoriaCard from '../components/CategoriaCard'
import './PaginaInicial.css'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import { useEffect, useState } from 'react'
import { TypeHighlightCategory, TypeCategorySlider } from '../utils/Types'
import CategoriaDestaque from '../components/CategoriaDestaque'

const PaginaInicial = () => {
  const carousel_responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    }
  }

  const [categoriesSlider] = useState<TypeCategorySlider[]>([
    {
      name: "Creatina",
      icon: "creatina.png"
    },
    {
      name: "Whey",
      icon: "creatina.png"
    },
    {
      name: "Pré-treino",
      icon: "creatina.png"
    },
    {
      name: "Barra de proteína",
      icon: "creatina.png"
    },
    {
      name: "Caneleira",
      icon: "creatina.png"
    },
    {
      name: "Hipercalórico",
      icon: "creatina.png"
    },
    {
      name: "Ômega 3",
      icon: "creatina.png"
    }
  ])

  const api_url: string = "http://localhost:3000"

  const [highlightCategories] = useState<TypeHighlightCategory[]>([])

  const fetchProducts = (url: string) => {
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  useEffect(() => {
    fetchProducts(`${api_url}/products/asc`)
  }, []);

  return (
    <main>
      <section className="banner"></section>

        <div className="carousel-container">
          <Carousel containerClass="carousel" responsive={ carousel_responsive } infinite={ true }>
            { categoriesSlider.map((category_slider) => { 
              return <CategoriaCard 
                        key={ category_slider.name } 
                        category_slider={ category_slider }
                      /> }) }
          </Carousel>
        </div>

        { highlightCategories.map((highlight_category, index) => {
          const direcao: string = index % 2 === 0 ? "direita" : "esquerda"
          return <CategoriaDestaque highlight_category={ highlight_category } highlight_position={ direcao }/>
        }) }
        
      </main>
    )
  }
  
  export default PaginaInicial