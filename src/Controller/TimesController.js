import { Router } from "express";

import ListarTimesService from "../service/Times/ListarTimesService.js";
import ListarTimesIDService from "../service/Times/ListarTimesIDService.js";
import InserirTimeService from "../service/Times/InserirTimesTimesService.js";
import FiltrarTimeService from "../service/Times/FIltrarTImesService.js";
import AtualizarTimeIDService from "../service/Times/AtualizarTimesService.js";
import DeletarTimeService from "../service/Times/DeletarTImesIDService.js";

const endpoints = Router()

endpoints.get('/times', async (req, res) => {
    let times = await ListarTimesService()

    res.json(times)
})

endpoints.get('/times/:id', async (req, res) => {
    let id = req.params.id;

    let times = await ListarTimesIDService(id)

    res.json(times)
})

endpoints.get('/timess/filtrar', async (req, res) => {
    let nome = req.query.nome;

    let times = await FiltrarTimeService(nome)

    res.json(times)
})

endpoints.post('/times', async (req, res) => {
    let times = req.body;

    let Idtime = await InserirTimeService(times)

    res.status(201).json({
        id: Idtime
    });
})

endpoints.put('/times/:id', async (req, res) => {
    let id = req.params.id;
    let times = req.body;

    let resultados = await AtualizarTimeIDService(times, id)

    res.json()
})

endpoints.delete('/times/:id', async (req, res) => {
    let id = req.params.id;

    let times = await DeletarTimeService(id)

    res.json()

})

export default endpoints