//import * as productService from "../services/products.services.js"

import {
    getAllProductsService,
    getProductByIdService,
    addProductService,
    deleteProductService
} from "../services/products.services.js";

export const addProduct = async (req, res) => {
    try{
        const producto = req.body;
        //const newProduct = await productService.addProductService(product)
        const nuevoProducto = await addProductService(producto)
        res.status(200).json(nuevoProducto);
    }catch(error){
        res.status(500).send()
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id;
        if(id){
            //await productService.deleteProductService(id)
            await deleteProductService(id)
            res.sendStatus(200)
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        res.status(500).send()
    }  
}

export const getAllProducts = async (req, res) => {
    try{
        console.log("paso1")
        //const products = await productService.getAllProductsService()
        const productos = await getAllProductsService()
        console.log(productos)
        res.status(200).json(productos);
    }catch(error){
        res.status(500).send()
    }
};

export const getProductById = async (req, res) => {
    try{
        const id = req.params.id;
        if (id){
            //const product = await productService.getProductByIdService(id)
            const producto = await getProductByIdService(id)
            if (producto) {
                res.status(200).json(producto);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        res.status(500).send()
    }
};