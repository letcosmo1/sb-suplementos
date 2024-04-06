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
export type TypeCategorySlider = {
    name: string,
    icon: string
}
export type TypeHighlightCategory = {
    _id: string,
    title: string,
    products: Array<TypeProduct>,
    highlight_image: string
}
export type TypeSaleProduct = {
    name: string;
    price: number;
    flavor?: string | any
}
