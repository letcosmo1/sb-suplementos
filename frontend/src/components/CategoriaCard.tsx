import { getImageUrl } from '../utils/ImageUrl';
import { TypeCategoriaSlider } from '../utils/Types';
import './CategoriaCard.css'
import { Link } from 'react-router-dom';

type PropTypes = {
    categoria_slider: TypeCategoriaSlider
}

const CategoriaCard = ({ categoria_slider }:PropTypes) => {

    return (
        <div className="categoria-card">
            <Link to={"/"}>
                <img src={ getImageUrl(categoria_slider.icone) } />
            </Link>
            
            <h2>{ categoria_slider.nome }</h2> 
        </div>
    )
  }
  
  export default CategoriaCard