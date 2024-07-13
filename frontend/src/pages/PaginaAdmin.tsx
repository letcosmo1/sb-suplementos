import { BaseSyntheticEvent, useEffect, useState } from 'react'
import './PaginaAdmin.css'
import { TypeProduct } from '../utils/Types'
import { getAllProductsAdm, getProductsByCategoryAdm, getProductsByNameAdm, updateProductAvailableAdm } from '../api/ProductsApi'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Checkbox, styled, TablePagination } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus, faMagnifyingGlass, faPen } from '@fortawesome/free-solid-svg-icons'
import ClipLoader from 'react-spinners/ClipLoader'

const PaginaAdmin = () => {
    const token = localStorage.getItem("token")

    const select: HTMLSelectElement | null =
      document.querySelector("#select-categoria")
    const input: HTMLInputElement | null =
      document.querySelector("#pesquisa-admin")

    const [products, setProducts] = useState<TypeProduct[]>([])
		const [page, setPage] = useState(0)
		const [pesquisa, setPesquisa] = useState<string>("")
    const [loading, setLoading] = useState(true)
		
		const rows_per_page = 7

		const StyledTableRow = styled(TableRow)(({ theme }) => ({
			'&:nth-of-type(odd)': {
				backgroundColor: theme.palette.action.hover,
			}
		}))

    const centerLoader = () => {
      if(loading) {
        return {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(var(--view-height) - 214px)"
        }
      }
      return {}
    }

		const handleCheckboxClick = (e: BaseSyntheticEvent, id: string) => {
			const disponivel: boolean = e.target.checked

			if(token) 
				updateProductAvailableAdm(token, id, disponivel)

			setProducts(products.map((product) => {
				if(product._id === id) 
					product.available = disponivel

				return product
			}))
		}

		const handleChangePage = (new_page: number) => {
			setPage(new_page);
		}

		const handleCategoriaChange = (e: BaseSyntheticEvent) => {
			const category: string = e.target.value

			if(token && category) {
        setLoading(true)
        setPage(0)
				getProductsByCategoryAdm(token, category)
					.then((data) => {
            setLoading(false)
            setProducts(data)
          })
      }
		}

		const handlePesquisaChange = (e: BaseSyntheticEvent) => {
			setPesquisa(e.target.value)
		}

		const handleButtonClick = (e: BaseSyntheticEvent) => {
			e.preventDefault()
      
			if(token) {
        if (select) 
          select.value = ""
        if(input)
          input.value = ""

        setLoading(true)
        setPage(0)
				getProductsByNameAdm(token, pesquisa)
					.then((data) => {
            setLoading(false)
            setProducts(data)
          })
      }
		}
    
    useEffect(() => {
			if(token) {
				getAllProductsAdm(token)
					.then((data) => {
            setLoading(false)
            setProducts(data)
          })
			}
    }, [])
    
    return (
      <main className="pagina-admin">
				<form className="admin-pesquisa-form">
					<input id="pesquisa-admin" type="text" placeholder="Pesquisar" onChange={ handlePesquisaChange }/>
					<button onClick={ handleButtonClick }>
						<FontAwesomeIcon 
							icon={ faMagnifyingGlass } 
							style={{fontSize: 15, color: "var(--gray)"}} 
							/>
					</button>
				</form>
				<div className="operacoes-container">
					<div className="categoria-select-container">
						<label htmlFor="categoria">Categoria: </label>
						<select
              id="select-categoria"
							name="categoria"
							onChange={ handleCategoriaChange }
						>
							<option value="">Selecionar</option>
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

					<FontAwesomeIcon icon={ faCirclePlus } />
				</div>
        <div style={ centerLoader() }>
        { loading &&
          <ClipLoader
            color={ "var(--blue)" }
            loading={ loading }
            size={ 70 } 
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
        { !loading &&
				<TableContainer className="table-container">
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell>Disponível</TableCell>
							<TableCell>Nome</TableCell>
							<TableCell>Sabor</TableCell>
							<TableCell>Preço</TableCell>
							<TableCell>Categoria</TableCell>
							<TableCell>Imagem</TableCell>
							<TableCell>Tabela</TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
            { products.length === 0 &&
              <TableRow>
                <TableCell 
                  colSpan={ 9 } 
                  style={{ textAlign: "center", fontSize: "14px", padding: "48px 0" }}
                >
                  PRODUTOS NÃO ENCONTRADOS
                </TableCell>
              </TableRow>
            }
						{products.slice(page * rows_per_page, page * rows_per_page + rows_per_page).map((product, i) => (
							<StyledTableRow key={ i }>
								<TableCell><Checkbox onClick={ (e) => handleCheckboxClick(e, product._id) } checked={ product.available }/></TableCell>
								<TableCell>{ product.name }</TableCell>
								<TableCell>{ product.flavor }</TableCell>
								<TableCell>{ product.price }</TableCell>
								<TableCell>{ product.category }</TableCell>
								<TableCell>{ product.image }</TableCell>
								<TableCell>{ product.table }</TableCell>
								<TableCell><FontAwesomeIcon icon={ faPen } /></TableCell>
								<TableCell><FontAwesomeIcon icon={ faCircleMinus } /></TableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
        
				<TablePagination
					rowsPerPageOptions={[]} 
					component="div"
					count={ products.length }
					rowsPerPage={ rows_per_page }
					page={ page }
					onPageChange={ (e, page) => handleChangePage(page) }
				/>
				</TableContainer>
        }
        </div>
    	</main>
    )
  }
	
  export default PaginaAdmin