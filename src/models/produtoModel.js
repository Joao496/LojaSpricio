const pool = require('../config/db')

const produtoModel = {
    /**
     * Seleciona todos os produtos cadastrados na tabela
     * @async
     * @function selecionarTodos
     * @returns Retorna o resultado com um array de objeto, cada objeto representa um registro da tabela
     * @example
     * const produtos = await produtoModel.selecionarTodos();
     * console.log(produtos);
     * //Saída esperada 
     * [
     *     {id_Produto: 1, descricao: 'teclado', valor: 150,00},
     *     {id_Produto: 2, descricao: 'mouse', valor: 399,99},
     * ]
     *       
    */

    selecionarTodos: async () => {
        const sql = 'SELECT * FROM produtos;';
        const [rows] = await pool.query(sql);
        return rows;
    },
    /**
     * Seleciona
     * @async
     * @param {number} pId Identificar que deve ser pesquisado no banco de dados
     * @returns {Promise<Array<object>>}
     * 
     * @example
     * const produto = await produtoModel.selecionarPorId(1);
     * console.log(produto);
     * //Saída esperada
     * [
     *      {id_Produto: 1, descricao: 'teclado', valor: 150,00}
     * ]
     */
     
    selecionaPorId: async (pId) => {
        const sql = 'SELECT * FROM produtos;';
        const values = [pId]
        const [rows] = await pool.query(sql, values);
        return rows;
    },

    inserirProduto: async (pDescricao, res) => {
        const sql = 'INSERT INTO produtos (descricao, valor) VALUES (?,?)';
        const values = [pDescricao, pValor];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    }
}

module.exports = { produtoModel };