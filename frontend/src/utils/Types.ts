export type TypeProduto = {
    categoria: string,
    imagem: string,
    nome: string,
    preco: number,
    descricao: string,
    sabor: string,
    peso: string,
    tabela_nutricional: string
}
export type TypeCategoriaSlider = {
    nome: string,
    icone: string
}
export type TypeCategoriaDestaque = {
    titulo: string,
    produtos: Array<TypeProduto>,
    imagem: string
}
