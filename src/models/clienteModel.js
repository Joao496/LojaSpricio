const { pid } = require('process');
const pool = require('../config/db');



const clienteModel = {


    buscarTodosClientes: async () => {
        const sql = 'SELECT * FROM clientes;';
        const [rows] = await pool.query(sql);
        return rows;
    },


    criarCliente: async (nomeCliente, cpfCliente) => {
        const sql = 'INSERT INTO clientes (nome_cliente, cpf_cliente) VALUES (?, ?);';
        const [result] = await pool.query(sql, [nomeCliente, cpfCliente]);
        return result;
    },


    buscarClientePorCPF: async (cpfCliente) => {
        const sql = 'SELECT * FROM clientes WHERE cpf_cliente = ?;';
        const [rows] = await pool.query(sql, [cpfCliente]);
        return rows[0];
    }

}
module.exports = { clienteModel };