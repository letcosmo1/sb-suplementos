import ProductModel from "@models/product-model";
import { IProduct } from "src/domain/entities/interfaces/product-interface";
import { _id, category, limit, page, title } from "@type//product-types";

export class ProductsRepository {
  async getAllProducts(page: page, limit: limit): Promise<IProduct[]> {
    const startIndex = (page - 1) * limit;
    const products: IProduct[] = await ProductModel.find({ available: true })
      .select("-available")
      .skip(startIndex)
      .limit(limit);
    return products;
  }

  async getProductByName(title: title): Promise<IProduct[]> {
    const product: IProduct[] = await ProductModel.find({
      name: { $regex: title, $options: "i" },
      available: true,
    }).select("-available");
    return product;
  }

  async getProductByTitleAsc(title: title): Promise<IProduct[]> {
    const product: IProduct[] = await ProductModel.find({
      name: { $regex: title, $options: "i" },
      available: true,
    })
      .sort({
        name: 1,
      })
      .select("-available");
    return product;
  }

  async getProductByTitleDesc(title: title): Promise<IProduct[]> {
    const product: IProduct[] = await ProductModel.find({
      name: { $regex: title, $options: "i" },
      available: true,
    })
      .sort({
        name: -1,
      })
      .select("-available");
    return product;
  }

  async getProductByTitlePriceAsc(title: title): Promise<IProduct[]> {
    const product: IProduct[] = await ProductModel.find({
      name: { $regex: title, $options: "i" },
      available: true,
    })
      .sort({
        price: 1,
      })
      .select("-available");
    return product;
  }

  async getProductByTitlePriceDesc(title: title): Promise<IProduct[]> {
    const product: IProduct[] = await ProductModel.find({
      name: { $regex: title, $options: "i" },
      available: true,
    })
      .sort({
        name: -1,
      })
      .select("-available");
    return product;
  }

  async getProductById(id: _id): Promise<IProduct | null> {
    const product: IProduct | null = await ProductModel.findById(id);
    return product;
  }

  async getProductByNameAsc(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      available: true,
    })
      .sort({
        name: 1,
      })
      .select("-available");
    return products;
  }

  async getProductByNameDesc(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      available: true,
    })
      .sort({
        name: -1,
      })
      .select("-available");
    return products;
  }

  async getProductByPriceAsc(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      available: true,
    })
      .sort({ price: 1 })
      .select("-available");
    return products;
  }

  async getProductByPriceDesc(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      available: true,
    })
      .sort({
        price: -1,
      })
      .select("-available");
    return products;
  }

  async getProductByCategory(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      category: category,
      available: true,
    }).select("-available");
    return products;
  }

  async getProductByCategoryAsc(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      category: category,
      available: true,
    })
      .sort({ name: 1 })
      .select("-available");
    return products;
  }

  async getProductByCategoryDesc(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      category: category,
      available: true,
    })
      .sort({ name: -1 })
      .select("-available");
    return products;
  }

  async getProductByCategoryPrice(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      category: category,
      available: true,
    }).select("-available");
    return products;
  }

  async getProductByCategoryPriceAsc(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      category: category,
      available: true,
    })
      .sort({ price: 1 })
      .select("-available");
    return products;
  }

  async getProductByCategoryPriceDesc(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      category: category,
      available: true,
    })
      .sort({ price: -1 })
      .select("-available");
    return products;
  }
}
