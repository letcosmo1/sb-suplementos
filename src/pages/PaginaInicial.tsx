import CategoriaCard from '../components/CategoriaCard'
import './PaginaInicial.css'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import ProdutoPaginaInicial from '../components/ProdutoPaginaInicial'
import DestaquePaginaInicial from '../components/DestaquePaginaInicial'

const PaginaInicial = () => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }

    return (
      <main>
        <section className="banner">
        </section>

        <div className="carousel-container">
          <Carousel containerClass="carousel" responsive={responsive} infinite={true}>
            <CategoriaCard />
            <CategoriaCard />
            <CategoriaCard />
            <CategoriaCard />
            <CategoriaCard />
            <CategoriaCard />
            <CategoriaCard />
          </Carousel>
        </div>

        <section className="produtos-principais">
          <ProdutoPaginaInicial />
          <ProdutoPaginaInicial />
          <ProdutoPaginaInicial />
          <ProdutoPaginaInicial />
          <DestaquePaginaInicial />
        </section>
      </main>
    )
  }
  
  export default PaginaInicial