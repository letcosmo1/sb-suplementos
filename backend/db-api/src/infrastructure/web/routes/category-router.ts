import { CategoryController } from "@controllers/category-controller";
import { Request, Response, Router } from "express";

const routerCategory = Router();
const categoryController = new CategoryController();

routerCategory.get("/categories/hl", async (req: Request, res: Response) => {
  await categoryController.getAllHLCategories(req, res);
});

export default routerCategory;
