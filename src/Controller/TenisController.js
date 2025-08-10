import { Router } from "express";

import ListarTenisService from "../service/Tenis/ListarTenisRepository.js";
import ListarTenisIDService from "../service/Tenis/ListarTenisIDRepository.js";
import FiltrarTenisService from "../service/Tenis/FiltrarTenisRepository.js";
import InserirTenisService from "../service/Tenis/InserirTenisRepository.js";
import AtualizarTenisIDService from "../service/Tenis/AtualizarTenisIDRepository.js";
import DeletarTenisIDService from "../service/Tenis/DeletarTenisIDRepository.js"

const endpoints = Router()


endpoints.get('/tenis', async (req, res) => {
    let Tenis = await ListarTenisService()

    res.json(Tenis)
})

endpoints.get('/tenis/:id', async (req, res) => {
    let id = req.params.id;

    let Tenis = await ListarTenisIDService(id)

    res.json(Tenis)
})

endpoints.get('/teniss/filtrar', async (req, res) => {
    let nome = req.query.nome;

    let Tenis = await FiltrarTenisService(nome)

    res.json(Tenis)
})

endpoints.post('/tenis', async (req, res) => {
    let tenis = req.body;

    let idTenis = await InserirTenisService(tenis)

    res.status(201).json({
        id: idTenis
    })
})

endpoints.put('/tenis/:id', async (req, res) => {
    let id = req.params.id;
    let Dados = req.body;

    let resultados = await AtualizarTenisIDService(Dados, id);

    res.json(resultados)
})

endpoints.delete('/tenis/:id', async (req, res) => {
    let id = req.params.id;

    let dados = await DeletarTenisIDService(id);

    res.json()
})

export default endpoints