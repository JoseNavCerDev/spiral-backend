import app from './src/index.js';

const port = process.env.PORT || '3000'
app.listen(port, () => console.log(`Microservice 1 listening on PORT:${port}`));