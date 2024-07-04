import { Router } from "express";
import {  
    createProductController, 
    deleteProductController, 
    getAllProductsController, 
    getOneProductController, 
    modifyProductController 
} from "../controller/crud-product-controller.js";

import validateJWTMiddleware from '../middleware/jwt-validation.js';

const router = Router();

router.post('/createProduct/:token', async (req, res, next) => {
    const { token } = req.params;
    const JWTValidation = await validateJWTMiddleware(token);
    JWTValidation ?
    res.send(await createProductController(req, res)) :
    res.send(JSON.stringify('Ususario no autorizado para crear producto o token caducado'));
});

router.get('/allProducts', async (req, res) => {
    res.send(await getAllProductsController());
});

router.get('/product/:id', async (req,res) => {
    res.send(await getOneProductController(req.params.id));
    
});

router.delete('/delete/:id/:token', async(req,res) => {
    const { token } = req.params;
    const JWTValidation = await validateJWTMiddleware (token);
    if(!JWTValidation) {
        res.send(JSON.stringify(401));
    } else {
        const estatus = await deleteProductController(req.params.id,res);
        res.send(JSON.stringify(estatus));
    }    
});

router.patch('/modifyProduct/:id/:token', async (req, res, next) => {
    const { token } = req.params;
    const JWTValidation = await validateJWTMiddleware (token);
    if(!JWTValidation) {
        res.send(JSON.stringify('Ususario no autorizado para modificar producto o token caducado'));
    } else {
        const req_ = {
            body: req.body,
            id : req.params.id
        }
        res.send(await modifyProductController(req_, res));
    }
    
        
});

export default router;