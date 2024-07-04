import { 
    loginService, 
    createProductService,
    getAllProductService,
    getOneProductService,
    deleteProductService,
    updateProductService,
    executeSeederService
} from "../service/services.js"

export const loginController = async (req,res) => {
    return await loginService(req, res);
}

export const createProductController = async (req, res) => {
    return await createProductService(req, res);
}

export const getAllProductController = async (req, res) => {
    return await getAllProductService(req, res);
}

export const getOneProductController = async (url, res) => {
    return await getOneProductService(url, res);
};

export const deleteProductController = async (url, res) => {
    return await deleteProductService(url, res);
}

export const updateProductController = async (req_, res) => {
    return await updateProductService(req_, res);
}

export const executeSeederController = async(req, res) => {
    return await executeSeederService(req, res);
}
