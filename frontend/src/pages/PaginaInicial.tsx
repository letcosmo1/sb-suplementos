import CategoriaCard from '../components/CategoriaCard'
import './PaginaInicial.css'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import { useEffect, useState } from 'react'
import { TypeHighlightCategory, TypeCategorySlider } from '../utils/Types'
import CategoriaDestaque from '../components/CategoriaDestaque'
import { getImageUrl } from '../utils/ImageUrl'
import { highlight_categories_placeholder } from '../utils/Placeholders'
import { categories_slider } from '../utils/CategoriesSlider'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { getHighlightCategories } from '../api/ProductsApi'

const PaginaInicial = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

  const banner_carousel_responsive = {
    device: {
      breakpoint: { max: 3000, min: 0 },
      items: 1
    }
  }
  const categories_carousel_responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 7
    },
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 4
    }
  }
  const loadBanners = () => {
    if(isMobile) {
      return [
      <img key="1" src={ getImageUrl("banner1-responsive.jpg") } alt="banner" />,
      <img key="2" src={ getImageUrl("banner-responsive.jpg") } alt="banner" />
      ]
    }
    return [
      <img key="1" src={ getImageUrl("banner1.jpg") } alt="banner" />,
      <img key="2" src={ getImageUrl("banner.png") } alt="banner" />
    ]
  }

  const [categoriesSlider] = useState<TypeCategorySlider[]>(categories_slider)

  const [highlightCategories, setHighlightCategories] = useState<TypeHighlightCategory[]>(highlight_categories_placeholder)
  
  useEffect(() => {
    getHighlightCategories()
      .then(data => {
        setHighlightCategories(data)
      })
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
          { loadBanners() }
        </Carousel>

        <div className="categories-carousel-container">
          <Carousel 
            containerClass="categories-carousel" 
            responsive={ categories_carousel_responsive } 
            infinite={ true }
            showDots={ true }
            removeArrowOnDeviceType={["mobile"]}
            dotListClass="categories-carousel-pontos"
          >
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