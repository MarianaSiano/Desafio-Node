const { Pool } = require('pg');

//Configuração da conexão com o banco de dados
const pool = new Pool({
    user: 'postgres',
    password: '555014',
    host: 'localhost',
    port: 5432,
    database: 'desafio-node'
})

//Função para criar a tabela
async function createTable() {
    const client = await pool.connect();

    try {
        //Criação da tabela "Restaurante"
        await client.query(`
            CREATE TABLE Restaurante (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                senha VARCHAR(255) NOT NULL,
                categoria VARCHAR(255) NOT NULL,
                cidade VARCHAR(255) NOT NULL,
                endereco VARCHAR(255) NOT NULL,
                telefone VARCHAR(255) NOT NULL,
            )
        `);

        //Criaçãp da tabela "Produtos"
        await client.query(`
            CREATE TABLE Produtos (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                descricao VARCHAR(255) NOT NULL,
                quantidade VARCHAR(255) NOT NULL,
                preco VARCHAR(255) NOT NULL,
                categoria VARCHAR(255) NOT NULL,
                id_restaurante REFERENCES Restaurante(id)
            )
        `);

        //Criação da tabela "Pedidos"
        await client.query(`
            CREATE TABLE Pedidos (
                id SERIAL PRIMARY KEY,
                valor_total float NOT NULL,
                nome_cliente VARCHAR(255) NOT NULL,
                cidade_cliente VARCHAR(255) NOT NULL,
                endereco_cliente VARCHAR(255) NOT NULL,
                telefone_cliente VARCHAR(255) NOT NULL,
                restaurante REFERENCES Restaurante
                produtos REFERENCES Produtos
            )
        `)

        console.log('Tabelas criada com sucesso!');
    } catch (error) {
        console.log('Erro ao criar as tablelas: ', error);
    } finally {
        client.release();
    }
}

//Chamada da função para criar a tabela
createTable();