import './CategoriaCard.css'
import creatina from '../assets/creatina.png';
import { Link } from 'react-router-dom';

const CategoriaCard = () => {

    return (
        <div className="categoria-card">
            <Link to={'/'}>
                <img src={creatina} />
            </Link>
            
            <h2>Creatina</h2> 
        </div>
    )
  }
  
  export default CategoriaCard