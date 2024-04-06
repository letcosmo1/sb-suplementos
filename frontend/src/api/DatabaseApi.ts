import { TypeHighlightCategory, TypeProduct, TypeSaleProduct } from "../utils/Types"

const api_url: string = "http://localhost:3000"

export const getHighlightCategories = () => {
    return fetch(`${api_url}/categories/hl`)
            .then(res => res.json())
            .then((data: TypeHighlightCategory[]) => data)
}
export const getAllProducts = (order: string) => {
    return fetch(`${api_url}/products/${order}`)
            .then(res => res.json())
            .then((data: TypeProduct[]) => data)
}
export const getProductById = (id: string | undefined) => {
    return fetch(`${api_url}/product/${id}`)
            .then(res => res.json())
            .then((data: TypeProduct) => data)
}
export const getProductsByCategory = (order: string, category: string) => {
    return fetch(`${api_url}/products/category/${order}/${category}`)
            .then(res => res.json())
            .then((data: any) => {
                let products: TypeProduct[] = []
                if(data.message) {
                    return products
                }
                products = data
                return products
            })
}
export const sendProductForSale = (product: TypeSaleProduct) => {
    fetch(`${api_url}/sale`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {"Content-type": "application/json"}    
    })
        .then(res => res.json())
        .then(console.log)
}