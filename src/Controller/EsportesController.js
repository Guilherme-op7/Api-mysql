import { Router } from "express";

import CriarEsporteService from "../service/Esportes/InserirEsportesServices.js";
import ListarEsportesIDService from "../service/Esportes/ListarEsportesIDService.js";
import ListarEsportesServices from "../service/Esportes/ListarEsportesService.js";
import FiltrarEsportesService from "../service/Esportes/FiltrarEsportesService.js";
import AtualizarEsporteIDService from "../service/Esportes/AtualizarEsportesIDService.js";
import DeletarEsportesIDService from "../service/Esportes/DeletarEsportesIDService.js";

const endpoints = Router()

endpoints.get('/esportes', async (req, res) => {
    let esportes = await ListarEsportesServices();

    res.json(esportes)
})

endpoints.get('/esportes/:id', async (req, res) => {
    let id = req.params.id;

    let resultados = await ListarEsportesIDService(id)

    res.json(resultados)
})

endpoints.get('/esportess/filtrar', async (req, res) => {
    let nome = req.query.nome;

    let resultados = await FiltrarEsportesService(nome)

    res.json(resultados)
})

endpoints.post('/esportes', async (req, res) => {
    let esportes = req.body;

    let idEsportes = await CriarEsporteService(esportes);

    res.status(201).json({
        id: idEsportes
    })
})

endpoints.put('/esportes/:id', async (req, res) => {
    let id = req.params.id;
    let Dados = req.body;

    let resultados = await AtualizarEsporteIDService(Dados, id);

    res.json(resultados)
})



endpoints.delete('/esportes/:id', async (req, res) => {
    let id = req.params.id;

    let Resultados = await DeletarEsportesIDService(id);

    res.json()
})

export default endpoints