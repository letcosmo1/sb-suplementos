import { ProductSaleValidatorService } from "@services/productSale-validator-service";
import Errors from "@type//errors/custom-errors";
import { IProductSale } from "@type/productSale-types";
import { GenerateSaleUseCase } from "@usecases/transaction-usecase";
import { Request, Response } from "express";

const telephone = process.env.TELEPHONE ? process.env.TELEPHONE : " ";

export class TransactionController {
  async generateSale(req: Request, res: Response) {
    try {
      const product: IProductSale = req.body;

      const validService = new ProductSaleValidatorService();
      const validResult = await validService.validProduct(product);

      if (!validResult) {
        return res.status(Errors.PRODUCT_NOT_RECEIVED.code).json({
          code: Errors.PRODUCT_NOT_RECEIVED.code,
          success: Errors.PRODUCT_NOT_RECEIVED.success,
          message: Errors.PRODUCT_NOT_RECEIVED.message,
        });
      }

      const transactionUseCase = new GenerateSaleUseCase();
      const result: IProductSale = await transactionUseCase.execute(product);

      const whatsappMessage =
        encodeURIComponent(`Olá! Gostaria de comprar o seguinte produto:

      Nome do Produto: ${result.product.name}
      Preço: ${result.product.price}
      Descrição: ${result.product.description}
      
      Por favor, envie-me mais informações sobre como proceder com a compra. Meu ID de transação é: ${result.product.transactionID}
      
      Obrigado(a)!
      `);
      const url = `https://wa.me/${telephone}?text=${whatsappMessage}`;

      return res
        .status(200)
        .json({ success: true, message: "Compra em transação!", url: url });
    } catch (error) {
      return res.status(Errors.INTERNAL_SERVER_ERROR.code).json({
        code: Errors.INTERNAL_SERVER_ERROR.code,
        success: Errors.INTERNAL_SERVER_ERROR.success,
        message: Errors.INTERNAL_SERVER_ERROR.message,
      });
    }
  }
}
