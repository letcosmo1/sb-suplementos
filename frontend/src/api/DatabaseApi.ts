import { TypeHighlightCategory, TypeProduct } from "../utils/Types"

const api_url: string = "http://localhost:3000"

export const getHighlightCategories = () => {
    return fetch(`${api_url}/categories/hl`)
            .then(res => res.json())
            .then((data: TypeHighlightCategory[]) => data)
}
export const getProducts = (order: string) => {
    return fetch(`${api_url}/products/${order}`)
            .then(res => res.json())
            .then((data: TypeProduct[]) => data)
}
export const getProductById = (id: string | undefined) => {
    return fetch(`${api_url}/product/${id}`)
            .then(res => res.json())
            .then((data: TypeProduct) => data)
}