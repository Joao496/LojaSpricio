const express = require('express');
const clienteRouter = express.Router();
const {clienteController} = require('../controllers/clienteController');

clienteRouter.get('/clientes', clienteController.getClientes);
clienteRouter.post('/clientes', clienteController.criarNovoCliente);
clienteRouter.put('/clientes/:id',clienteController.atualizarCliente);
clienteRouter.delete('/clientes/:id',clienteController.deletarCliente);

module.exports = {clienteRouter};