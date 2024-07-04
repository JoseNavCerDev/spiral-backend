import { Router } from "express";
import { 
    loginController,
    createProductController,
    getAllProductController,
    getOneProductController,
    deleteProductController,
    updateProductController,
    executeSeederController
} from "../controller/controllers.js";

const router = Router();

//login route
router.post('/:route', async (req,res,next) => {
    const { route } = req.params;
    const url = `http://${process.env.M1_HOST}:${process.env.M1_PORT}/${process.env.M1_API_NAME}/${route}`;
    req.body.url = url;
    res.send(await loginController(req.body, res));    
});

//create product route
router.post('/:route/:token', async (req, res) => {  
    const { token, route } = req.params; 
    const url = `http://${process.env.M2_HOST}:${process.env.M2_PORT}/${process.env.M2_API_NAME}/${route}/${token}`;
    req.body.url = url;
    res.send(await createProductController(req.body, res));
})

//show all products
router.get('/:route', async ( req, res) => {
    const { route } = req.params;
    const url = `http://${process.env.M2_HOST}:${process.env.M2_PORT}/${process.env.M2_API_NAME}/${route}`;
    req.url = url;
    res.send(await getAllProductController(req.url));
});

//show one product
router.get('/:route/:id', async (req, res) => {
    const { route, id } = req.params;
    const url = `http://${process.env.M2_HOST}:${process.env.M2_PORT}/${process.env.M2_API_NAME}/${route}/${id}`;
    res.send(await getOneProductController(url, res));
});

//DELETE PRODUCT
router.delete('/:route/:id/:token', async (req, res) => {
    const { route, id, token } = req.params;
    const url = `http://${process.env.M2_HOST}:${process.env.M2_PORT}/${process.env.M2_API_NAME}/${route}/${id}/${token}`;
    res.sendStatus(await deleteProductController(url, res)); 
});

//Modify product
router.patch('/:route/:id/:token', async (req, res) => {
    const { route, id , token} = req.params;
    const url = `http://${process.env.M2_HOST}:${process.env.M2_PORT}/${process.env.M2_API_NAME}/${route}/${id}/${token}`;
    const req_ = {
        body: req.body,
        url,
        token
    }
    res.send(await updateProductController(req_, res));
});

//Endpoint for seeder execution
router.get('/', async(req, res) => {
    const url = `http://${process.env.M1_HOST}:${process.env.M1_PORT}/${process.env.M1_API_NAME}/executeSeeder`;
    res.send(await executeSeederController(url, res));
});

export default router;
