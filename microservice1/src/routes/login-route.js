import Router from 'express';
import { autenticationMethod } from '../controller/login-controller.js';
import { validateEmail } from '../middleware/validate-email.js';
import { validateJWT } from '../middleware/jwt-login.js';

const router = Router();

router.post('/login', async (req, res) => {
    const { correo, password } = req.body;
    validateEmail(correo) === null ?
    res.send(JSON.stringify('El correo esta mal escrito, intenta de nuevo')) :
    res.send( await autenticationMethod(correo, password))
});

//Function called from microservice 2
router.get('/validateToken/:token', async (req, res) => {
    const {token} = req.params;
    const validationToken_ = await validateJWT(token);
    res.send(validationToken_)
});

router.post('signin', /* createNewUserWithEmailValidation */);

export default router;
