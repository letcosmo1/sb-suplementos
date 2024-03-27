import { ProductsController } from "@controllers/products-controller";
import { fakerPT_BR } from "@faker-js/faker";
import ProductModel from "@models/product-model";
import connectToMongoDB from "@mongoose/mongoose";
import { Request, Response } from "express";
import mongoose from "mongoose";

const productsToCreate = 5;

/*
   ProductModel 
*/
describe("ProductModelController Testing", () => {
  beforeAll(async () => {
    await connectToMongoDB();
  });

  test("ProductModelController Create Test", async () => {
    const productInput = {
      productName: fakerPT_BR.commerce.productName(),
      productCategory: fakerPT_BR.commerce.productName(),
      productImage: fakerPT_BR.image.url(),
      productPrice: fakerPT_BR.commerce.price(),
      productFlavor: fakerPT_BR.commerce.productAdjective(),
      productWeight: fakerPT_BR.number.float(),
      productDescription: fakerPT_BR.commerce.productDescription(),
      nutritionalTable: fakerPT_BR.lorem.text(),
    };
    const person = new ProductModel({ ...productInput });
    const createdProduct = await person.save();
    expect(createdProduct).toBeDefined();
    expect(createdProduct.productName).toBe(person.productName);
    expect(createdProduct.productCategory).toBe(person.productCategory);
    expect(createdProduct.productImage).toBe(person.productImage);
    expect(createdProduct.productPrice).toBe(person.productPrice);
    expect(createdProduct.productDescription).toBe(person.productDescription);
    expect(createdProduct.productFlavor).toBe(person.productFlavor);
    expect(createdProduct.productWeight).toBe(person.productWeight);
    expect(createdProduct.nutritionalTable).toBe(person.nutritionalTable);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});

/*
   ProductsController
*/
describe("ProductsController Testing", () => {
  beforeAll(async () => {
    await connectToMongoDB();
  });

  /*
    getAllProductsController 
  */
  test("getAllProductsController", async () => {
    for (let i = 0; i < productsToCreate; i++) {
      await ProductModel.create({
        productName: fakerPT_BR.commerce.productName(),
        productCategory: fakerPT_BR.commerce.productName(),
        productImage: fakerPT_BR.image.url(),
        productPrice: fakerPT_BR.commerce.price(),
        productFlavor: fakerPT_BR.commerce.productAdjective(),
        productWeight: fakerPT_BR.number.float(),
        productDescription: fakerPT_BR.commerce.productDescription(),
        nutritionalTable: fakerPT_BR.lorem.text(),
      });
    }

    const request: Request | any = {
      params: {},
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getAllProducts(request, response);

    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info("Products:", JSON.stringify(Products, null, 2));
  });

  /*
    getProductByNameController
  */
  test("getProductByNameController", async () => {
    const product = await ProductModel.findOne();
    if (!product) {
      fail("No product found in the database");
    }
    const productName = product!.productName;

    const request: Request | any = {
      params: {
        title: productName,
      },
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getProductByName(request, response);
    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info(
      "Find Name: " + productName + "\nProduct by name:",
      JSON.stringify(Products, null, 2)
    );
  });

  /*
    getProductByIdController
  */
  test("getProductByIdController", async () => {
    const product = await ProductModel.findOne();
    if (!product) {
      fail("No product found in the database");
    }
    const productId = product!._id;

    const request: Request | any = {
      params: {
        id: productId,
      },
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getProductById(request, response);
    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info(
      "Find ID: " + productId + "\nProduct by ID:",
      JSON.stringify(Products, null, 2)
    );
  });

  /*
    getProductByNameAscController
  */
  test("getProductByNameAscController", async () => {
    const request: Request | any = {
      params: {},
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getProductByNameAsc(request, response);
    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info("Product by name Asc:", JSON.stringify(Products, null, 2));
  });

  /*
    getProductByNameDescController
  */
  test("getProductByNameDescController", async () => {
    const request: Request | any = {
      params: {},
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getProductByNameDesc(request, response);
    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info("Product by name Desc:", JSON.stringify(Products, null, 2));
  });

  /*
    getProductByPriceAscController
  */
  test("getProductByPriceAscController", async () => {
    const request: Request | any = {
      params: {},
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getProductByPriceAsc(request, response);
    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info("Product by price Asc:", JSON.stringify(Products, null, 2));
  });

  /*
    getProductByPriceDescController
  */
  test("getProductByPriceDescController", async () => {
    const request: Request | any = {
      params: {},
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getProductByPriceDesc(request, response);
    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info("Product by price Desc:", JSON.stringify(Products, null, 2));
  });

  /*
    getProductByCategoryController
  */
  test("getProductByCategoryController", async () => {
    const product = await ProductModel.findOne();
    if (!product) {
      fail("No product found in the database");
    }
    const productCategory = product!.productCategory;

    const request: Request | any = {
      params: {
        category: productCategory,
      },
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getProductByCategory(request, response);
    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info(
      "Find Category: " + productCategory + "\nProduct by category:",
      JSON.stringify(Products, null, 2)
    );
  });

  /*
    getProductByCategoryAscController
  */
  test("getProductByCategoryAscController", async () => {
    const product = await ProductModel.findOne();
    if (!product) {
      fail("No product found in the database");
    }
    const productCategory = product!.productCategory;

    const request: Request | any = {
      params: {
        category: productCategory,
      },
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getProductByCategoryAsc(request, response);
    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info(
      "Find Category: " + productCategory + "\nProduct by category Asc:",
      JSON.stringify(Products, null, 2)
    );
  });

  /*
    getProductByCategoryDescController
  */
  test("getProductByCategoryDescController", async () => {
    const product = await ProductModel.findOne();
    if (!product) {
      fail("No product found in the database");
    }
    const productCategory = product!.productCategory;

    const request: Request | any = {
      params: {
        category: productCategory,
      },
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getProductByCategoryDesc(request, response);
    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info(
      "Find Category: " + productCategory + "\nProduct by category Desc:",
      JSON.stringify(Products, null, 2)
    );
  });

  /*
    getProductByCategoryPriceController
  */
  test("getProductByCategoryPriceController", async () => {
    const product = await ProductModel.findOne();
    if (!product) {
      fail("No product found in the database");
    }
    const productCategory = product!.productCategory;

    const request: Request | any = {
      params: {
        category: productCategory,
      },
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getProductByCategoryPrice(request, response);
    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info(
      "Find Category: " +
        productCategory +
        "\nProduct by category order by price:",
      JSON.stringify(Products, null, 2)
    );
  });

  /*
    getProductByCategoryPriceAscController
  */
  test("getProductByCategoryPriceAscController", async () => {
    const product = await ProductModel.findOne();
    if (!product) {
      fail("No product found in the database");
    }
    const productCategory = product!.productCategory;

    const request: Request | any = {
      params: {
        category: productCategory,
      },
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getProductByCategoryPriceAsc(request, response);
    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info(
      "Find Category: " +
        productCategory +
        "\nProduct by category order by price Asc:",
      JSON.stringify(Products, null, 2)
    );
  });

  /*
    getProductByCategoryPriceDescController
  */
  test("getProductByCategoryPriceDescController", async () => {
    const product = await ProductModel.findOne();
    if (!product) {
      fail("No product found in the database");
    }
    const productCategory = product!.productCategory;

    const request: Request | any = {
      params: {
        category: productCategory,
      },
      query: {},
      body: {},
    };
    const response: Response | any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const ProductController = new ProductsController();
    await ProductController.getProductByCategoryPriceDesc(request, response);
    const Products = response.json.mock.calls[0];

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalled();
    console.info(
      "Find Category: " +
        productCategory +
        "\nProduct by category order by price Desc:",
      JSON.stringify(Products, null, 2)
    );
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
