import { getImage } from '../utils/ImageUrl';
import { TypeCategorySlider } from '../utils/Types';
import './CategoriaCard.css'
import { Link } from 'react-router-dom';

type PropTypes = {
    category_slider: TypeCategorySlider
}

const CategoriaCard = ({ category_slider }:PropTypes) => {

    return (
        <div className="categoria-card">
            <Link to={`/produtos/${category_slider.name}`}>
                <img src={ getImage(category_slider.icon) } />
            </Link>
            
            <h2>{ category_slider.name }</h2> 
        </div>
    )
  }
  
  export default CategoriaCard