import express from 'express';
import routes from './routes/login-route.js';
import dotenv from 'dotenv';
import sequilize from './ddbb/sequilize-settings.js';

const app = express()

dotenv.config();

const sincronizarORM = async () => {
    try {
        await sequilize.sync({ force:false });
        console.log('Database sincrhonyzation was successfull');
    } catch (error) {
        console.error(error);
    }
}

sincronizarORM();

app.use(express.json());
app.use('/m1', routes);

export default app;