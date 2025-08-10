import { Router } from "express";

import ListarSeriesService from "../service/Series/ListarSeriesService.js";
import ListarSeriesIDService from "../service/Series/ListarSeriesIDService.js";
import InserirSerieService from "../service/Series/InserirSeriesService.js";
import AtualizarSerieIDService from "../service/Series/AtualizarSeriesIDService.js";
import DeletarSerieIdService from "../service/Series/DeletarSeriesIDService.js";
import FiltrarSerieService from "../service/Series/FiltrarSeriesServices.js";

const endpoints = Router()

endpoints.get('/series', async (req, res) => {
    let series = await ListarSeriesService();

    res.json(series)
})

endpoints.get('/series/:id', async (req, res) => {
    let id = req.params.id;

    let Dados = await ListarSeriesIDService(id);

    res.json(Dados)
})

endpoints.get('/seriess/filtrar', async (req, res) => {
    let nome = req.query.nome;

    let Dados = await FiltrarSerieService(nome);

    res.json(Dados)
})

endpoints.post('/series', async (req, res) => {
    let series = req.body;

    let Idserie = await InserirSerieService(series);

    res.json(Idserie)
})

endpoints.put('/series/:id', async (req, res) => {
    let id = req.params.id;
    let Dados = req.body;

    let resultados = await AtualizarSerieIDService(Dados, id)

    res.json(resultados)
})

endpoints.delete('/series/:id', async (req, res) => {
    let id = req.params.id;

    let resultados = await DeletarSerieIdService(id)

    res.json()
})

export default endpoints