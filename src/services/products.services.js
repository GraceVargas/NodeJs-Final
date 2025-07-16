import * as productsModel from "../models/products.model.js";

export const getAllProducts = async () => {
        return await productsModel.getAllProducts();
}

export const getProductById = async (id) => {  
    return productsModel.getProductById(id);
}

export const createProduct = async (productData) => {
    const { nombre, precio, categoria, disponible } = productData;
    return productsModel.saveProduct(nombre, precio, categoria, disponible)
}

export const deleteProduct = async (id) => {
    return productsModel.deleteProduct(id);
}
