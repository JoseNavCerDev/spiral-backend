import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const createJWT = (correo) => {
    const tokenToSend = jwt.sign(
        {}, 
        process.env.SECRET_KEY,
        {expiresIn: '30m'}
    );
    return tokenToSend;
};

export const validateJWT = (token) => {    
    try {
        const val = jwt.verify(token, process.env.SECRET_KEY);
        return val != null ? true : false        
    } catch (error) {
        console.error(error, 'Wrong token');
        return false
    }
}