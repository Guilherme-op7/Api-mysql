import { Router } from "express";

import ListarAnimesService from "../service/Animes/ListarAnimesService.js";
import InserirAnimesService from "../service/Animes/InserirAnimesService.js";
import ListarAnimesIDService from "../service/Animes/ListarAnimesIDService.js";
import FiltrarAnimesService from "../service/Animes/FiltrarAnimesService.js";
import AtualizarAnimesIDService from '../service/Animes/AtualizarAnimesIDService.js';
import DeletarAnimeIDService from '../service/Animes/DeletarAnimesIDService.js'
const endpoints = Router()

endpoints.get('/animes', async (req, res) => {
    let anime = await ListarAnimesService()

    res.json(anime)
})

endpoints.get('/animes/:id', async (req, res) => {
    let id = req.params.id;

    let Resultados = await ListarAnimesIDService(id)

    res.json(Resultados)
})


endpoints.get('/animess/filtrar', async (req, resp) => {
  let nome = req.query.nome;

  let registros = await FiltrarAnimesService(nome);

  resp.send(registros);
});

endpoints.post('/animes', async (req, res) => {
    let animes = req.body;

    let Idanime = await InserirAnimesService(animes);

    res.status(201).json({
        id: Idanime
    });
});

endpoints.put('/animes/:id', async (req, res) => {
    let id = req.params.id;
    let NovosDados = req.body;

    await AtualizarAnimesIDService(id, NovosDados)

    res.json()
})

endpoints.delete('/animes/:id', async (req, res) => {
    let id = req.params.id;

    let Resultados = await DeletarAnimeIDService(id)

    res.json()
})

export default endpoints;