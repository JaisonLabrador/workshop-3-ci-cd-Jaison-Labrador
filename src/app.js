const express = require('express');
const app = express();
// Middleware para parsear JSON
app.use(express.json());
app.get('/', (req, res) => {
res.status(200).send('Bienvenido a la API');
});
app.get('/status', (req, res) => {
res.status(200).json({ status: 'API funcionando correctamente' });
});
module.exports = app;
- Crear un archivo index.js en la raiz del proyecto
const app = require('./src/app');
const serverless = require('serverless-http');
module.exports.handler = serverless(app);