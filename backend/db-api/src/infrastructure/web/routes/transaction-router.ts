import { TransactionController } from "@controllers/transaction-controller";
import { Request, Response, Router } from "express";

const routerTransaction = Router();
const transactionController = new TransactionController();

routerTransaction.post("/sale", async (req: Request, res: Response) => {
  await transactionController.generateSale(req, res);
});

export default routerTransaction;
