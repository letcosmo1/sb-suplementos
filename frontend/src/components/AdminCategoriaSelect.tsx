import { BaseSyntheticEvent } from 'react'
import './AdminCategoriaSelect.css'
import { getAllProductsAdm, getProductsByCategoryAdm } from '../api/ProductsApi'
import { TypeProduct } from '../utils/Types'

type PropTypes = {
  token: string | null,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setOrderByColumn: React.Dispatch<React.SetStateAction<string>>,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setProducts: React.Dispatch<React.SetStateAction<TypeProduct[]>>
}

const AdminCategoriaSelect = ({ token, setLoading, setOrderByColumn, setPage, setProducts }: PropTypes) => {
  
    const handleCategoriaChange = (e: BaseSyntheticEvent) => {
      const category: string = e.target.value

      if(token) {
        setLoading(true)
        setOrderByColumn("")
        setPage(0)

        if(category === "Todos") {
          getAllProductsAdm(token)
          .then((data) => {
            setLoading(false)
            setProducts(data)
          })
        } else {
          getProductsByCategoryAdm(token, category)
            .then((data) => {
              setLoading(false)
              setProducts(data)
            })
        }
      }
    }

    return (
      <div className="categoria-select-container">
        <label htmlFor="categoria">Categoria: </label>
        <select
          id="select-categoria"
          name="categoria"
          onChange={ handleCategoriaChange }
        >
          <option value="Todos">Todos</option>
          <option value="Creatina">Creatina</option>
          <option value="Whey">Whey</option>
          <option value="Pré-treino">Pré-treino</option>
          <option value="Barra de Proteína">Barra de Proteína</option>
          <option value="Hipercalórico">Hipercalórico</option>
          <option value="Albumina">Albumina</option>
          <option value="Coqueteleira">Coqueteleira</option>
          <option value="Vitaminas e Minerais">Vitaminas e Minerais</option>
          <option value="Luva">Luva</option>
          <option value="Joelheira">Joelheira</option>
          <option value="Tornoseleira">Tornoseleira</option>
        </select>
      </div>
    )
}
  
export default AdminCategoriaSelect