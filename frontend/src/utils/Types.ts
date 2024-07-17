export type TypeProduct = {
    _id: string 
    category: string,
    image: string,
    name: string,
    price: number,
    description: string,
    flavor: string,
    weight: string,
    table: string,
    available: boolean
}
export type TypeCategorySlider = {
    name: string,
    icon: string
}
export type TypeHighlightCategory = {
    _id: string,
    title: string,
    products_ids: Array<string>,
    image: string
}
export type TypeSaleProduct = {
    name: string,
    price: number,
    flavor?: string | any
}

export type TypeTableHeadCell = {
    label: string,
    property?: string
}
