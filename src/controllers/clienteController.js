
const {clienteModel} = require('../models/clienteModel');

const clienteController = {

 getClientes: async (req, res) => {
  try {
    const resultado = await clienteModel.buscarTodosClientes();

    res.status(200).json({data: resultado});
    
  } catch (error) {
    res.status(500).json({ message: 'Erro no server', errorMessage: error.message });
  }
},


 criarNovoCliente: async (req, res) => {
  try {
    const { nomeCliente, cpfCliente } = req.body;

    if (!nomeCliente || !cpfCliente) {
      return res.status(400).json({ message: 'Nome e CPF são obrigatórios' });
    }


    const clienteExistente = await clienteModel.buscarClientePorCPF(cpfCliente);
    if (clienteExistente) {
      return res.status(409).json({ message: 'CPF já cadastrado!' });
    }

    const resultado = await clienteModel.criarCliente(nomeCliente, cpfCliente);
    res.status(201).json({ message: 'Cliente criado com sucesso', id: resultado.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar cliente', error });
  }
}

}

module.exports = { clienteController };