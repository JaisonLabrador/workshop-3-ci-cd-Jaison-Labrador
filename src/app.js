const express = require('express');
const app = express();
// Middleware para parsear JSON
app.use(express.json());
app.get('/', (req, res) => {
res.status(200).send('Bienvenido a la API');
});
app.get('/statusts', (req, res) => {
res.status(200).json({ status: 'API funcionando correctamente' });
});
module.exports = app;