import {
  TypeHighlightCategory,
  TypeProduct,
  TypeSaleProduct,
} from "../utils/Types";

const api_url: string = "http://localhost:3000";

export const getHighlightCategories = () => {
  return fetch(`${api_url}/categories/hl`)
    .then((res) => res.json())
    .then((data: TypeHighlightCategory[]) => data);
};
export const getAllProductsAdm = (token: string) => {
  return fetch(`${api_url}/admin/produtos`, {
    method: "GET",
    headers: { authorization: `Bearer ${token}` },
  })
    .then((res) => res.json())
    .then((data: TypeProduct[]) => data);
};
export const getAllProducts = (order: string) => {
  return fetch(`${api_url}/products/${order}`)
    .then((res) => res.json())
    .then((data: TypeProduct[]) => data);
};
export const getProductsByName = (name: string) => {
  return fetch(`${api_url}/products/${name}`)
    .then((res) => res.json())
    .then((data: TypeProduct[]) => data);
};
export const getProductById = (id: string | undefined) => {
  return fetch(`${api_url}/product/${id}`)
    .then((res) => res.json())
    .then((data: TypeProduct) => data);
};
export const getProductsByCategory = (order: string, category: string) => {
  return fetch(`${api_url}/products/category/${order}/${category}`)
    .then((res) => res.json())
    .then((data: any) => {
      let products: TypeProduct[] = [];

      if (!data.message) products = data;

      return products;
    });
};
export const sendProductForSale = (product: TypeSaleProduct) => {
  return fetch(`${api_url}/sale`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ product: product }),
  })
    .then((res) => res.json())
    .then((data) => {
      let url = "";
      if (data.url) url = data.url;
      return url;
    });
};
export const updateProductAvailableAdm = (
  token: string,
  _id: string,
  available: boolean
) => {
  console.log(_id)
  return fetch(`${api_url}/admin/patch/${_id}`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ available: available }),
  })
    .then((res) => res.json())
    .then(console.log)
}
