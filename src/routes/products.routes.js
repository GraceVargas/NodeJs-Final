import express from 'express';
import * as productController from '../controllers/products.controller.js'

const router = express.Router();

router.get("/products", productController.getAllProducts); 

router.get("/products/:id", productController.getProductById); 

router.post("/products/create", productController.createProduct); 

router.delete("/products/:id", productController.deleteProduct); 

export default router;