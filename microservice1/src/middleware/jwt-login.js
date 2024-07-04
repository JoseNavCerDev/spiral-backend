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

export const validateJWT = async (token) => {
    try {
        return JSON.stringify(jwt.verify(token, process.env.SECRET_KEY) ? true : false);
    } catch (error) {
        return JSON.stringify(false);      
    }
}