import { Router } from "express";

import ListarJogosService from "../service/Jogos/LIstarJogosService.js"
import CriarJogoServices from "../service/Jogos/InserirJogosService.js"
import ListarJogosIDService from "../service/Jogos/ListarJogosIDService.js"
import AtualizarJogoIDService from "../service/Jogos/AtualizarJogoIDService.js"
import DeletarJogoIDService from "../service/Jogos/DeletarJogoIDService.js";
import FiltrarJogosService from "../service/Jogos/FiltrarJogosService.js";


const endpoints = Router()

endpoints.get('/jogos', async (req, res) => {
    let resultados = await ListarJogosService()

    res.json(resultados)
})

endpoints.get('/jogos/:id', async (req, res) => {
    let id = req.params.id;

    let Resultados = await ListarJogosIDService(id)

    res.json(Resultados)
})

endpoints.get('/jogoss/filtrar', async (req, res) => {
    let nome = req.query.nome;

    let resultados = await FiltrarJogosService(nome)

    res.json(resultados)
})

endpoints.post('/jogos', async (req, res) => {
    let jogos = req.body;

    let IdJogos = await CriarJogoServices(jogos)

    res.status(201).json({
        id: IdJogos
    })
})

endpoints.put('/jogos/:id', async (req, res) => {
    let id = req.params.id;
    let Dados = req.body;

    let NovosDados = await AtualizarJogoIDService(Dados, id)

    res.json()
})

endpoints.delete('/jogos/:id', async (req, res) => {
    let id = req.params.id;

    let Dados = await DeletarJogoIDService(id)

    res.json()
})

export default endpoints
