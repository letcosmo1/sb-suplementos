import { UserAdminController } from "@controllers/user-admin-controller";
import { Request, Response, Router } from "express";
import { VerifyUserMiddleware } from "src/infrastructure/middlewares/user-logged-verify";

const routerAdmin = Router();
const ProductADMController = new UserAdminController();

routerAdmin.get(
  "/produtos",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getAllProductsADM(req, res); 
  }
);

routerAdmin.patch(
  "/patch/:_uid",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.patchProductADM(req, res);
  }
);

routerAdmin.get(
  "/products/asc",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByNameAscADM(req, res);
  }
);
routerAdmin.get(
  "/products/desc",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByNameDescADM(req, res);
  }
);
routerAdmin.get(
  "/products/price/asc",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByPriceAscADM(req, res);
  }
);
routerAdmin.get(
  "/products/price/desc",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByPriceDescADM(req, res);
  }
);
routerAdmin.get(
  "/products/:title/asc",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByTitleAscADM(req, res);
  }
);
routerAdmin.get(
  "/products/:title/desc",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByTitleDescADM(req, res);
  }
);
routerAdmin.get(
  "/products/:title/price/asc",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByTitlePriceAscADM(req, res);
  }
);
routerAdmin.get(
  "/products/:title/price/desc",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByTitlePriceDescADM(req, res);
  }
);
routerAdmin.get(
  "/products/:title",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByNameADM(req, res);
  }
);
routerAdmin.get(
  "/product/:id",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByIdADM(req, res);
  }
);
routerAdmin.get(
  "/products/category/:category",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByCategoryADM(req, res);
  }
);
routerAdmin.get(
  "/products/category/asc/:category",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByCategoryAscADM(req, res);
  }
);
routerAdmin.get(
  "/products/category/desc/:category",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByCategoryDescADM(req, res);
  }
);
routerAdmin.get(
  "/products/category/price/:category",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByCategoryPriceADM(req, res);
  }
);
routerAdmin.get(
  "/products/category/price/asc/:category",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByCategoryPriceAscADM(req, res);
  }
);
routerAdmin.get(
  "/products/category/price/desc/:category",
  VerifyUserMiddleware,
  async (req: Request, res: Response) => {
    await ProductADMController.getProductByCategoryPriceDescADM(req, res);
  }
);

export default routerAdmin;
