import {loginAuth, executeSeederService} from '../service/login-service.js';

export const autenticationMethod = async (correo, password) => {
    return await loginAuth(correo, password);
}

export const executeSeederController= async (res) => {
    return await executeSeederService(res);
}


