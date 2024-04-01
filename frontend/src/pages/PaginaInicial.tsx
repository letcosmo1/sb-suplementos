import CategoriaCard from '../components/CategoriaCard'
import './PaginaInicial.css'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import { useEffect, useState } from 'react'
import { TypeHighlightCategory, TypeCategorySlider } from '../utils/Types'
import CategoriaDestaque from '../components/CategoriaDestaque'
import { getHighlightCategories } from '../api/DatabaseApi'

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
      icon: "categories-slider-creatina.png"
    },
    {
      name: "Whey",
      icon: "categories-slider-whey.png"
    },
    {
      name: "Pré-treino",
      icon: "categories-slider-pretreino.png"
    },
    {
      name: "Barra de proteína",
      icon: "categories-slider-barradeproteina.png"
    },
    {
      name: "Caneleira",
      icon: "categories-slider-caneleira.png"
    },
    {
      name: "Hipercalórico",
      icon: "categories-slider-hipercalorico.png"
    },
    {
      name: "Ômega 3",
      icon: "categories-slider-omega3.png"
    }
  ])

  const [highlightCategories, setHighlightCategories] = useState<TypeHighlightCategory[]>([])

  useEffect(() => {
    getHighlightCategories()
      .then(data => setHighlightCategories(data))
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
          return <CategoriaDestaque key={ highlight_category._id } highlight_category={ highlight_category } highlight_position={ direcao }/>
        }) }
        
      </main>
    )
  }
  
  export default PaginaInicial