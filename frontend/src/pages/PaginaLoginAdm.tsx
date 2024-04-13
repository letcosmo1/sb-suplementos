import { BaseSyntheticEvent, useState } from 'react'
import Logo from '../components/Logo'
import './PaginaLoginAdm.css'
import { useNavigate } from 'react-router-dom';
import { signIn } from '../api/LoginApi';

type PropTypes = {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  }

const PaginaLogin = ({ setIsLoggedIn }: PropTypes) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const handleEmailChange = (e: BaseSyntheticEvent) => {
        setEmail(e.target.value)
    }
    const handleSenhaChange = (e: BaseSyntheticEvent) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault()

        signIn(email, password)
            .then((data: string) => {
                if(data) {
                    localStorage.setItem("token", data)
                    setIsLoggedIn(true)
                    navigate("/produtos")
                } else {
                    setMessage("*Login ou senha inválida.")
                }
            })
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
            <p className="login-message">{ message }</p>
        </main>
    )
  }
  
  export default PaginaLogin
