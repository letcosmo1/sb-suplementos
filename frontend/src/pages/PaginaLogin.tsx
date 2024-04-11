import Logo from '../components/Logo'
import './PaginaLogin.css'

const PaginaLogin = () => {

    return (
        <main className="login-page">
            <section className="login-container">
                <Logo />
                <div>
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha"/>
                </div>
                <button>OK</button>
            </section>
        </main>
    )
  }
  
  export default PaginaLogin
