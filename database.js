import { Sequelize } from 'sequelize';

const conexao = new Sequelize('postgresql://lucio:GZEcD2NRgMGxqB9vkDTfWA@paiku-sama-1702.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full', {
    dialect: 'postgres',
});

try {
    await conexao.authenticate();
    console.log('Conectado com sucesso ao banco de dados');
} catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
}

export default conexao;
