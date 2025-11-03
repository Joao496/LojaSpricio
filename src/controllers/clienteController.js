const { clienteModel } = require('../models/clienteModel');

const clienteController = {

  getClientes: async (req, res) => {
    try {
      const resultado = await clienteModel.buscarTodosClientes();
      res.status(200).json({ data: resultado });
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
  },

  
  getClientePorId: async (req, res) => {
    try {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ message: 'O parâmetro ID é obrigatório.' });
      }

      const cliente = await clienteModel.buscarClientePorId(id);

      if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado.' });
      }

      res.status(200).json({ data: cliente });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar cliente por ID', error });
    }
  },


  atualizarCliente: async (req, res) => {
    try {
      const { id } = req.params;
      const { nomeCliente, cpfCliente } = req.body;

      if (!nomeCliente || !cpfCliente) {
        return res.status(400).json({ message: 'Nome e CPF são obrigatórios.' });
      }

      const resultado = await clienteModel.atualizarCliente(id, nomeCliente, cpfCliente);

      if (resultado === 0) {
        return res.status(404).json({ message: 'Cliente não encontrado para atualização.' });
      }

      res.status(200).json({ message: 'Cliente atualizado com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar cliente', error });
    }
  },


  deletarCliente: async (req, res) => {
    try {
      const { id } = req.params;

      const resultado = await clienteModel.deletarCliente(id);

      if (resultado === 0) {
        return res.status(404).json({ message: 'Cliente não encontrado para exclusão.' });
      }

      res.status(200).json({ message: 'Cliente excluído com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir cliente', error });
    }
  }

};

module.exports = { clienteController };
