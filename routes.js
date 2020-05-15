const { Router } = require('express');
const FraseController = require('./controllers/FraseController');

const routes = Router();

routes.get('/frases', FraseController.index);
routes.get('/frases/find/:id', FraseController.show);
routes.get('/frases/random', FraseController.random);
routes.post('/frases/search', FraseController.search);
routes.post('/frases/author', FraseController.author);
routes.post('/frases/book', FraseController.book);

module.exports = routes;