import { Vaga } from "../models/Vaga.js";

const criarVaga = async (req, res) => {
    try {
        const { titulo, descricao, cargo, cidade, salario } = req.body;

        if (!titulo || !descricao || !cargo || !cidade) {
            return res.status(404).send({ mensagem: 'Favor informar todos os campos obrigatórios: título, descrição, cargo e cidade' });
        }

        const vaga = await Vaga.create({ titulo, descricao, cargo, cidade, salario });
        res.status(201).send({ vaga });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

const listarVagas = async (req, res) => {
    try {
        const resultado = await Vaga.findAll();
        res.status(200).send({ resultado });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

const listarVagaPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await Vaga.findByPk(id);
        
        if (!resultado) {
            return res.status(404).send({ mensagem: 'Vaga não encontrada' });
        }

        res.status(200).send({ resultado });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

const atualizarVaga = async (req, res) => {
    try {
        const id = req.params.id;
        const { titulo, descricao, cargo, cidade, salario } = req.body;
        const resultado = await Vaga.update({ titulo, descricao, cargo, cidade, salario }, { where: { id } });
        
        if (!resultado[0]) {
            return res.status(404).send({ mensagem: 'Vaga não encontrada' });
        }

        res.status(200).send({ mensagem: 'Vaga atualizada com sucesso' });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

const apagarVaga = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await Vaga.destroy({ where: { id } });

        if (!resultado) {
            return res.status(404).send({ mensagem: 'Vaga não encontrada' });
        }

        res.status(200).send({ mensagem: 'Vaga apagada com sucesso' });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

const listarVagasPorCargo = async (req, res) => {
    try {
        const cargo = req.params.cargo;
        const resultado = await Vaga.findAll({ where: { cargo } });
        res.status(200).send({ resultado });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

const listarVagasPorCidade = async (req, res) => {
    try {
        const cidade = req.params.cidade;
        const resultado = await Vaga.findAll({ where: { cidade } });
        res.status(200).send({ resultado });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

export { criarVaga, listarVagas, listarVagaPorId, atualizarVaga, apagarVaga, listarVagasPorCargo, listarVagasPorCidade };
