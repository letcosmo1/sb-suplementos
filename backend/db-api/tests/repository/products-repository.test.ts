import connectToMongoDB from "@mongoose/mongoose";
import ProductModel from "@models/product-model";
import { fakerPT_BR } from "@faker-js/faker";
import mongoose from "mongoose";
import { ProductsRepository } from "@repositories/products-repository";

const productsToCreate = 4;

/*
   ProductModel 
*/
describe("ProductModelRepository Testing", () => {
  beforeAll(async () => {
    await connectToMongoDB();
  });

  test("ProductModelRepository Create Test", async () => {
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
   ProductsRepository 
*/
describe("ProductsRepository Testing", () => {
  beforeAll(async () => {
    await connectToMongoDB();
  });

  /*
    getAllProductsRepository 
  */
  test("getAllProductsRepository", async () => {
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

    const repository = new ProductsRepository();

    const page = 1;
    const limit = productsToCreate;
    const products = await repository.getAllProducts(page, limit);

    expect(products).toHaveLength(productsToCreate);
    console.info("Products:", JSON.stringify(products, null, 2));
  });

  /*
    getProductByNameRepository
  */
  test("getProductByNameRepository", async () => {
    const repository = new ProductsRepository();

    const product = await ProductModel.findOne();

    if (!product) {
      new Error("No product found in the database");
    }

    const productName = product!.productName;
    const productExists = await repository.getProductByName(productName);

    expect(productExists).toHaveLength(1);
    expect(productExists![0].productName).toBe(productName);
    console.info("Find Name: " + productName + "\nProduct name:", productName);
  });

  /*
    getProductByIdRepository
  */
  test("getProductByIdRepository", async () => {
    const repository = new ProductsRepository();

    const product = await ProductModel.findOne();

    if (!product) {
      new Error("No product found in the database");
    }

    const productID = product?._id;
    const productExists = await repository.getProductById(productID);

    expect(productExists!._id).toStrictEqual(productID);
    console.info("Find ID: " + productID + "\nProduct id:", productID);
  });

  /*
    getProductByNameAscRepository
  */
  test("getProductByNameAscRepository", async () => {
    const repository = new ProductsRepository();

    const productExists = await repository.getProductByNameAsc();

    expect(200);
    console.info(
      "Products by title Asc:",
      JSON.stringify(productExists, null, 2)
    );
  });

  /*
    getProductByNameDescRepository 
  */
  test("getProductByNameDescRepository", async () => {
    const repository = new ProductsRepository();

    const productExists = await repository.getProductByNameDesc();

    expect(200);
    console.info(
      "Products by title Desc:",
      JSON.stringify(productExists, null, 2)
    );
  });

  /*
    getProductByPriceAscRepository 
  */
  test("getProductByPriceAscRepository", async () => {
    const repository = new ProductsRepository();

    const productExists = await repository.getProductByPriceAsc();

    expect(200);
    console.info(
      "Products by price Asc:",
      JSON.stringify(productExists, null, 2)
    );
  });

  /*
    getProductByPriceDescRepository
  */
  test("getProductByPriceDescRepository", async () => {
    const repository = new ProductsRepository();

    const productExists = await repository.getProductByPriceDesc();

    expect(200);
    console.info(
      "Products by price Desc:",
      JSON.stringify(productExists, null, 2)
    );
  });

  /*
    getProductByCategoryRepository
  */
  test("getProductByCategoryRepository", async () => {
    const repository = new ProductsRepository();
    const product = await ProductModel.findOne();

    if (!product) {
      new Error("No product found in the database");
    }

    const productCategory = product?.productCategory;
    const productExists = await repository.getProductByCategory(
      productCategory!
    );

    expect(200);
    console.info(
      "Find Category: " + productCategory + "\nProducts by category:",
      JSON.stringify(productExists, null, 2)
    );
  });

  /*
    getProductByCategoryAscRepository
  */
  test("getProductByCategoryAscRepository", async () => {
    const repository = new ProductsRepository();
    const product = await ProductModel.findOne();

    if (!product) {
      new Error("No product found in the database");
    }

    const productCategory = product?.productCategory;
    const productExists = await repository.getProductByCategoryAsc(
      productCategory!
    );

    expect(200);
    console.info(
      "Find Category: " + productCategory + "\nProducts by category Asc:",
      JSON.stringify(productExists, null, 2)
    );
  });

  /*
    getProductByCategoryDescRepository
  */
  test("getProductByCategoryDescRepository", async () => {
    const repository = new ProductsRepository();
    const product = await ProductModel.findOne();

    if (!product) {
      new Error("No product found in the database");
    }

    const productCategory = product?.productCategory;
    const productExists = await repository.getProductByCategoryDesc(
      productCategory!
    );

    expect(200);
    console.info(
      "Find Category: " + productCategory + "\nProducts by category Desc:",
      JSON.stringify(productExists, null, 2)
    );
  });

  /*
    getProductByCategoryPriceRepository
  */
  test("getProductByCategoryPriceRepository", async () => {
    const repository = new ProductsRepository();
    const product = await ProductModel.findOne();

    if (!product) {
      new Error("No product found in the database");
    }

    const productCategory = product?.productCategory;
    const productExists = await repository.getProductByCategoryPrice(
      productCategory!
    );

    expect(200);
    console.info(
      "Find Category: " +
        productCategory +
        "\nProducts by category order by price:",
      JSON.stringify(productExists, null, 2)
    );
  });

  /*
    getProductByCategoryPriceAscRepository
  */
  test("getProductByCategoryPriceAscRepository", async () => {
    const repository = new ProductsRepository();
    const product = await ProductModel.findOne();

    if (!product) {
      new Error("No product found in the database");
    }

    const productCategory = product?.productCategory;
    const productExists = await repository.getProductByCategoryPriceAsc(
      productCategory!
    );

    expect(200);
    console.info(
      "Find Category: " +
        productCategory +
        "\nProducts by category order by price Asc:",
      JSON.stringify(productExists, null, 2)
    );
  });

  /*
    getProductByCategoryPriceDescRepository
  */
  test("getProductByCategoryPriceDescRepository", async () => {
    const repository = new ProductsRepository();
    const product = await ProductModel.findOne();

    if (!product) {
      new Error("No product found in the database");
    }

    const productCategory = product?.productCategory;
    const productExists = await repository.getProductByCategoryPriceDesc(
      productCategory!
    );

    expect(200);
    console.info(
      "Find Category: " +
        productCategory +
        "\nProducts by category order by price Desc:",
      JSON.stringify(productExists, null, 2)
    );
  });

  afterAll(async () => {
    await ProductModel.deleteMany({});
    await mongoose.connection.close();
  });
});
