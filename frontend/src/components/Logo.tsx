import { getImageUrl } from '../utils/ImageUrl'
import './Logo.css'

const Logo = () => {

    return (
        <img className="logo" src={ getImageUrl("logo.png") } alt="" />
    )
  }
  
  export default Logo