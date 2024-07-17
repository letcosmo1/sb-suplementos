import { BaseSyntheticEvent, useState } from 'react'
import './AdminPesquisa.css'
import { getProductsByNameAdm } from '../api/ProductsApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { TypeProduct } from '../utils/Types'

type PropTypes = {
  token: string | null,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setOrderByColumn: React.Dispatch<React.SetStateAction<string>>,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setProducts: React.Dispatch<React.SetStateAction<TypeProduct[]>>
}

const AdminPesquisa = ({ token, setLoading, setOrderByColumn, setPage, setProducts }: PropTypes) => {
    const select: HTMLSelectElement | null =
      document.querySelector("#select-categoria")
    const input: HTMLInputElement | null =
      document.querySelector("#pesquisa-admin")

    const [pesquisa, setPesquisa] = useState<string>("")

    const handlePesquisaChange = (e: BaseSyntheticEvent) => {
      setPesquisa(e.target.value)
    }

    const handleButtonClick = (e: BaseSyntheticEvent) => {
			e.preventDefault()
      
			if(token) {
        if (select) 
          select.value = "Todos"
        if(input)
          input.value = ""

        setLoading(true)
        setOrderByColumn("")
        setPage(0)
				getProductsByNameAdm(token, pesquisa)
					.then((data) => {
            setLoading(false)
            setProducts(data)
          })
      }
		}

    return (
      <form className="admin-pesquisa-form">
					<input id="pesquisa-admin" type="text" placeholder="Pesquisar" onChange={ handlePesquisaChange }/>
					<button onClick={ handleButtonClick }>
						<FontAwesomeIcon 
							icon={ faMagnifyingGlass } 
							style={{fontSize: 15, color: "var(--gray)"}} 
							/>
					</button>
			</form>
    )
}
  
export default AdminPesquisa