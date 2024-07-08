import { useNavigate } from "react-router-dom"
import "./Pagina404.css"

const Pagina404 = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/");
  };
  return (
    <main className="main-404-container">
      <div className="code-404">
        <h1>404</h1>
      </div>

      <div className="msg-404-container">
        <h2>Desculpe, página não encontrada.</h2>
        <button onClick={ handleClick }>PÁGINA INICIAL</button>
      </div>
    </main>
  )
}

export default Pagina404;
