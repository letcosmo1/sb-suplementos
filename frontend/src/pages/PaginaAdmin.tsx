import { BaseSyntheticEvent, useEffect, useState } from 'react'
import './PaginaAdmin.css'
import { TypeProduct, TypeTableHeadCell } from '../utils/Types'
import { getAllProductsAdm, updateProductAvailableAdm } from '../api/ProductsApi'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Checkbox, styled, TablePagination, TableSortLabel } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus, faPen } from '@fortawesome/free-solid-svg-icons'
import ClipLoader from 'react-spinners/ClipLoader'
import { toReais } from '../utils/StringFormat'
import AdminPesquisa from '../components/AdminPesquisa'
import AdminCategoriaSelect from '../components/AdminCategoriaSelect'

const PaginaAdmin = () => {
    const token = localStorage.getItem("token")

    const [products, setProducts] = useState<TypeProduct[]>([])
		const [page, setPage] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true)
    const [orderByColumn, setOrderByColumn] = useState<string>("")
    const [order, setOrder] = useState<"asc" | "desc">("asc")
		
		const rows_per_page = 7

    const tableHeadCells: TypeTableHeadCell[] = [
      { label: "Disponível"},
      { label: "Nome", property: "name" },
      { label: "Sabor" },
      { label: "Preço", property: "price" },
      { label: "Categoria" },
      { label: "Imagem" },
      { label: "Tabela" },
      { label: "" },
      { label: "" }
    ]

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

    const handleChangePage = (new_page: number) => {
			setPage(new_page);
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

    const handleSortRequest = (column: string | undefined) => {
      let verified_column: "name" | "price" = "name"

      if(column === "name" || column === "price")
        verified_column = column

      if(!(column === orderByColumn)) {
        setOrder("asc")
        setOrderByColumn(verified_column)
        sortProducts("asc", verified_column)
        return
      }

      if(order === "asc") {
        setOrder("desc")
        sortProducts("desc", verified_column)
        return
      } 
      
      setOrder("asc")
      sortProducts("asc", verified_column)
      return
    }

    const sortProducts = (order: string, column: "name" | "price") => {
      setProducts(products.sort((a, b) => {
        if (order === "asc") {
          return a[column] > b[column] ? 1 : -1
        }
        return a[column] < b[column] ? 1 : -1
      }))
    }
    
    useEffect(() => {
			if(token) {
				getAllProductsAdm(token)
					.then((data) => {
            setLoading(false)
            setProducts(data)
          })
			}
    }, [token])
    
    return (
      <main className="pagina-admin">
				<AdminPesquisa 
          token={ token } 
          setLoading={ setLoading } 
          setOrderByColumn={ setOrderByColumn } 
          setPage={ setPage } 
          setProducts={ setProducts }
        />

				<div className="operacoes-container">
          <AdminCategoriaSelect
            token={ token } 
            setLoading={ setLoading } 
            setOrderByColumn={ setOrderByColumn } 
            setPage={ setPage } 
            setProducts={ setProducts }
          />
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
            { tableHeadCells.map((cell, i) => {
              if(!cell.property) {
                return <TableCell key={ i }>{ cell.label }</TableCell>
              }
              return (
              <TableCell key={ i }>
                <TableSortLabel
                  active={ orderByColumn === cell.property }
                  direction={ orderByColumn === cell.property  ? order : "asc"  }
                  onClick={ () => handleSortRequest(cell.property) }
                >
                  { cell.label }
                </TableSortLabel>
              </TableCell> ) 
            }) }
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

						{ products.slice(page * rows_per_page, page * rows_per_page + rows_per_page).map((product, i) => (
							<StyledTableRow key={ i }>
								<TableCell><Checkbox onClick={ (e) => handleCheckboxClick(e, product._id) } checked={ product.available }/></TableCell>
								<TableCell>{ product.name }</TableCell>
								<TableCell>{ product.flavor }</TableCell>
								<TableCell>{ toReais(product.price) }</TableCell>
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
					onPageChange={ (_, page) => handleChangePage(page) }
				/>
				</TableContainer>
        }
        </div>
    	</main>
    )
  }
	
  export default PaginaAdmin