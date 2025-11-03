const express = require('express');
const router = express.Router();

// Referencia dos arquivo de rotas
const {produtoRoutes} = require('./produtoRoutes');
const {clienteRouter} = require('./clienteRouter');

router.use('/', produtoRoutes);
router.use('/', clienteRouter);

module.exports = { router };