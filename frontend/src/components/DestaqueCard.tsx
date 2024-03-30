import './DestaqueCard.css'
import { getImageUrl } from '../utils/ImageUrl';

type PropTypes = {
    imagem: string
}

const DestaqueCard = ({ imagem }:PropTypes) => {

    return (
        <div className="destaque">
            <img src={ getImageUrl(imagem) } />
        </div>
    )
  }
  
  export default DestaqueCard