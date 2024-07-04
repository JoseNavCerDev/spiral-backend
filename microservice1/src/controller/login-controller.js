import sequilize from '../ddbb/sequilize-settings.js';
import { 
    connectionTestingService, 
    //createNewUserWithEmailValidation 
} from '../service/login-service.js';
import {loginAuth} from '../service/login-service.js';

export const autenticationMethod = async (correo, password) => {
    return await loginAuth(correo, password);
}

/* const createNewUserWithEmailValidation = async (data) => {

} */


