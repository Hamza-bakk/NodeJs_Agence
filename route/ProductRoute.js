import { Router } from "express";

import {
  CreateProduct,
  DeleteProduct,
  GetAllProduct,
  GetProductById,
  UpdateProduct,
} from "../controler/ProductControler.js";

const ProductRouter = Router();

ProductRouter.get("/produit", GetAllProduct);
ProductRouter.get("/produit/:id", GetProductById);
ProductRouter.post("/produit", CreateProduct);
ProductRouter.put("/produit/:id", UpdateProduct);
ProductRouter.delete("/produit/:id", DeleteProduct);

export default ProductRouter;
