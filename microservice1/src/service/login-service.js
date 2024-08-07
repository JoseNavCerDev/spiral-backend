import { connectionTesting } from '../ddbb/sequilize-settings.js';
import User from '../model/user-model.js';
import { createJWT } from '../middleware/jwt-login.js';

export const loginAuth = async (correo, password) => {
    try {
        const { correo: email, password: pass } = await User.findOne({ where : { correo } });
        if(email === correo && pass === password){
            return JSON.stringify(createJWT(email));
        } else {
            return JSON.stringify('El usuario no existe o el password esta mal escrito!');
        }
    } catch (error) {
        return JSON.stringify("El usuario no existe o el password esta mal escrito!");
    }
            
}

export const executeSeederService = async () => {
    
    try {
        await User.create({
            id: "20202020",
            nombre: "Luis Lopez",
            correo:"luis.lopez@ieee.com",
            password: "cantilever"
        });
        return JSON.stringify('Seeder ejecutado satisfactoriamente');        
    } catch (error) {
        console.log(error);
        return JSON.stringify('No se pudo ejecutar el seeder');
    }
}

export const connectionTestingService = () => {
    connectionTesting();
}
