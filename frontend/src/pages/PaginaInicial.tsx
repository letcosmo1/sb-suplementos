import CategoriaCard from '../components/CategoriaCard'
import './PaginaInicial.css'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import { useEffect, useState } from 'react'
import { TypeHighlightCategory, TypeCategorySlider } from '../utils/Types'
import CategoriaDestaque from '../components/CategoriaDestaque'
import { getImageUrl } from '../utils/ImageUrl'
import { highlight_categories_mock, highlight_categories_placeholder } from '../utils/Placeholders'

const PaginaInicial = () => {
  const banner_carousel_responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    }
  }
  const categories_carousel_responsive = {
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
      name: "Barra de Proteína",
      icon: "categories-slider-barradeproteina.png"
    },
    {
      name: "Hipercalórico",
      icon: "categories-slider-hipercalorico.png"
    },
    {
      name: "Albumina",
      icon: "categories-slider-albumina.png"
    },
    {
      name: "Coqueteleira",
      icon: "categories-slider-coqueteleira.png"
    },
    {
      name: "Ômega 3",
      icon: "categories-slider-omega3.png"
    },
    {
      name: "Vitaminas e Minerais",
      icon: "categories-slider-vitaminaseminerais.png"
    },
    {
      name: "Thermo Flame",
      icon: "categories-slider-thermo-flame.png"
    },
    {
      name: "Luva",
      icon: "categories-slider-luva.png"
    },
    {
      name: "Joelheira",
      icon: "categories-slider-caneleira.png"
    },
    {
      name: "Tornozeleira",
      icon: "categories-slider-tornozeleira.png"
    },
  ])

  const [highlightCategories, setHighlightCategories] = useState<TypeHighlightCategory[]>(highlight_categories_placeholder)
  
  useEffect(() => {
    // getHighlightCategories()
    //   .then(data => {
    //     setHighlightCategories(data)
    //   })
    setHighlightCategories(highlight_categories_mock)
  }, []);

  return (
      <main>
        <Carousel 
          containerClass="banner-carousel" 
          responsive={ banner_carousel_responsive } 
          infinite={ true } 
          autoPlay={ true } 
          autoPlaySpeed={ 5000 }
        >
          <img src={ getImageUrl("banner1.jpg") } alt="banner" />
          <img src={ getImageUrl("banner.png") } alt="banner" />
        </Carousel>

        <div className="categories-carousel-container">
          <Carousel containerClass="categories-carousel" responsive={ categories_carousel_responsive } infinite={ true }>
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