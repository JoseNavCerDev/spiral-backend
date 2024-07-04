import { col } from 'sequelize';
import Product from '../model/product-model.js';
import { v4 as uuidv4 } from 'uuid'; 

export const createProductService = async(req, res) => {
    try {
        const id = uuidv4();
        const { nombre, descripcion, cantidad, color } = req.body;
        const user = await Product.create({
        id, 
        nombre,
        descripcion,
        cantidad,
        color
        });
        return JSON.stringify(`Product with id:${id} was created`);
    } catch (error) {
        return JSON.stringify(`Product could not be created, try again !`);
    }    
}

export const getAllProductsService = async() => {
    return await Product.findAll();
}

export const getOneProductService = async(id) => {
    return await Product.findByPk(id);
}

export const deleteProductService = async(id) => {
    try {
        const deletedElement = await Product.destroy({where : {id}});
        return deletedElement === 1 ? 200 : 404;
    } catch (error) {
        console.error(error);
    }
}

export const updateProductService = async(req_) => {
    const { nombre, descripcion, cantidad, color } = req_.body;
    try {
        const product = await Product.findByPk(req_.id);
        product.set({
            nombre,
            descripcion,
            cantidad,
            color
        });
        await product.save();
        return JSON.stringify(product);
    } catch (error) {
        return JSON.stringify(`Producto con id:${req_.id} not found`);
    }
}
