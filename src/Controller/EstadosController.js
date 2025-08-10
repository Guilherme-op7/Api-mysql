import { Router } from "express";

import ListarEstadosServices from "../service/Estados/ListarEstadosServices.js";
import CriarEstadosService from "../service/Estados/InserirEstadosService.js";
import AtualizarEstadoIDService from "../service/Estados/AtualizarEstadosServiceID.js";
import DeletarEstadoIDService from "../service/Estados/DeletarEstadosIDService.js";
import ListarEstadosIDServices from "../service/Estados/ListarEstadosIDService.js";
import FiltrarEstadosID from "../service/Estados/FiltrarEstadosIDService.js";



const endpoints = Router()

endpoints.get('/estados', async (req, res) => {
    let estados = await ListarEstadosServices();

    res.json(estados)
})

endpoints.get('/estados/:id', async (req, res) => {
    let id = req.params.id;

    let Dados = await ListarEstadosIDServices(id);

    res.json(Dados)
})

endpoints.get('/estadoss/filtrar', async (req, res) => {
    let nome = req.query.nome;

    let Dados = await FiltrarEstadosID(nome)

    res.json(Dados)
})

endpoints.post('/estados', async (req, res) => {
    let estados = req.body;

    let IdEstados = await CriarEstadosService(estados)

    res.status(201).json({
        id: IdEstados
    })
})

endpoints.put('/estados/:id', async (req, res) => {
    let id = req.params.id;
    let dados = req.body;

    let NovosDados = await AtualizarEstadoIDService(dados, id)

    res.json(NovosDados)
})

endpoints.delete('/estados/:id', async (req, res) => {
    let id = req.params.id;

    let Dados = await DeletarEstadoIDService(id)

    res.json()
})

export default endpoints