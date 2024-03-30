export type TypeProduct = {
    _id: string 
    category: string,
    image: string,
    name: string,
    price: number,
    description: string,
    flavor: string,
    weight: string,
    nutritional_table: string
}
export type TypeCategoriaSlider = {
    nome: string,
    icone: string
}
export type TypeCategoriaDestaque = {
    titulo: string,
    produtos: Array<TypeProduct>,
    imagem: string
}
