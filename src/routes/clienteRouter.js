const express = require('express');
const clienteRouter = express.Router();
const {clienteController} = require('../controllers/clienteController');

clienteRouter.get('/clientes', clienteController.getClientes);
clienteRouter.post('/clientes', clienteController.criarNovoCliente);

module.exports = {clienteRouter};