import { UserAdminController } from "@controllers/user-admin-controller";
import { Request, Response, Router } from "express";
import { VerifyUserMiddleware } from "src/infrastructure/middlewares/user-logged-verify";

const routerAdmin = Router();
const ProductADMController = new UserAdminController();

routerAdmin.get(
  "/admin/",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getAllProductsADM(req, res); 
  }
);

export default routerAdmin;
