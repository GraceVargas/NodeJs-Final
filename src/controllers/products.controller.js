import * as productService from '../services/products.services.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json({ message: "Lista de productos", payload: products });
    } catch (error) {
        res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
    }
    
}

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productService.getProductById(id);
        if (product) {
            res.status(200).json({ message: "Producto encontrado", payload: product });
        } else {
            res.status(404).json({message: 'Producto no encontrado'});
        }
    } catch (error) {
        res
        .status(500)
        .json({ message: "error interno del servidor", error: error.message });
    }  
}

export const createProduct = async (req, res) => {
    try {
        const { nombre, precio, categoria, disponible } = req.body; 
        const newProduct = await productService.createProduct({ nombre, precio, categoria, disponible });
        res.status(201).json({ message: "Producto creado", payload: newProduct });
    } catch (error) {
        res
        .status(500)
        .json({ message: "error interno del servidor", error: error.message})
    }

}

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await productService.deleteProduct(id);
        res.status(201).json({ message: "Producto borrado", payload: deletedProduct});
    } catch (error) {
        res
        .status(500)
        .json({ message: "error interno del servidor", error: error.message })
    }

}