import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequilize = new Sequelize(
    process.env.DDBB_NAME, 
    process.env.DDBB_USER, 
    process.env.DDBB_PASSWORD, 
    {
    host: process.env.DDBB_HOST,
    dialect: 'mysql',
    port: process.env.DDBB_PORT
});

export const connectionTesting = async () => {

    try {
        await sequilize.authenticate();
        console.log('Successfull connection to Database');
        return 'Cantilever';
    } catch (error) {
        console.error(error);
    }
};

export default sequilize;




