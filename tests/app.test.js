const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
  
 it('should return a welcome message', async () => {
 const res = await request(app).get('/');
 expect(res.statusCode).toEqual(200);
 expect(res.text).toBe('Bienvenido a la API');
 });
  
 it('should return the status', async () => {
 const res = await request(app).get('/status');
 expect(res.statusCode).toEqual(200);
 expect(res.body).toEqual({ status: 'API funcionando correctamente' });
 });
  
});