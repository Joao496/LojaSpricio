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
    },

    buscarClientePorId: async (id) => {
  const [rows] = await pool.query('SELECT * FROM clientes WHERE id_cliente = ?;', [id]);
  return rows[0];
},


inserirCliente: async (nomeCliente, cpfCliente) => {
  const [result] = await pool.query(
    'INSERT INTO clientes (nome_cliente, cpf_cliente) VALUES (?, ?);',
    [nomeCliente, cpfCliente]
  );
  return result.insertId;
},


atualizarCliente: async (id, nomeCliente, cpfCliente) => {
  const [result] = await pool.query(
    'UPDATE clientes SET nome_cliente = ?, cpf_cliente = ? WHERE id_cliente= ?;',
    [nomeCliente, cpfCliente, id]
  );
  return result.affectedRows;
},

deletarCliente: async (id) => {
  const [result] = await pool.query('DELETE FROM clientes WHERE id_cliente = ?;', [id]);
  return result.affectedRows;
}

}
module.exports = { clienteModel };