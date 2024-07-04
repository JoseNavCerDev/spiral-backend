import { 
    createProductService,
    getAllProductsService,
    getOneProductService,
    deleteProductService,
    updateProductService
} from '../service/crud-product-service.js';

import validateJWTMiddleware from '../middleware/jwt-validation.js';

//Validate JWT
export const validateJWT = async (token) => {
    return await validateJWTMiddleware(token);
};

export const createProductController = async (req, res) => {
    return await createProductService(req, res);
}

export const getAllProductsController = async () => {
    return await getAllProductsService();
}

export const getOneProductController = async (id) => {
    return await getOneProductService(id);
}

export const deleteProductController = async(id) => {
    return await deleteProductService(id);
}

export const modifyProductController = async (req_, res) => {
    return await updateProductService(req_, res);
}



