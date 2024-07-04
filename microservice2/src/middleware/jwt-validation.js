import { log } from 'console';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

//FETCH to microservice 1
const validateJWTMiddleware = async (token) => {
    try {
        const url = `http://${process.env.M1_HOST}:${process.env.M1_PORT}/${process.env.M1_API_NAME}/validateToken/${token}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export default validateJWTMiddleware;