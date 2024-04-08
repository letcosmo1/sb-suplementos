import './DestaqueCard.css'
import { getImage } from '../utils/ImageUrl';

type PropTypes = {
    imagem: string
}

const DestaqueCard = ({ imagem }:PropTypes) => {

    return (
        <div className="destaque">
            <img src={ getImage(imagem) } />
        </div>
    )
  }
  
  export default DestaqueCard