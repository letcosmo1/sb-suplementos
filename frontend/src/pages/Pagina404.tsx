import { useNavigate } from "react-router-dom";
import "./Pagina404.css";

const Pagina404 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="div-404-container">
      <h1>404</h1>
      <div className="background-color-container">
        <h2>Desculpe, página não encontrada</h2>
        <h4 onClick={handleClick}>Pagina Inicial</h4>
      </div>
    </div>
  );
};

export default Pagina404;
