import 'dotenv/config.js';
import express from 'express';
import Roteamento from './routes.js';

const server = express();
server.use(express.json());

Roteamento(server)

const PORTA = process.env.PORTA;

server.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
