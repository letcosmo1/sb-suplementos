import { BaseSyntheticEvent, useState } from 'react'
import Logo from '../components/Logo'
import './PaginaLogin.css'
import { useNavigate } from 'react-router-dom';

const PaginaLogin = () => {
    const navigate = useNavigate();
    const mensagem: HTMLElement | null = document.querySelector(".login-message")

    const login_valido = {
        email: "dev@dev.com",
        senha: "dev123"
    }

    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    const handleEmailChange = (e: BaseSyntheticEvent) => {
        setEmail(e.target.value)
    }
    const handleSenhaChange = (e: BaseSyntheticEvent) => {
        setSenha(e.target.value)
    }
    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault()

        if(login_valido.email === email && 
           login_valido.senha === senha) {
            localStorage.setItem("token", "token-secreto")
            navigate("/produtos")
        } else {
            if(mensagem) mensagem.innerHTML = "*E-mail ou senha inválida."
        }
    }

    return (
        <main className="login">
            <form className="login-container">
                <Logo />
                <div>
                    <input onChange={ handleEmailChange } type="email" placeholder="E-mail" />
                    <input onChange={ handleSenhaChange } type="password" placeholder="Senha"/>
                </div>
                <button onClick={ handleSubmit }>OK</button>
            </form>
            <p className="login-message"></p>
        </main>
    )
  }
  
  export default PaginaLogin
