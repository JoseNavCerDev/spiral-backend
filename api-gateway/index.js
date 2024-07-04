import express from 'express';
import dotenv from 'dotenv';

import routes from './src/routes/routes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', routes);

app.listen(process.env.GATEWAY_PORT, () => {
    console.log('GATEWAY listening on port:', process.env.GATEWAY_PORT);
});