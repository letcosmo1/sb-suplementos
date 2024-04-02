interface CustomError {
  code: number;
  success: boolean;
  message: string;
}

interface ErrorSet {
  [key: string]: CustomError;
}

const Errors: { [key: string]: ErrorSet } = {
  en: {
    INVALID_ID: {
      code: 400,
      success: false,
      message: "Invalid product ID!",
    },
    PRODUCT_NOT_FOUND: {
      code: 404,
      success: false,
      message: "No product found!",
    },
    CATEGORY_NOT_FOUND: {
      code: 404,
      success: false,
      message: "No category found!",
    },
    PRODUCT_NOT_RECEIVED: {
      code: 404,
      success: false,
      message:
        "The product could not be found, please verify your purchase and try again!",
    },
    INTERNAL_SERVER_ERROR: {
      code: 500,
      success: false,
      message: "Internal server error!",
    },
  },
  pt_BR: {
    INVALID_ID: {
      code: 400,
      success: false,
      message: "ID do produto inválido!",
    },
    PRODUCT_NOT_FOUND: {
      code: 404,
      success: false,
      message: "Nenhum produto encontrado!",
    },
    CATEGORY_NOT_FOUND: {
      code: 404,
      success: false,
      message: "Nenhuma categoria encontrada!",
    },
    PRODUCT_NOT_RECEIVED: {
      code: 404,
      success: false,
      message:
        "Não foi possivel encontrar o produto, verifique sua compra e tente novamente!",
    },
    INTERNAL_SERVER_ERROR: {
      code: 500,
      success: false,
      message: "Erro interno no servidor!",
    },
  },
  es: {
    INVALID_ID: {
      code: 400,
      success: false,
      message: "¡ID de producto inválido!",
    },
    PRODUCT_NOT_FOUND: {
      code: 404,
      success: false,
      message: "¡Producto no encontrado!",
    },
    CATEGORY_NOT_FOUND: {
      code: 404,
      success: false,
      message: "¡No se encontró ninguna categoría!",
    },
    PRODUCT_NOT_RECEIVED: {
      code: 404,
      success: false,
      message:
        "No se pudo encontrar el producto, verifique su compra e inténtelo nuevamente.",
    },
    INTERNAL_SERVER_ERROR: {
      code: 500,
      success: false,
      message: "¡Error interno del servidor!",
    },
  },
};

const language: string = process.env.LANGUAGE || "en";

export default Errors[language];
