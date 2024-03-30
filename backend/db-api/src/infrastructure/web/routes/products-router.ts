import { Request, Response, Router } from "express";
import { ProductsController } from "@controllers/products-controller";

const router = Router();
const productsController = new ProductsController();

router.get("/:page?", async (req: Request, res: Response) => {
  await productsController.getAllProducts(req, res);
});
router.get("/products/asc", async (req: Request, res: Response) => {
  await productsController.getProductByNameAsc(req, res);
});
router.get("/products/desc", async (req: Request, res: Response) => {
  await productsController.getProductByNameDesc(req, res);
});
router.get("/products/price/asc", async (req: Request, res: Response) => {
  await productsController.getProductByPriceAsc(req, res);
});
router.get("/products/price/desc", async (req: Request, res: Response) => {
  await productsController.getProductByPriceDesc(req, res);
});
router.get("/products/:title", async (req: Request, res: Response) => {
  await productsController.getProductByName(req, res);
});
router.get("/product/:id", async (req: Request, res: Response) => {
  await productsController.getProductById(req, res);
});
router.get(
  "/products/category/:category",
  async (req: Request, res: Response) => {
    await productsController.getProductByCategory(req, res);
  }
);
router.get(
  "/products/category/asc/:category",
  async (req: Request, res: Response) => {
    await productsController.getProductByCategoryAsc(req, res);
  }
);
router.get(
  "/products/category/desc/:category",
  async (req: Request, res: Response) => {
    await productsController.getProductByCategoryDesc(req, res);
  }
);
router.get(
  "/products/category/price/:category",
  async (req: Request, res: Response) => {
    await productsController.getProductByCategoryPrice(req, res);
  }
);
router.get(
  "/products/category/price/asc/:category",
  async (req: Request, res: Response) => {
    await productsController.getProductByCategoryPriceAsc(req, res);
  }
);
router.get(
  "/products/category/price/desc/:category",
  async (req: Request, res: Response) => {
    await productsController.getProductByCategoryPriceDesc(req, res);
  }
);

export default router;
