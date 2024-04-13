import { IProduct } from "@interfaces/product-interface";
import ProductModel from "@models/product-model";
import { _id, available, category, title } from "@type/product-types";

export class UserADMRepository {
  async getAllProductsADM(): Promise<IProduct[] | null> {
    const products: IProduct[] = await ProductModel.find({});
    return products;
  }

  async patchProductADM(
    _id: _id,
    available: available
  ): Promise<IProduct | null> {
    const product: IProduct | null = await ProductModel.findOneAndUpdate(
      { _id: _id },
      { available: available }
    );
    return product;
  }

  async getProductByNameADM(title: title): Promise<IProduct[]> {
    const product: IProduct[] = await ProductModel.find({
      name: { $regex: title, $options: "i" },
      available: true,
    });
    return product;
  }

  async getProductByTitleAscADM(title: title): Promise<IProduct[]> {
    const product: IProduct[] = await ProductModel.find({
      name: { $regex: title, $options: "i" },
      available: true,
    }).sort({
      name: 1,
    });

    return product;
  }

  async getProductByTitleDescADM(title: title): Promise<IProduct[]> {
    const product: IProduct[] = await ProductModel.find({
      name: { $regex: title, $options: "i" },
      available: true,
    }).sort({
      name: -1,
    });

    return product;
  }

  async getProductByTitlePriceAscADM(title: title): Promise<IProduct[]> {
    const product: IProduct[] = await ProductModel.find({
      name: { $regex: title, $options: "i" },
      available: true,
    }).sort({
      price: 1,
    });

    return product;
  }

  async getProductByTitlePriceDescADM(title: title): Promise<IProduct[]> {
    const product: IProduct[] = await ProductModel.find({
      name: { $regex: title, $options: "i" },
      available: true,
    }).sort({
      name: -1,
    });

    return product;
  }

  async getProductByIdADM(id: _id): Promise<IProduct | null> {
    const product: IProduct | null = await ProductModel.findById(id);
    return product;
  }

  async getProductByNameAscADM(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      available: true,
    }).sort({
      name: 1,
    });

    return products;
  }

  async getProductByNameDescADM(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      available: true,
    }).sort({
      name: -1,
    });

    return products;
  }

  async getProductByPriceAscADM(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      available: true,
    }).sort({ price: 1 });

    return products;
  }

  async getProductByPriceDescADM(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      available: true,
    }).sort({
      price: -1,
    });

    return products;
  }

  async getProductByCategoryADM(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      category: category,
      available: true,
    });
    return products;
  }

  async getProductByCategoryAscADM(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      category: category,
      available: true,
    }).sort({ name: 1 });

    return products;
  }

  async getProductByCategoryDescADM(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      category: category,
      available: true,
    }).sort({ name: -1 });

    return products;
  }

  async getProductByCategoryPriceADM(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      category: category,
      available: true,
    });
    return products;
  }

  async getProductByCategoryPriceAscADM(
    category: category
  ): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      category: category,
      available: true,
    }).sort({ price: 1 });

    return products;
  }

  async getProductByCategoryPriceDescADM(
    category: category
  ): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      category: category,
      available: true,
    }).sort({ price: -1 });

    return products;
  }
}
